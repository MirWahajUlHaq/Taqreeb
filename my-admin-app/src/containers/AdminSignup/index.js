import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import {Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {adminsignup, signup} from "../../actions";


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
    console.log(user);
    dispatch(adminsignup(user));
  }

  if(auth.authenticate){
    return <Redirect to = {'/admin'} />
  }
  
  return (
    <div>
      <AdminLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
            <h1 style={{marginTop: "25px"}}>Admin Sign Up</h1>
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
                  label="Phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </AdminLayout>
    </div>
  );
}
 export default Signup