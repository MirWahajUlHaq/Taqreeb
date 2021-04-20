import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      marginLeft:'25px',
      marginTop:'1.5rem'
  
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


  export const HostCard = (props) =>{
    const classes = useStyles();
    return (
        
        <div className='row' style={{marginBottom:'2rem', marginLeft:'auto', marginRight:'auto'}}>
            <Card style={{borderRadius:'10px 0px 0px 10px', width:500, backgroundColor:'#D6324A', color:"white"}}>
                <div className='row' style={{ marginTop:100}}>
                    <div className='col offset-md-2'>
                        <h4>Become a Vendor</h4>
                    </div>
                </div>
                <div className='row' style={{textAlign:'left', marginTop:'0.5   rem'}}>
                    <div className='col col-md-7 offset-md-2'>
                            <p>Earn extra income and unlock new opportunities by giving your services.</p>
                    </div>
                </div>
            </Card>
            <Card style = {{borderRadius:'0px 10px 10px 0px'}}>
                <div className='row '>
                    <CardMedia
                    style = {{width:500}}
                    className={classes.media}
                    image={props.imgUrl}
                    title="Host image"
                    />
                    
                </div>
            </Card>
            
        
    </div>
    
    )
}