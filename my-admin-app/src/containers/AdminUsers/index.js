import React, { useState , useEffect } from "react";
import Layout from "../../components/VendorLayout";
import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getProducts , addProduct, deleteProductById , userCreateAdmin, getUsers} from "../../actions";


/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  const [categoryname, setCategoryName] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleClose = () => {
    setShow(false);
  };


 

  const submitProductForm = () => {
    
    
    const newObj = {
      firstName,
      lastName,
      phone,
      email,
      password,
      role
    }
    

   dispatch(userCreateAdmin(newObj)).then(() => setShow(false));
  };
  const handleShow = () => setShow(true);
  
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
    }

    return options;
  };

  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };

  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.users.length > 0
            ? product.users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.firstName} </td>
                  <td>{user.email}</td>
                  <td>{user.role == "0" ? 'User' : user.role =="1" ? 'Vendor' : 'Admin'}</td>
                  <td>
                    <button onClick={() => showProductDetailsModal(user)}>
                      info
                    </button>
                    <button
                      onClick={() => {
                        const payload = {
                          productId: product._id,
                        };
                        dispatch(deleteProductById(payload));
                      }}
                    >
                      del
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  const renderAddProductModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New User"}
        onSubmit={submitProductForm}
      >
        <Input
          label="First Name"
          value={firstName}
          placeholder={`First Name`}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name"
          value={lastName}
          placeholder={`Last Name`}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Phone"
          value={phone}
          placeholder={`Phone`}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          label="Email"
          value={email}
          type="email"
          placeholder={`Email`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          placeholder={`Password`}
          onChange={(e) => setPassword(e.target.value)}
        />
        Select Role
        <select
        label="Select Role"
          className="form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Select Role</option>
          <option key="0" value="0" >User</option>
          <option key="1" value="1">Vendor</option>
          <option key="2" value="2" >Admin</option>
        </select>
      
      </Modal>
    );
  };

  const handleCloseProductDetailsModal = () => {
    setProductDetailModal(false);
  };

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };

  const renderProductDetailsModal = () => {
    if (!productDetails) {
      return null;
    }

    return (
      <Modal
        show={productDetailModal}
        handleClose={handleCloseProductDetailsModal}
        modalTitle={"Product Details"}
        size="lg"
      >
        <Row>
          <Col md="6">
            <label className="key">Name</label>
            <p className="value">{productDetails.firstName}</p>
          </Col>
          <Col md="6">
            <label className="key">Email</label>
            <p className="value">{productDetails.email}</p>
          </Col>
        </Row>
         
      </Modal>
    );
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Users</h3>
              <button onClick={handleShow}>Add Users</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      {renderAddProductModal()}
      {renderProductDetailsModal()}
    </Layout>
  );
};

export default Products;