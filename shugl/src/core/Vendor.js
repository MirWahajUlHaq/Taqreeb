import React from 'react'
import Layout from './Layout';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import {API} from '../config'
import {Link, Redirect} from 'react-router-dom'

const Vendor = () => {

    const values=['Farmhouse', 'Beach Hut', 'Hotel', 'Catering Service', 'Photography sevice', 'Event Decorator Service']

    const registration = () => (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1 className='heading col-md-7 offset-md-'>Hi, Mir Wahaj Ul Haq, list your {values[0]}</h1>
                    <Card style={{ width: '18rem' }} className='col-md-3' >
                        <Card.Body>
                            <Card.Title><b>Create new listing</b></Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>It is free to create a listing</ListGroupItem>
                                <ListGroupItem>24/7 support by phone or email</ListGroupItem>
                                <ListGroupItem>Set your own venue rules for guests</ListGroupItem>
                                <ListGroupItem>Sync your calendar with other sites you list on</ListGroupItem>
                            </ListGroup>
                            <Card.Text><b>Create a partner account to get started:</b></Card.Text>
                            
                            <Card.Text>
                            By continuing, you agree to let Shugl.com email you re  garding your service registration.
                            </Card.Text>
                            <Button variant="primary" ><Link to='/vendorRegister'>Get Started</Link></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='container'>
                <h2>Your Piece of mind is our top priority</h2>
                <br/>
                <p>Here is how we are helping you feel confident welcoming guests</p>
                <ul style={{listStyleType:'none'}}>
                    <li>Set <b>house rules</b> guests must agree to before they stay</li>
                    <li>Request <b>damage deposits</b> for extra safety</li>
                    <li><b>Report guest misconduct</b> if something goes wrong</li>
                    <li>Access<b>24/7 support</b></li>
                </ul>
                <button className='btn btn-outline btn-primary'> Learn More</button>
            </div>
            <br/>
            <br/>
            <div className='container'>
                <h2>Benefits of working with us</h2>
                
                <div className='row'>
                    <div className='col-md-5'>
                        <img src=''></img>
                        <h4>List mentioned type of service</h4>
                        <p>Farmhouses to Huts and everything in between can be listed</p>
                    </div>
                    <div className='col-md-5 offset-md-1'>
                        <img src=''></img>
                        <h4>Easily import details</h4>
                        <p>To save you time, many of the details from your existing listings can be imported.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src=''></img>
                        <h4>Step-by-step guidance</h4>
                        <p>You’ll learn how our platform works, best practices, and things to watch out for.</p>
                    </div>
                    <div className='col-md-5 offset-md-1'>
                        <img src=''></img>
                        <h4>Exclusive discounts</h4>
                        <p>Discounts on products and services that save time and improve guests experience.</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
    return(
        <Layout 
        title='Register Now!' 
        description='You have a business?, We are here to give you the opportunity to sell'>
            {registration()}
            
        </Layout>
    )
}

export default Vendor;