import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Link, withRouter} from 'react-router-dom';
import { signout, isAuthenticated} from '../auth';
import './Menu.css'


const isActive = (history, path) => {
        if(history.location.pathname===path) {
           return  {color:'#ff9900'}
        }
        else{
            return {color:'#ffffff'}
        }
    
}

const Menu = (props) => {
    return (
        <div>
            <ul className='nav nav-tabs' style={{backgroundColor:'#D6324A'}}>
            <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/vendor')} to='/vendor'>Register as Vendor</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/')} to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/about')} to='/about'>About</Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role ===0 && (
                    <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/user/profile')} to='/user/profile'>Profile</Link>
                </li>
                )} 

                {isAuthenticated() && isAuthenticated().user.role ===1 && (
                    <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/admin/dashboard')} to='/admin/dashboard'>Admin Dashboard</Link>
                </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role ===2 && (
                    <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/vendor/dashboard')} to='/vendor/dashboard'>Vendor Dashboard</Link>
                </li>
                )}    
                

                {!isAuthenticated() && (
                    <Fragment>
                        <li className='nav-item'>
                            <Link className='nav-link' style={isActive(props.history, '/signin')} to='/signin'>Sign In</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' style={isActive(props.history, '/signup')} to='/signup'>Sign Up</Link>
                        </li>
                    </Fragment>
                )}
                {isAuthenticated() &&(
                    <div>
                        <li className='nav-item'>
                    <span 
                    className='nav-link' 
                    style={{cursor:'pointer', color:'#ffffff'}} 
                    onClick={
                        ()=>signout(()=>{
                        props.history.push('/');
                    })} >Signout</span>
                </li>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default withRouter(Menu);