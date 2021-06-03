import React, { useState , useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Layout from "../../components/VendorLayout";
import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getProducts , getReviews,addProduct, deleteProductById,deleteReviewById, getAllCategory } from "../../actions";
import { UPLOAD_PRODUCT_IMAGE_API, ADD_REVIEW } from "../../components/commonFunction/Api";
import { getCommonHeaders_res } from "../../components/commonFunction/CommonMethod";
import axios from "axios";


/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  const [categoryname, setCategoryName] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [review, setReview] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);

  const reviews = useSelector((state) => state.product.reviews);
  
  console.log('reviewsreviews',reviews)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(getReviews());
  }, []);



  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

// console.log('category',category)

const htmlOutput = (productStatus) =>{
  return productStatus == 0 ? (<span class='badge badge-pill badge-primary'>Pending</span>) : (<span class='badge badge-pill badge-success'>Approved</span>)
}
  const handleClose = () => {
    setShow(false);
  };

  const submitProductForm = async () => {  
    
    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

    const productData = {
      productId : categoryId,
      reviewerName :reviewName,
      review: review,
    };
    
    
    const {data:{data}} = await axios.post(ADD_REVIEW,productData,{headers: config.headers});
   

   
    toastr.success("Review Added Successfully");
    setReview('');
    setReviewName('');
    setCategoryId('');
    dispatch(getReviews());
    setShow(false)
  };

  const handleShow = () => setShow(true);
  
  const createCategoryList = (categories, options = []) => {

    for (let category of categories) {
      options.push({ value: category._id, name: category.productName });
    }

    return options;
  };

  const handleProductPictures = (e) => {
    // setProductPictures([...productPictures, e.target.files[0]]);
    setProductPictures(e.target.files[0]);

  };

  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Reviewer Name</th>
            <th>Review</th>
            <th>Product Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.reviews && product.reviews.length > 0
            ? product.reviews.map((product,key) => (
                <tr key={product._id}>
                   <td>{key+1}</td>
                  <td>{product.reviewerName}</td>
                  <td>{product.review}</td>
                  <td>{product.productId.productName}</td>
                  <td>

                    <button
                      onClick={() => {
                        const payload = {
                          reviewId: product._id,
                        };
                        dispatch(deleteReviewById(payload));
                      }}
                      class="btn btn-md btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : (<tr><td colspan="5" class="text-center p-4 bold">No Records</td></tr>)}
        </tbody>
      </Table>
    );
  };

  const renderAddProductModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New Review"}
        onSubmit={submitProductForm}
      >
        <Input
          label="Reviwer Name"
          value={reviewName}
          placeholder={`Reviwer Name`}
          onChange={(e) => setReviewName(e.target.value)}
        />
        <Input
          label="Review"
          value={review}
          placeholder={`Review`}
          onChange={(e) => setReview(e.target.value)}
        />
        Select Product
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Select Product</option>
          {
          
          product.products && product.products.length > 0 ? (createCategoryList(product.products).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))
          )
        :
        'Please add product First'}
        </select>
        <br></br>
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
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="6">
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <label className="key">Category</label>
            <p className="value">{productDetails.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div style={{ display: "flex" }}>
              {productDetails.productPictures.map((picture) => (
                <div className="productImgContainer">
                  <img src={picture.img} alt="" />
                </div>
              ))}
            </div>
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
            <div style={{ display: "flex", justifyContent: "space-between" }} class="m-3">
              <h3>Products</h3>
              <button onClick={handleShow}  class="btn btn-md btn-warning">Add Review</button>
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