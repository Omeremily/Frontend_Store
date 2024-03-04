import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItemProps } from "../types/storeTypes";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";


export function CartItem({id, quantity}: CartItemProps) {

    const { items } = useContext<any>(ItemContext);
    console.log("Items from context:", items); 


    const {removeFromCart} = useShoppingCart();

    const item = items.find((i: { id: number; }) => i.id === id);

    if(item == null) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width: "125px", height: "75px", objectFit: "cover"}}/>
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{fontSize: ".65rem"}}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div>
                    <span className="text-muted">{formatCurrency(item.price)}</span>
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant="outline-danger" size="sm"  onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}