import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ShoppingCartProps } from "../types/storeTypes";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export function ShoppingCart({isOpen}: ShoppingCartProps) {


    const {closeCart, cartItems} = useShoppingCart ();
    const { items } = useContext<any>(ItemContext);

    
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
                    <div className="ms-auto fw-bold fs-5">
                        Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = items.find((i: { id: number; }) => i.id === cartItem.id)
                            return total + (item?.salePrice || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}