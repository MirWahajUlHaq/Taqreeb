import React, {UseState} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './ActiveButton.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import CustomizedSelects from './CustomizedSelects.js'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

  


const StepOneCaterers = ({formData, setForm, navigation}) => {
      const {name, contactNumber, areaOfOperation, dishes, price, city, deliveryService} = formData;
      const classes = useStyles();
      console.log(navigation)
    return (
        <div>
            <div className='multistep-container'>
                    <div className='multistep-form-area'>
                        <div className='form-box'>
                            <ul className = 'active-button'>
                                <li className='active'>
                                    <span className='round-btn'>1</span>
                                </li>
                                <li className=''>
                                    <span className='round-btn'>2</span>
                                </li>
                                <li className=''>
                                    <span className='round-btn'>3</span>
                                </li>
                                <li className=''>
                                    <span className='round-btn'>4</span>
                                </li>
                                <li className=''>
                                    <span className='round-btn'>5</span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            
            <Container maxWidth='xs'>
                <h3 style={{marginTop:'100px'}}>Basic Info</h3>
            
            <Card style={{ width: 'fullWidth'}}>
                <Card.Body>
                <TextField 
            label = 'What is the name of your Catering Service?'
            name='(e.g) Al haaj Akhter Pakwan'
            value={name}
            onChange={setForm}
            margin='normal'
            variant='outlined'
            autoComplete='off'
            fullWidth />
            <TextField 
            label = 'Contact Number'
            name='(+92)'
            value={contactNumber}
            onChange={setForm}
            margin='normal'
            variant='outlined'
            autoComplete='off'
            fullWidth />
            <TextField 
            label = 'City'
            name='karachi'
            value={city}
            onChange={setForm}
            margin='normal'
            variant='outlined'
            autoComplete='off'
            fullWidth />
                    <Card.Title className='mt-4'>Areas of operation</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">In which areas do you operate?</Card.Subtitle>
                    <CustomizedSelects areaOfOperation={[areaOfOperation]}/>
                    <Card.Title className='mt-4'>Do you have a delivery Service?</Card.Title>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="select" name="select" value={deliveryService} onChange={setForm}>
                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                            <FormControlLabel value="false" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <Card.Title className='mt-4'>Dishes</Card.Title>
                    <div className='row mt-2'>
                        <div className='col col-md-3'>
                        
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Dish 1" variant="outlined" size='small' />
                                <TextField id="outlined-basic" label="Dish 2" variant="outlined" size='small' />
                            </form>
                        </div>
                        <div className='col col-md-3 offset-md-1'>
                            <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Price/Kg" variant="outlined" />
                                <TextField id="outlined-basic" label="Price/Kg" variant="outlined" />
                            </form>
                        </div>
                    </div>
                    
                </Card.Body>   
            </Card>
            

            
        <Button onClick={()=>navigation.next()} variant='contained' fullWidth  style={{marginTop: '1rem', backgroundColor:'#D6324A', color:'white', marginBottom:'2rem'}}>Next</Button>
        </Container>
    </div>
    )
}

export default StepOneCaterers