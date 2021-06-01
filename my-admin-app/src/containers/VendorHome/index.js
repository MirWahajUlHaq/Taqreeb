import React, { useState } from "react";
import { Jumbotron } from 'react-bootstrap'
import VendorLayout from '../../components/VendorLayout'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch } from "react-redux";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };
  return (
    <div>
      <VendorLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
            <h1>Welcome to Vendor Dashboard</h1>
            </Col>
          </Row>
        </Container>
      </VendorLayout>
    </div>
  );
}
