import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import { Form, Container } from 'react-bootstrap'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const CheckOut = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '10ch',
            },
        },
    }))

    const confirmationBooking = () => (
        <div>
            <h4>Confirm and Pay</h4>
            <div className='row'>
                <div className='col col-md-3'>
                    <h6>Dates</h6>
                    <p color='text-muted'>Apr 25 - Apr 26</p>
                </div>
                <div className='col col-md-3'>
                    <h7>Edit</h7>
                </div>

            </div>
            <div className='row'>
                <Card variant="outlined" style={{ position: 'absolute', right: '50px', width: '400px', height: '400px', maxWidth: '400px', borderRadius: '10px 10px 10px 10px' }}>
                    <CardContent>
                        <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
                            Price Details
        </Typography>

                        <div className='row' style={{ marginTop: '2rem' }}>
                            <div className='col col-md-5' >

                                <p>Rs.27000 X 12hr</p>

                            </div>
                            <div className='col col-md-2' style={{ marginLeft: '7rem' }}>

                                <p>Rs.27000</p>

                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '1rem' }}>
                            <div className='col col-md-5'>

                                <p>Service fees</p>

                            </div>
                            <div className='col col-md-2'>
                                <div style={{ marginLeft: '7rem' }} >
                                    <p>Rs.5000</p>
                                </div>
                            </div>
                        </div>


                        <CardActions>
                            <Button variant='contained' color='primary' style={{ marginTop: '3rem', width: '15rem', height: '3rem', marginBottom: '2rem', marginLeft: '4rem', marginRight: '4rem', backgroundColor: '#D6324A', color: 'white' }}>Confirm Payment</Button>
                        </CardActions>
                    </CardContent>



                </Card>
            </div>

            <div className='row' >
                <div className='col col-md-3'>
                    <h3>Pay with</h3>
                </div>
                <div className='col col-md-3'>
                    <h6>Icons of easypaisa jazzcash credit and debit cards etc.</h6>
                </div>
            </div>
            <div className='row'>
                <div className='col col-md-6'>
                    <Form.Control as="select">
                        <option>Credit or Debit Card</option>
                        <option>EasyPaisa</option>
                        <option>JazzCash</option>
                    </Form.Control>
                </div>
            </div>
            <div className='row'>
                <div className='col col-md-3'>
                    <Form.Control type="text" placeholder="Expiration" />
                </div>
                <div className='col col-md-3'>
                    <Form.Control type="text" placeholder="CVV" />
                </div>
            </div>
            <div className='row'>
                <div className='col col-md-6'>
                    <Form.Control type="text" placeholder="Street Address" />
                    <Form.Control type="text" placeholder="Apt. or house number" />
                    <Form.Control type="text" placeholder="City" />
                </div>

            </div>
            <div className='row'>
                <div className='col col-md-3'>
                    <Form.Control type="text" placeholder="State" />
                </div>
                <div className='col col-md-3'>
                    <Form.Control type="text" placeholder="Zip" />
                </div>
            </div>
            <br />
            <div className='row' style={{ marginTop: '1rem' }}>
                <div className='col col-md-6' style={{ marginTop: '1rem' }}>
                    <label>Country</label>
                    <Form.Control as="select">
                        <option>Pakistan</option>
                    </Form.Control>
                </div>
            </div>
            <div className='row' style={{ marginTop: '2rem' }}>
                <div className='col col-md-6'>
                    <h4>Cancellation Policy</h4>
                    <p color='text-muted'>Free cancellation until 1:00 PM on Apr 24. After that, cancel before 1:00 PM on Apr 25 and get a full refund, minus the first night and service fee.</p>
                </div>

            </div>
        </div>
    )
    return (
        <Layout title='Shugl Home' description='Scene on hai!'>
            <Container>
                {confirmationBooking()}
            </Container>
        </Layout>

    )
}