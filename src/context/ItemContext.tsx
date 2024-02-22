import { createContext, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";

export const ItemContext = createContext({});

export default function ItemContextProvider({ children}) {

    const [items, setItems] = useState<StoreItemProps[]>([
        {
            "id": 1,
            "name": "Beef",
            "price": 60,
            "imgUrl": "./public/imgs/beef.jpg"
        },
        {
            "id": 2,
            "name": "Chicken",
            "price": 60,
            "imgUrl": "./public/imgs/chicken.jpg"
        },
        {
            "id": 3,
            "name": "Pasta",
            "price": 70,
            "imgUrl": "./public/imgs/pasta.jpg"
        },
        {   
            "id": 4,
            "name": "Salad",
            "price": 50,
            "imgUrl": "./public/imgs/salad.jpg"
        },
        {
            "id": 5,
            "name": "Pasta",
            "price": 70,
            "imgUrl": "./public/imgs/pasta.jpg"
        },
        {   
            "id": 6,
            "name": "Salad",
            "price": 50,
            "imgUrl": "./public/imgs/salad.jpg"
        }
    ]);
    
    const value ={
        items
    }

    return (
        <ItemContext.Provider value={value as any}>
            {children}
        </ItemContext.Provider>
    );
}