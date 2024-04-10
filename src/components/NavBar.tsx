import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/Nav.css"; // ייבוא קובץ CSS

// קומפוננטה המייצגת את תפריט הניווט באפליקציה
export default function NavBar() {
    const { cartQuantity, openCart } = useShoppingCart(); // שימוש בהוק useShoppingCart על מנת לקבל מידע על עגלת הקניות

    return (
        <Navbar
            expand="lg"
            sticky="top"
            style={{
                zIndex: 1000,
                backgroundColor: "#ffffff",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
            }}>
            <Container style={{textAlign: "center", alignItems: "center"}}>
                {/* לוגו האפליקציה עם קישור לדף הראשי */}
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        id="nav-logo"
                        src="/imgs/logo.png"
                        alt="Logo"
                        style={{
                            width: "140px",
                            marginRight: "10px"
                        }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{
                        textAlign: "center"
                    }}
                >
                    {/* קישורים לדפים באפליקציה */}
                    <Nav id="nav-links">
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                    </Nav>
                    {/* צד ימין של הנאב-בר */}
                    <Nav className="ml-auto align-items-center">
                        {/* כפתור העגלה עם כמות הפריטים ועם תגית הסבר צפה בעת הובר */}
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="cart-tooltip">Click to open</Tooltip>}
                        >
                            <Nav.Link
                                id="nav-cart"
                                onClick={openCart}
                                className="d-flex align-items-center position-relative"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}
                            >
                                <i className="fa fa-shopping-cart bigicon mr-2"></i>
                                <div id="cart-circle" className="cart-quantity">{cartQuantity}</div>
                            </Nav.Link>
                        </OverlayTrigger>
                        {/* כפתור הלוגין עם תגית הסבר צפה בעת הובר */}
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="login-tooltip">Login</Tooltip>}
                        >
                            <Nav.Link id="nav-login" as={NavLink} to="/login">
                            <div className="user-circle-container">
                                    <i className="fas fa-user-circle mr-1"></i>
                                </div>
                            </Nav.Link>
                        </OverlayTrigger>
                        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
