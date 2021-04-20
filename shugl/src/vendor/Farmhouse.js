import React from 'react';
import Layout from '../core/Layout';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {API} from '../config'
import {Link, Redirect} from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const Farmhouse = () => {
const Categories = () => (
    <div>
        <div className='container'>
        <h4>How many Farmhouses are you listing?</h4>
        <br/>
            <div className='row'>
                <div className='col-md-4'>
                <Card>
                    <Card.Body>One Farmhouse</Card.Body>
                </Card>
                </div>
            </div>
            <br />
            <br />
            <div className='row'>
                <div className='col-md-4'>
                <Card>
                    <Card.Body>Multiple Farmhouses</Card.Body>
                </Card>
                </div>
            </div>
            
        </div>
    </div>
)
        
    

return(
    <Layout title='Step 2' description='You are only 2 steps away to becoming a vendor.'>
        {Categories()}
    </Layout>
)

}
export default Farmhouse;