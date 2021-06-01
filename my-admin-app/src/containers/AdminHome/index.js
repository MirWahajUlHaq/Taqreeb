import React, { useState } from "react";
import { Jumbotron } from 'react-bootstrap'
import AdminLayout from '../../components/AdminLayout'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { adminlogin } from "../../actions";
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
    dispatch(adminlogin(user));
  };
  return (
    <div>
      <AdminLayout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
            <h1>Welcome to Admin Dashboard</h1>
            </Col>
          </Row>
        </Container>
      </AdminLayout>
    </div>
  );
}