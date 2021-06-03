import React, { useState , useEffect } from "react";
import Layout from "../../components/VendorLayout";
import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductById, getAllCategory, getOrders } from "../../actions";
import { getCommonHeaders_res } from "../../components/commonFunction/CommonMethod";
import { ADMIN_PRODUCT_API, APPROVE_ORDER_API } from "../../components/commonFunction/Api";
import axios from "axios";


/**
 * @author
 * @function Products
 **/

const Orders = (props) => {
 
  const Orders = useSelector((state) => state.product.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);


  const OrderApprove = async(id) => {

    const bodyParameters = {
      orderId: id,
    };

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

   const res =  await axios.post(APPROVE_ORDER_API,bodyParameters,{headers: config.headers});

   dispatch(getOrders());
  }

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
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
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
                  <td>{ htmlOutput(order.status)}</td>
                 
                  <td>

                    {order.status == 0 
                    ?<button
                    onClick={() => {
                      
                      OrderApprove(order._id);
                    }}
                    class="btn btn-md btn-primary">
                    Approve
                  </button> : <button type="button" class="btn btn-md btn-primary" disabled>
                    Approved 
                  </button>}
                    
                  </td>
                </tr>
              ))
            : (<tr><td colspan="5" class="text-center p-4 bold">No Orders</td></tr>)}
        </tbody>
      </Table>
    );
  };


  return (
    <Layout>
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
   
    </Layout>
  );
};

export default Orders;