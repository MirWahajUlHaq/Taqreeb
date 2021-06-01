import React, { useState , useEffect } from "react";
import { Jumbotron } from 'react-bootstrap'
import AdminLayout from '../../components/AdminLayout'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { getAllVendors } from '../../actions/';

const VendorList = (props) => {
  const user = useSelector(state => state.user);
  // const [categoryName, setCategoryName] = useState('');
  // // const [categorySlug, setCategorySlug] = useState('');
  // const [categoryImage, setCategoryImage] = useState('');
  // const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVendors());
  }, []);

  const rendorVendors = (users) => {
    let myVendors = [];
    for (let user of users) {
      myVendors.push(
        <li key={user.name}>
          {user.name}
        </li>
      );
    }
    return myVendors;
  }

  return (
    <div>
      <AdminLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
            <h1>These are your vendors!</h1>
            </Col>
          </Row>
          <MDBListGroup style={{ minWidth: '22rem' }}>
            <MDBListGroupItem>
              {rendorVendors(user.users)}
            </MDBListGroupItem>
            </MDBListGroup>
        </Container>
      </AdminLayout>
    </div>
  );
}


export default VendorList;