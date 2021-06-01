import React from 'react'
import {Jumbotron, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {Link, NavLink, Redirect} from 'react-router-dom'
import { signout } from '../../actions'


export default function Header() {
    
const auth = useSelector(state => state.auth)
const dispatch = useDispatch();

const logout = () =>{
    dispatch(signout());
    
}
    const renderNonLoggedInLinks = () =>{
        return( 
        <Nav>
            {/*<Nav.Link href="#deets">Signin</Nav.Link>*/}
            <li className='nav-item'>
                <NavLink to={`/vendor/signin`} className='nav-item' className='nav-link'>Vendor Signin</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to={`/vendor/signup`} className='nav-item' className='nav-link'>Vendor Signup</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to={`/admin`} className='nav-item' className='nav-link'>Admin Dashboard</NavLink>
            </li>
        </Nav>);
    }

    const renderLoggedInLinks = () =>{
        return(
        <Nav>
            <li className='nav-item'>
        <NavLink to = {`/vendor/products`} className='nav-link'>Your Bookings</NavLink>
        </li>

        <li className='nav-item'>
        <NavLink to = {`/vendor/products`} className='nav-link'>Your Products</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to = {`/vendor/signin`} className='nav-link' onClick={logout}>Signout</NavLink>
        </li>
        </Nav>
        );
    }
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
                    <Link to='/' className='navbar-brand'>Vendor Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">  
                    </Nav>
                        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
