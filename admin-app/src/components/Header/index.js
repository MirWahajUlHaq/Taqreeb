import React from 'react'
import {Jumbotron, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
                    <Link to='/' className='navbar-brand'>Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                    <Nav>
                        {/*<Nav.Link href="#deets">Signin</Nav.Link>*/}
                        <li className='nav-item'>
                            <NavLink to='signin' className='nav-item' className='nav-link'>Signin</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink to='signup' className='nav-item' className='nav-link'>Signup</NavLink>
                        </li>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
