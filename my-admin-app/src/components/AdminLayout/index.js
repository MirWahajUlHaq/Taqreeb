import React from "react";
import { Container } from "react-bootstrap";
import AdminHeader from "../AdminHeader/index";
export default function Layout(props) {
  return (
    <>
      <AdminHeader />
      {props.children}
    </>
  );
}
