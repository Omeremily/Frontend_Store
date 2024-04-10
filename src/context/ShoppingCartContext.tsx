import { createContext, useContext, useState } from "react";
import { ShoppingCartContexts, CartItem } from "../types/storeTypes";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";


const ShoppingCartContext = createContext({} as ShoppingCartContexts);


export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

type ShoppingCartContextProps = {
    children: React.ReactNode
}

export function ShoppingCartProvider({ children}: ShoppingCartContextProps) {

    //פתיחה וסגירה של העגלה
    const[isOpen, setIsOpen] = useState(false);
    //זשליטה על האייטמים בעגלה
    const[cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    
    //פונקצית גט של האייטמים
    function getItemQuantity(id:number){
        return cartItems.find(item=> item.id === id)?.quantity || 0;
    }

    //העלאת כמות של האייטם בעגלה
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

    //הפחתת כמות של האייטם בעגלה
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

    //הסרה לחלוטין של האייטם וכל הכמות שלו מהעגלה
    function removeFromCart(id: number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }


    //שליחת כל הפונקציות לרטורן כדי שנוכל להשתמש בהם בקומפוננטות אחרות 
    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart,
            }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}