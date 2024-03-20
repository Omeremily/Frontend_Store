import { createContext, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";

export const ItemContext = createContext({});

export default function ItemContextProvider({ children }: { children: React.ReactNode }) {


    //רשימת המוצרים בחנות
    
    const [items, setItems] = useState<StoreItemProps[]>([
        {
            "id": 1,
            "name": "Vita JYM Sports Multivitamin",
            "shortDescription": "Multivitamin",
            "longDescription": "Vita JYM Sports Multivitamin & Mineral Support, Vitamin A, C, B6, B12, E, K, Boron, Biotin, Potassium | JYM Supplement Science | 60 Tablets",
            "minimum": 1,
            "maximum": 10,
            "imgUrl": '/public/imgs/cart-items/item1.jpg',
            "price": 259.99,
            "salePrice": 250,    
        },
        {
            "id": 2,
            "name": "3 Color Bottles Pack",
            "shortDescription": "Bottles",
            "longDescription": "3 Color Pack(Black,White,Pink)w.Scale 12oz & 400ml for Protein Shake Drink Mix,BPA Free,Classic Loop,Dishwasher Safe,Easy to Clean,Leak Resistance,Whisk...",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 59.99,
            "price": 75,
            "imgUrl": "/public/imgs/cart-items/item2.jpg"
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

    //  function UpdateProduct(id:number, item:StoreItemProps) {
    //     setItems(items.map((i) => i.id === id ? item : i));
    //     localStorage.setItem("items", JSON.stringify(items.map((i) => i.id === id ? item : i)));
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