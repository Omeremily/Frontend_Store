import { createContext, useContext, useState } from "react";
import { ShoppingCartContexts, CartItem } from "../types/storeTypes";


const ShoppingCartContext = createContext({} as ShoppingCartContexts);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

type ShoppingCartContextProps = {
    children: React.ReactNode
}
export function ShoppingCartProvider({ children}: ShoppingCartContextProps) {

    const[cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id:number){
        return cartItems.find(item=> item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity: 1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }


    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}