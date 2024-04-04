import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItemProps } from "../types/storeTypes";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem({ id, quantity }: CartItemProps) {
    const { items } = useContext<any>(ItemContext);
    console.log("Items from context:", items);

    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const item = items.find((i: { id: number; }) => i.id === id);
    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={item.imgUrl} style={{ width: "100px", height: "75px", objectFit: "contain" }} />
            </div>
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div>
                    <span className="text-muted">{formatCurrency(item.salePrice)}</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <Button onClick={() => decreaseCartQuantity(id!)} style={{ padding: '0rem 0.55rem', fontSize: '1rem', backgroundColor: 'red', border: 'none' }}>-</Button>
                </div>
                <div>
                    <Button onClick={() => increaseCartQuantity(id!)} style={{ padding: '0rem 0.4rem', fontSize: '1rem', backgroundColor: 'green', border: 'none' }}>+</Button>
                </div>
            </div>
            <div>{formatCurrency(item.salePrice * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                <i className="fa fa-trash-alt"></i>
            </Button>
        </Stack>
    )
}
