import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
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


    let style = {
        padding: '10px'
    }


export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link style={style} to="/">Home</Link>
                    <Link style={style} to="/employee">Employee</Link>
                    <Link style={style} to="/country">Country</Link>
                    <Link style={style} to="/company">Company</Link>      
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


