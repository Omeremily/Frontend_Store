import { Link } from "react-router-dom";
import { Container,Nav,Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (

    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/register" as={NavLink}>Register</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        <Button></Button>
      </Container>
    </NavbarBs>

  )
}
