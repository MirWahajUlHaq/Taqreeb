import React, { useState , useEffect } from "react";
import AdminLayout from '../../components/AdminLayout'

import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import {  getAdminOrders } from "../../actions";


/**
 * @author
 * @function Products
 **/

const Orders = (props) => {
 
  const Orders = useSelector((state) => state.product.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminOrders());
  }, []);



 

const htmlOutput = (productStatus) =>{
  return productStatus == 0 ? (<span class='badge badge-pill badge-primary'>Pending</span>) : (<span class='badge badge-pill badge-success'>Approved</span>)
}
 



  const renderOrders = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Date</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>User Email</th>
            <th>Vendor Email</th>
            <th>Status</th>
           
          </tr>
        </thead>
        <tbody>
          {Orders && Orders.length > 0
            ? Orders.map((order,key) => (
                <tr key={order._id}>
                   <td>{key+1}</td>
                  <td>{order.startDate} -- {order.endDate}</td>
                  <td>{order.productId.productName}</td>
                  <td>{order.price}</td>
                  <td>{order.userId.email}</td>
                  <td>{order.vendorId.email}</td>
                  <td>{ htmlOutput(order.status)}</td>
                </tr>
              ))
            : (<tr><td colspan="5" class="text-center p-4 bold">No Orders</td></tr>)}
        </tbody>
      </Table>
    );
  };


  return (
    <AdminLayout>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }} class="m-3">
              <h3>Orders</h3>
          
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderOrders()}</Col>
        </Row>
      </Container>
   
    </AdminLayout >
  );
};

export default Orders;