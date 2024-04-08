import { Alert, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ShoppingCartProps } from "../types/storeTypes";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import '../css/shoppingCart.css';

//
export function ShoppingCart({isOpen}: ShoppingCartProps) {

    const { closeCart, cartItems } = useShoppingCart ();
    const { items } = useContext<any>(ItemContext);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // סטייט להצגת האזהרה במצב הוצלחה

    // פונקציה המתבצעת בעת לחיצה על הכפתור Checkout
    const handleCheckout = () => {
        setShowSuccessAlert(true); // הצגת הודעת הצלחת הרכישה
    };

    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end"> 
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="d-flex justify-content-center align-items-center mt-5 fw-bold fs-5">
                        Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = items.find((i: { id: number; }) => i.id === cartItem.id)
                            return total + (item?.salePrice || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button> {/* הוספת הכיתה checkout-button */}
            {/* הודעת ההצלחה לאחר ביצוע הרכישה */}
            <Alert variant="success" show={showSuccessAlert} onClose={() => setShowSuccessAlert(false)} dismissible className="success-alert">
                <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>
                    Order confirmed!
                    <p style={{ marginTop: '1em',textAlign: 'center', fontSize: '0.8em' }}>We'll send you an email with your receipt shortly.</p>
                </div>
            </Alert>
        </Offcanvas>
    )
}
