import React, { useState } from "react";
import VendorLayout from "../../components/VendorLayout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import {Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";


const Signup = (props) => {
  
  const auth = useSelector(state => state.auth);
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 
  const userSignup = (e) =>{
    e.preventDefault();
    const user = { 
      firstName, lastName, phone, email, password
    }
    dispatch(signup(user));
  }

  if(auth.authenticate){
    return <Redirect to = {'/'} />
  }
  
  return (
    <div>
      <VendorLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
            <h1 style={{marginTop: "25px"}}>Vendor Sign Up</h1>
            <br></br>
            <br></br>
              <Form onSubmit ={userSignup}>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email address"
                  placeholder="Enter email address"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

<Input
                  label="Phone number"
                  placeholder="Enter phone number"
                  value={phone}
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </VendorLayout>
    </div>
  );
}
 export default Signup