import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Redirect, useHistory} from 'react-router-dom';
import {API} from '../config'
const Category = (props) => {
    let history = useHistory();
     const routeChange = () => {
       
        if(props.id === 'Farmhouse'){
            history.push('/create/farmhouse')
         }
        else if(props.id === 'Beach Hut') {
            history.push('/create/beachHut')
        }
        else if(props.id === 'Hotel') {
            history.push('/create/hotel')
        }
        else if(props.id === 'Catering') {
            history.push('/create/catering')
        }
        else if (props.id === 'Event Decoration') {
            history.push('/create/eventDecoration')
        }
        else if (props.id === 'Photography') {
            history.push('/create/photography')
        }
        else if (props.id === 'Transport') {
            history.push('/create/transport')
        }
        else {
            history.push('/create/openspace')
            
        }

        
    }
    return(
        <div>
                
                <br />
                <div className='col'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img style={{height:'200px'}} variant="top" src={props.image}/>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                            {props.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button id = {props.id} className='btn btn-primary btn-outline' onClick={routeChange}>List</Button>
                        </Card.Body>
                        </Card>
                    </div>
            </div>
    )
}

export default Category;