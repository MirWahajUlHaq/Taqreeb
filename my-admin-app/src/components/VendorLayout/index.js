import React from "react";
import { Container } from "react-bootstrap";
import VendorHeader from "../VendorHeader/index";



export default function Layout(props) {
  return (
    <>
      <VendorHeader />
      {props.children}
    </>
  );
}
