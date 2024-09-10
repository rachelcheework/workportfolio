import {useState, React} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../App.css';

const TopNav = () => {
    // need to use eventKey under Nav.Link to make the collapsed NavBar close whenever you click on a menu item
    return(
        <Navbar className="navbar-custom" expand ="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand className="navbar-brand" as={NavLink} to="/">
                        <img src=""/>
                        {' '}
                        &lt;{" "}
                        Rachel Chee
                        /&gt; 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    

                    <Nav className="navbar-nav ms-auto">
                        <Nav.Link className="navbar-link" as={NavLink} to="/" eventKey="1" >Home</Nav.Link>
                        <Nav.Link className="navbar-link" as={NavLink} to="/about" eventKey="2">About</Nav.Link>
                        <Nav.Link className="navbar-link" as={NavLink} to="/workexp" eventKey="3">Work</Nav.Link>
                        <Nav.Link className="navbar-link" as={NavLink} to="/contact" eventKey="4">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav;