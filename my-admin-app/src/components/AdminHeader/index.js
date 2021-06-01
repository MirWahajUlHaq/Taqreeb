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
                    <NavLink to={`/admin/signin`} className='nav-item' className='nav-link'>Admin Signin</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to={`/admin/signup`} className='nav-item' className='nav-link'>Admin Signup</NavLink>
                </li>
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
            <NavLink to = {`/admin/categories`} className='nav-link'>Categories</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to = {`/admin/vendorlist`} className='nav-link'>Vendor List</NavLink>
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
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
