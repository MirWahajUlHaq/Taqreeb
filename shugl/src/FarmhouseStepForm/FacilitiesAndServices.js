import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Card from 'react-bootstrap/Card'; 


const FacilitiesAndServices = ({formData, setForm, navigation}) => {
    const {parking, facilities} = formData

    

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
            <h3 style={{marginTop:'25px'}}>Facilities And Services</h3>
            <div className='row mt-3'>
            <Card style={{ width: '25rem', marginLeft:'1rem'}}>
              <Card.Body>
              <Card.Title>Parking</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Do you have your own parking space?</Card.Subtitle>
                  <FormGroup row>
                      <FormControlLabel
                          control={
                          <Checkbox checked = {parking} name="checkedB" onChange={setForm} style={{color:'#D6324A'}}
                          />
                          }
                          label="Yes"
                      />
                      <FormControlLabel
                          control={
                            <Checkbox checked = {parking} name="checkedB" onChange={setForm} style={{color:'#D6324A'}}
                          />
                        }
                        label="No"
                      />
                  </FormGroup>
              </Card.Body>
            </Card>
            </div>
            <div className='row mt-3'>
            <Card style={{ width: '25rem', marginLeft:'1rem' }}>
              <Card.Body> 
              <Card.Title>Other Facilities</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Which of the following activities do you offer?</Card.Subtitle>
                <FormControlLabel
                  control={
                      <Checkbox checked = {facilities.freeWifi} name="checkedB" onChange={setForm} style={{color:'#D6324A'}}
                      />
                    }
                      label="Free Wifi"
                    />
                <FormControlLabel
                control={
                  <Checkbox checked = {facilities.swimmingPool} name="checkedB" onChange={setForm} style={{color:'#D6324A'}}
                  />
                }
                label="Swimming pool"
              />
              <FormControlLabel
                control={
                  <Checkbox checked = {facilities.garden} name="checkedB" onChange={setForm} style={{color:'#D6324A'}}
                  />
                }
                label="Garden"
              />
              <FormControlLabel
                control={
                  <Checkbox checked = {facilities.terrace} name="checkedB" onChange={setForm} style={{color:'#D6324A'}}
                  />
                }
                label="Terrace"
              />
              <FormControlLabel
                control={
                  <Checkbox checked = {facilities.jacuzzi} name="checkedB"  onChange={setForm} style={{color:'#D6324A'}}
                  />
                }
                label="Jacuzzi"
              />
      </Card.Body>
      </Card>
      </div>
        <Button onClick={()=>navigation.next()} variant='contained' fullWidth style={{marginTop: '1rem', width:'23rem', marginBottom:'2rem', marginLeft:'1rem', backgroundColor:'#D6324A', color:'white'}}>Next</Button>
            </Container>

        </div>
    )
}

export default FacilitiesAndServices;