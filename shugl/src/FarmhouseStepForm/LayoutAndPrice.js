import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const LayoutAndPrice = ({formData, setForm, navigation}) => {
    const {numberOfBedrooms, numberOfBathrooms, numberOfLounges, numberOfBeds, howManyGuests, numberOfChairs, numberOfSofas, numberOfTables, garden, swimmingPool, farmSize, price
} = formData
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
                <h3 style={{marginTop:'25px'}}>Layout and Price</h3>
                <TextField 
                label = 'Number of Bedrooms?'
                name='3'
                value={numberOfBedrooms}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Number of Bathrooms?'
                name='2'
                value={numberOfBathrooms}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Number of Lounges?'
                name='karachi'
                value={numberOfLounges}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Number of Beds'
                name=''
                value={numberOfBeds}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'How many guests can your Farmhouse accommodate?'
                name=''
                value={howManyGuests}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Number of Chairs?'
                name=''
                value={numberOfChairs}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Number of Sofas?'
                name=''
                value={numberOfSofas}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Number of Tables?'
                name=''
                value={numberOfTables}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Number of Swimming Pools'
                name=''
                value={swimmingPool}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Garden'
                name=''
                value={garden}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                 <TextField 
                label = 'Farm Size'
                name=''
                value={farmSize}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
                <TextField 
                label = 'Price'
                name=''
                value={price}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth />
            <Button onClick={()=>navigation.next()} variant='contained' fullWidth style={{marginTop: '1rem', marginBottom:'2rem', backgroundColor:'#D6324A', color:'white'}} >Next</Button>
            </Container>
        </div>
    )
}

export default LayoutAndPrice;