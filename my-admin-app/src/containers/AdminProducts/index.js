import React, { useState , useEffect } from "react";
import AdminLayout from '../../components/AdminLayout'

import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProducts , addProduct, deleteProductById, getAllCategory } from "../../actions";
import { ADMIN_PRODUCT_API, APPROVE_PRODUCT_API } from "../../components/commonFunction/Api";
import { getCommonHeaders_res } from "../../components/commonFunction/CommonMethod";
import axios from "axios";


/**
 * @author
 * @function Products
 **/

const AdminProducts = (props) => {
  const [categoryname, setCategoryName] = useState("");
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
    dispatch(getAdminProducts());
  }, []);


// console.log('category',category)

const htmlOutput = (productStatus) =>{
  return productStatus == 0 ? (<span class='badge badge-pill badge-primary'>Pending</span>) : (<span class='badge badge-pill badge-success'>Approved</span>)
}
 

  const ProductApprove = async(id) => {

      const bodyParameters = {
        productId: id,
      };
  
      const headers = getCommonHeaders_res();
      const config = {
        headers,
      };

     const res =  await axios.post(APPROVE_PRODUCT_API,bodyParameters,{headers: config.headers});

     dispatch(getAdminProducts());
    }



  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.products && product.products.length > 0
            ? product.products.map((product,key) => (
                <tr key={product._id}>
                   <td>{key+1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.description}</td>
                  <td>{product.categoryId.categoryName}</td>
                  <td>{ htmlOutput(product.status)}</td>
                 
                  <td>

                    {product.status == 0 
                    ?<button
                    onClick={() => {
                      
                      ProductApprove(product._id);
                    }}
                    class="btn btn-md btn-primary">
                    Approve
                  </button> : <button type="button" class="btn btn-md btn-primary" disabled>
                    Approved 
                  </button>}
                    
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };



  return (
    <AdminLayout>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }} class="m-3">
              <h3>Products List</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
    </AdminLayout>
  );

};

export default AdminProducts;