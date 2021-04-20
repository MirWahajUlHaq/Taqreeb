import React from 'react'
import {API} from '../config'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
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
const classes = useStyles();
export const ShowImage = ({item, url}) => (
    
    <div className='product-img'>
        <img 
            src={`${API}/${url}/photo/${item.id}`}
            alt={item.name}
            className={classes.media}
            style={{width:250}}
        />
    </div>
)


//THIS COMPONENT IS SUPPOSED TO BE INTEGRATED IN THE PRODUCTREVIEWCARD.js FILE