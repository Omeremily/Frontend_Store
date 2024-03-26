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
            "shortDescription": "Fitness accessories",
            "longDescription": "3 Color Pack(Black,White,Pink)w.Scale 12oz & 400ml for Protein Shake Drink Mix,BPA Free,Classic Loop,Dishwasher Safe,Easy to Clean,Leak Resistance,Whisk...",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 59.99,
            "price": 75,
            "imgUrl": "/public/imgs/cart-items/item2.jpg"
        },
        {
            "id": 3,
            "name": "Sparkling Energy Drink",
            "shortDescription": "Drinks",
            "longDescription": "Optimum Nutrition Amino Energy Sparkling Hydration Drink, Electrolytes, Caffeine, Amino Acids, BCAAs, Sugar Free, Juicy Strawberry, 12 Fl Oz, 12 Pack (Packaging May Vary)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 70,
            "imgUrl": "/public/imgs/cart-items/item3.jpg"

        },
        {   
            "id": 4,
            "name": "Whey Protein Powder",
            "shortDescription": "Protein Powders",
            "longDescription": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 199.99,
            "price": 220,
            "imgUrl": "/public/imgs/cart-items/item4.jpg"
        },
        {
            "id": 5,
            "name": "BLESSED Protein Powder",
            "shortDescription": "Protein Powder",
            "longDescription": "Plant Based Protein Shake Meal Replacement Powder - 23g of Pea Protein Powder for Women & Men, Dairy Free, Gluten Free, No Sugar Added, 30 Servings (Pumpkin Spice)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 220,
            "price": 220,
            "imgUrl": "/public/imgs/cart-items/item5.jpg"
        },
        {   
            "id": 6,
            "name": "FIORETTO Gym Tote Bag",
            "shortDescription": "Bags",
            "longDescription": "FIORETTO Gym Tote Bag Duffle Bag with Separated Shoes Compartment & Wet Pocket, Gray color, Travel Bag Weekend Overnight Bags, Water-Resistant Carry On Bag",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 50,
            "imgUrl": "/public/imgs/cart-items/item6.jpg"
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
    ]);

    function AddItemToStore(item:StoreItemProps) {
        setItems([...items, item]);
        localStorage.setItem("items", JSON.stringify([...items, item]));
    }

    function EditItem(id:number, item:StoreItemProps) {
        setItems(items.map((i) => i.id === id ? item : i));
        localStorage.setItem("items", JSON.stringify(items.map((i) => i.id === id ? item : i)));
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
        AddItemToStore,
        EditItem
    }

    return (
        <ItemContext.Provider value={value as any}>
            {children}
        </ItemContext.Provider>
    );
}