import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CardWidget";

export const NavBar = () => {
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Opium Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Buzos</Nav.Link>
            <Nav.Link href="#">Camperas</Nav.Link>
            <Nav.Link href="#">Pantalones</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
        </Navbar>
        </>
    )
}