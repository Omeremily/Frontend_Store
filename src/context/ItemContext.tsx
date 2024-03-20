import { createContext, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";

export const ItemContext = createContext({});

export default function ItemContextProvider({ children }: { children: React.ReactNode }) {


    //רשימת המוצרים בחנות
    
    const [items, setItems] = useState<StoreItemProps[]>([
        {
            "id": 1,
            "name": "Beef",
            "shortDescription": "Beef",
            "longDescription": "Beef lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "imgUrl": "/public/imgs/beef.jpg",
            "price": 60,
            "salePrice": 50,    
        },
        {
            "id": 2,
            "name": "Chicken",
            "shortDescription": "Chicken",
            "longDescription": "Chicken lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 60,
            "imgUrl": "/public/imgs/chicken.jpg"
        },
        {
            "id": 3,
            "name": "Pasta",
            "shortDescription": "Pasta",
            "longDescription": "Pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 70,
            "imgUrl": "/public/imgs/pasta.jpg"

        },
        {   
            "id": 4,
            "name": "Salad",
            "shortDescription": "Salad",
            "longDescription": "Salad lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 50,
            "imgUrl": "/public/imgs/salad.jpg"
        },
        {
            "id": 5,
            "name": "Pasta",
            "shortDescription": "Pasta",
            "longDescription": "Pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 70,
            "imgUrl": "/public/imgs/pasta.jpg"
        },
        {   
            "id": 6,
            "name": "Salad",
            "shortDescription": "Salad",
            "longDescription": "Salad lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 50,
            "imgUrl": "/public/imgs/salad.jpg"
        }
    ]);
    

    //רשימת מוצרים במבצע בדף הראשי
    const [saleItems, setSaleItems] = useState<StoreItemProps[]>([
        {
            "id": 1,
            "name": "Beef",
            "shortDescription": "Beef",
            "longDescription": "Beef lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "imgUrl": "/public/imgs/beef.jpg",
            "price": 60,
            "salePrice": 50,    
        },
        {
            "id": 2,
            "name": "Chicken",
            "shortDescription": "Chicken",
            "longDescription": "Chicken lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 60,
            "imgUrl": "/public/imgs/chicken.jpg"
        },
        {
            "id": 3,
            "name": "Pasta",
            "shortDescription": "Pasta",
            "longDescription": "Pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 70,
            "imgUrl": "/public/imgs/pasta.jpg"

        },
        {   
            "id": 4,
            "name": "Salad",
            "shortDescription": "Salad",
            "longDescription": "Salad lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 50,
            "imgUrl": "/public/imgs/salad.jpg"
        },
        {
            "id": 5,
            "name": "Pasta",
            "shortDescription": "Pasta",
            "longDescription": "Pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 70,
            "imgUrl": "/public/imgs/pasta.jpg"
        },
        {   
            "id": 6,
            "name": "Salad",
            "shortDescription": "Salad",
            "longDescription": "Salad lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 50,
            "imgUrl": "/public/imgs/salad.jpg"
        }
    ]);

    function AddItemToStore(item:StoreItemProps) {
        setItems([...items, item]);
        localStorage.setItem("items", JSON.stringify([...items, item]));
    }

    // function DeleteProduct(id:number) {
    //     setItems(items.filter((item) => item.id !== id));
    //     localStorage.setItem("items", JSON.stringify(items.filter((item) => item.id !== id)));
    // }


    const value ={
        items,
        setItems,
        saleItems,
        setSaleItems,
        AddItemToStore
    }

    return (
        <ItemContext.Provider value={value as any}>
            {children}
        </ItemContext.Provider>
    );
}