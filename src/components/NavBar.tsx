import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/Nav.css"; // ייבוא קובץ CSS

// קומפוננטה המייצגת את תפריט הניווט באפליקציה
export default function NavBar() {
  const { cartQuantity, openCart } = useShoppingCart(); // שימוש בהוק useShoppingCart על מנת לקבל מידע על עגלת הקניות

  return (
    <Navbar expand="lg" sticky="top" style={{ zIndex: 1000, backgroundColor: "#ffffff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Container style={{  }}>
        {/* לוגו האפליקציה עם קישור לדף הראשי */}
        <Navbar.Brand as={NavLink} to="/">
          <img id="nav-logo" src="/imgs/logo.png" alt="Logo" style={{ width: "140px", marginRight: "10px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ textAlign: "center" }}>
            {/* קישורים לדפים באפליקציה */}
            <Nav id="nav-links">
              <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>

            {/* כפתור העגלה עם כמות הפריטים */}
            <Nav className="ml-auto">
              <Nav.Link onClick={openCart} className="d-flex align-items-center position-relative" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <i className="fa fa-shopping-cart bigicon mr-2"></i>
                <div id="cart-circle" className="cart-quantity">{cartQuantity}</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container> 
    </Navbar>
  );
}
