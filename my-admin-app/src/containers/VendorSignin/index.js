import React, { useEffect, useState } from "react";
import VendorLayout from "../../components/VendorLayout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { isUserLoggedIn, login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect , useHistory } from "react-router";
import axios from "axios";
import { VENDOR_LOGIN_API } from "../../components/commonFunction/Api";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();
 
  const history = useHistory();
  useEffect(() =>{
    if(!auth.authenticate){
    dispatch(isUserLoggedIn());
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    }

    
    if(auth.authenticate){
 
      window.location.href = '/';
    }



  return (
    <div>
      <VendorLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
            <h1 style={{marginTop: "25px"}}>Vendor Sign In</h1>
            <br></br>
            <br></br>
              <Form>
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
                <Button variant="primary" type="submit" onClick={userLogin} >
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
