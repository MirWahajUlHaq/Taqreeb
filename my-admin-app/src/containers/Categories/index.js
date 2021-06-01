import React, { useEffect, useState } from "react";
import { Jumbotron } from 'react-bootstrap'
import AdminLayout from '../../components/AdminLayout'
import { Container, Form, Row, Col, Button, Modal } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { addCategory, adminlogin } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { getAllCategory } from '../../actions/';

const Category = (props) => {
  const category = useSelector(state => state.category);
  const [categoryName, setCategoryName] = useState('');
  // const [categorySlug, setCategorySlug] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    // const form = new FormData();
    // form.append('name', categoryName);
    // // form.append('slug',categorySlug)
    // form.append('categoryImage', categoryImage);
    // console.log(form.get(categoryName));
    const name = categoryName;
    const category = {
      name
    }
    console.log(category);
    dispatch(addCategory(category));
    // const cat = {
    //   categoryName,
    //   categoryImage
    // };
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.name}
        </li>
      );
    }
    return myCategories;
  }

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  }

  return (
    <div>
      <AdminLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 style={{ marginLeft: "140px" }}>Categories</h1>
            </Col>
          </Row>
          <Button style={{ padding: "20px", marginLeft: "450px", marginTop: "50px", marginBottom: "50px", backgroundColor: "green" }} onClick={handleShow}>Add Category</Button>
          <MDBListGroup style={{ minWidth: '22rem' }}>
            <MDBListGroupItem>
              {renderCategories(category.categories)}
            </MDBListGroupItem>
            {/* <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
      <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
      <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
      <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem> */}
          </MDBListGroup>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              value={categoryName}
              type={String}
              placeholder={`Category Name`}
              onChange={(e) => setCategoryName(e.target.value)}>
              </Input>
            {/* <Input value = {categorySlug}
                type = {String}
              placeholder = {`Category Slug`}
              onChange = {(e) => setCategorySlug(e.target.value)} /> */}
            <Input type="file" placeholder={`Category Image`} name="categoryImage" onChange={handleCategoryImage} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </AdminLayout>
    </div>
  );
}
export default Category;