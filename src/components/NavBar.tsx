import { Container,Nav,Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";


//קומפוננטה שמציגה את תפריט הניווט
export default function NavBar() {

//
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm">
      <NavLink to="/" style={{ padding: "0 0px" }}>
        <img src="/imgs/logo.png" style={{ margin: "0 10px", width: "140px" }} alt="Logo" />
      </NavLink>
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
          <Nav.Link to="/register" as={NavLink}>Register</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        <Button onClick={openCart} style={{ width: "3rem", height: "3rem", position: "relative", backgroundColor: "transparent", border: "none" }}>
          {/* SVG code for the shopping cart */}
          <svg enable-background="new 0 0 50 50" id="Layer_1" version="1.1" viewBox="0 0 50 50" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M8,14L4,49h42l-4-35H8z" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
            <rect fill="none" height="50" width="50" />
            <path d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
            <circle cx="34" cy="19" r="2" />
            <circle cx="16" cy="19" r="2" />
          </svg>
          {/* This div shows the current number of items in the cart - update with logic */}
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              fontSize: "80%",
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(-5%, -5%)"
            }}>
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  )
}
