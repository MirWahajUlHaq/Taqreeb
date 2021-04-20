import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';
import Card from 'react-bootstrap/Card';    

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons({formData, setForm, navigation}) {
  const classes = useStyles();

  return (
    <div>
      <div className='multistep-container'>
      <Button onClick={()=>navigation.previous()} variant='contained' style={{marginTop: '1.5rem', width:'5rem', marginBottom:'2rem', marginLeft:'4rem', backgroundColor:'#D6324A', color:'white'}}>Back</Button>
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
                                <li className=''>
                                    <span className='round-btn'>5</span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
    <Container maxWidth='xs'>
        <h3 style={{marginTop:'25px'}}>Farmhouse Photos</h3>
        <div className='row mt-3'>
        <Card style={{ width: '25rem', marginLeft:'1rem' }}>
            <Card.Body>
                <Card.Title>Upload Photos</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Drag and Drop your photos</Card.Subtitle>
                <p>or</p>
                <div className={classes.root}>
            <input
                accept="image/*"
                name='photo'
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" style={{backgroundColor:'#D6324A', color:'white'}}>
                Add photos
                </Button>
            </label>
            <input accept="image/*" name='photo' className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton style={{backgroundColor:'#D6324A', color:'white'}} aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
            </label>
            </div>
            </Card.Body>
        </Card>
        </div>
        <div className='row mt-3'>
        <Card style={{ width: '25rem', marginTop: '20px', marginLeft:'1rem'}}>
            <Card.Body>
                <Card.Title>No Professional Photos? No problem.</Card.Title>
                
            </Card.Body>
        </Card>
        </div>
        <Button onClick={()=>navigation.next()} variant='contained' fullWidth color='#D6324A' style={{marginTop: '1rem', width:'23rem', marginLeft:'1rem', backgroundColor:'#D6324A', color:'white'}}>Next</Button>
    </Container>
    </div>
    
  );
}