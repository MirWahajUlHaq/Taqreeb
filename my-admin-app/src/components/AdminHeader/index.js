import React, { useEffect } from 'react'
import {Jumbotron, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {Link, NavLink, Redirect} from 'react-router-dom'
import { signout } from '../../actions'
import { authTokenCheck } from '../commonFunction/CommonMethod'

let authTrue = false;
let userType = 0;
export default function Header() {
   
useEffect (() =>{
    var loggedToken = localStorage.getItem("token");
    userType = localStorage.getItem("type");

    if(!!loggedToken)
    {
        return authTrue = true;
    }
},[])
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    
    const logout = () =>{
        dispatch(signout());
        window.location.href = '/';
        
    }
        const renderNonLoggedInLinks = () =>{
            return( 
            <Nav>
                {/*<Nav.Link href="#deets">Signin</Nav.Link>*/}
                <li className='nav-item'>
                    <NavLink to={`/admin/signin`} className='nav-item' className='nav-link'>Admin Signin</NavLink>
                </li>
                {/* <li className='nav-item'>
                <NavLink to={`/admin/signup`} className='nav-item' className='nav-link'>Admin Signup</NavLink>
                </li> */}
                <li className='nav-item'>
                <NavLink to={`/`} className='nav-item' className='nav-link'>Vendor Dashboard</NavLink>
                </li>
            </Nav>);
        }
    
        const renderLoggedInLinks = () =>{
            return(
            <Nav>

            <li className='nav-item'>
                <NavLink to = {`/admin/users`} className='nav-link'>Users</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to = {`/admin/orders`} className='nav-link'>Orders</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to = {`/admin/productlist`} className='nav-link'>Products</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to = {`/admin/categories`} className='nav-link'>Categories</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to = {`/admin/signin`} className='nav-link' onClick={logout}>Signout</NavLink>
            </li>
            </Nav>
            );
        }
   
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
                    <Link to='/admin' className='navbar-brand'>Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {authTrue  && userType == 2 ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
