import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItemProps } from "../types/storeTypes";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";


export function CartItem({id, quantity}: CartItemProps) {

    const customStyles = {
        smallButton: {
          padding: '0.05rem 0.4rem', // You can adjust the padding to make the buttons smaller
          fontSize: '0.75rem', // You can adjust the font size to make the buttons smaller
        },
      }; 


    const { items } = useContext<any>(ItemContext);
    console.log("Items from context:", items); 

    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();

    //const quantity = id !== undefined ? getItemQuantity(id) : 0;


    //const {removeFromCart} = useShoppingCart();

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
            <div>
                <Button onClick={()=>decreaseCartQuantity(id!)} variant="primary" size="sm" style={customStyles.smallButton}>-</Button>&nbsp;
                <Button onClick={()=>increaseCartQuantity(id!)} variant="primary" size="sm" style={customStyles.smallButton}>+</Button>
                </div>
            <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant="outline-danger" size="sm"  onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}