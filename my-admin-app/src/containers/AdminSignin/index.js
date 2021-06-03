import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { adminlogin, isUserLoggedIn} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

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
    dispatch(adminlogin(user));
    }

    if(auth.authenticate){

 
        window.location.href = '/admin';
    }

  return (
    <div>
      <AdminLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
            <h1 style={{marginTop: "25px"}}>Admin Sign In</h1>
            <br></br>
            <br></br>
              <Form onSubmit={userLogin}>
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
