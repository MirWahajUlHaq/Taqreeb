import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './ActiveButton.css'


const BasicInfo = ({formData, setForm, navigation}) => {
      const {name, address, city, country, streetAddress} = formData;
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
            <TextField 
            label = 'What is the name of your Farmhouse?'
            name='(e.g) Shamsi Farmhouse'
            value={name}
            onChange={setForm}
            margin='normal'
            variant='outlined'
            autoComplete='off'
            fullWidth />
            <TextField 
            label = 'Where is the Farhouse located?'
            name='Pakistan'
            value={country}
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
            <TextField 
            label = 'Address'
            name=''
            value={address}
            onChange={setForm}
            margin='normal'
            variant='outlined'
            autoComplete='off'
            fullWidth />
            <TextField 
            label = 'Street'
            name=''
            value={streetAddress}
            onChange={setForm}
            margin='normal'
            variant='outlined'
            autoComplete='off'
            fullWidth />
        <Button onClick={()=>navigation.next()} variant='contained' fullWidth  style={{marginTop: '1rem', backgroundColor:'#D6324A', color:'white'}}>Next</Button>
        </Container>
    </div>
    )
}

export default BasicInfo