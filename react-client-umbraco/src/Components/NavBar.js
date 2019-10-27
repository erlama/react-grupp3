import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #2c3333;
    }

    a, nav-brand, navbar-nav .nav-link{
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
            {/* <Nav.Link><NavLink to="/">Contakt book</NavLink></Nav.Link> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/">Home</NavLink>
                        </Nav.Link>
                    </Nav.Item>        
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/employee">Employee</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/country">Country</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/company">Company</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


