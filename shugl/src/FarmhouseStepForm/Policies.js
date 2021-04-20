import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import {Button} from '@material-ui/core'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import CustomizedSelects from './CustomizedSelects';

const Policies = ({formData, setForm, navigation}) => {
    const {cancellationPolicy, startTime, endTime} = formData;
    return (
        <div>
            <div className='multistep-container'>
            <Button onClick={()=>navigation.previous()} variant='contained'  color='primary' style={{marginTop: '1.5rem', width:'5rem', marginBottom:'2rem', marginLeft:'4rem', backgroundColor:'#D6324A', color:'white'}}>Back</Button>
                    <div className='multistep-form-area'>
                        <div className='form-box'>
                            <ul className = 'active-button'>
                                <li className='active'>
                                    <span className='round-btn'>1</span>
                                </li>
                                <li className='active'>
                                    <span className='round-btn'>2</span>
                                </li>
                                <li className='active'>
                                    <span className='round-btn'>3</span>
                                </li>
                                <li className='active'>
                                    <span className='round-btn'>4</span>
                                </li>
                                <li className='active'>
                                    <span className='round-btn'>5</span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            <Container maxWidth='xs'>
                <h3 style={{marginTop:'25px'}}>Policies</h3>
                <div className='row mt-3'>
                <Card style={{ width: '25rem', marginLeft:'1rem'}}>
                    <Card.Body>
                        <Card.Title>Cancellation</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">When can the guests can their booking?</Card.Subtitle>
                        <CustomizedSelects cancelPolicy={[cancellationPolicy]}/>
                    </Card.Body>   
                </Card>
                </div>
                <div className='row mt-3'>
                    <Card style={{ width: '25rem', marginLeft:'1rem' }}>
                        <Card.Body>
                            <Card.Title>Opening Time</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">from:</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem', marginLeft:'1rem' }}>
                        <Card.Body>
                            <Card.Title>Closing Time</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">to:</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='row mt-3'>
                <Card style={{ width: '25rem', marginLeft:'1rem' }}>
                        <Card.Body>
                            <Card.Title>Do you allow Smoking?</Card.Title>
                            <Form>
                                <div key={`default-radio`} className="mb-3">
                                    <Form.Check 
                                        type='radio'
                                        id={`default-radio`}
                                        label={`Yes`}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id={`default-radio`}
                                        label={`No`}
                                    />
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <Button variant='contained' fullWidth color='primary' style={{marginTop: '1rem', width:'23rem', marginBottom:'2rem', marginLeft:'1rem',backgroundColor:'#D6324A', color:'white'}}>Submit</Button>
            </Container>
            
        </div>
    )
}

export default Policies