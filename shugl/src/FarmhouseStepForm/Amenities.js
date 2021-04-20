import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Form from 'react-bootstrap/Form'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
const Amenities = ({formData, setForm, navigation}) => {
    const {smoking,} = formData;
    return (
        <div>
            
            <Container maxWidth='xs'>
            <h3>Amenities</h3>
              <h5>Facilities that your guests would like to know!</h5>
                <FormControlLabel
        control={
          <Checkbox
            checked = 'false'
            name="checkedB"
            color="primary"
          />
        }
        label="Free Wifi"
      />
        <FormControlLabel
        control={
          <Checkbox
            checked = 'false'
            name="checkedB"
            color="primary"
          />
        }
        label="Swimming pool"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked = 'false'
            name="checkedB"
            color="primary"
          />
        }
        label="Garden"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked = 'false'
            name="checkedB"
            color="primary"
          />
        }
        label="Terrace"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked = 'false'
            name="checkedB"
            color="primary"
          />
        }
        label="Jacuzzi"
      />
      <Button onClick={()=>navigation.next()} variant='contained' fullWidth color='primary' style={{marginTop: '1rem'}}>Next</Button>
            </Container>
        </div>
    )
}

export default Amenities;