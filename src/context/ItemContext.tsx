import { createContext, useEffect, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";

export const ItemContext = createContext({});

export default function ItemContextProvider({ children }: { children: React.ReactNode }) {


    //רשימת המוצרים בחנות

    const [items, setItems] = useState<StoreItemProps[]>([]);


    //רשימת מוצרים במבצע בדף הראשי
    const [saleItems, setSaleItems] = useState<StoreItemProps[]>([
        {
            "id": 1,
            "name": "Vita JYM Sports Multivitamin",
            "shortDescription": "Vitamins",
            "longDescription": "Vita JYM Sports Multivitamin & Mineral Support, Vitamin A, C, B6, B12, E, K, Boron, Biotin, Potassium | JYM Supplement Science | 60 Tablets",
            "minimum": 1,
            "maximum": 10,
            "imgUrl": '/public/imgs/cart-items/item1.jpg',
            "price": 259.99,
        },
        {
            "id": 2,
            "name": "3 Color Bottles Pack",
            "shortDescription": "Fitness Equipment",
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
            "price": 70,
            "imgUrl": "/public/imgs/cart-items/item3.jpg"
        },
        {
            "id": 4,
            "name": "Whey Protein Powder",
            "shortDescription": "Powders",
            "longDescription": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
            "minimum": 1,
            "maximum": 10,
            "price": 220,
            "imgUrl": "/public/imgs/cart-items/item4.jpg"
        },
        {
            "id": 5,
            "name": "BLESSED Protein Powder",
            "shortDescription": "Powders",
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
            "price": 180,
            "imgUrl": "/public/imgs/cart-items/item6.jpg"
        },
        {
            "id": 7,
            "name": "Folding home treadmill",
            "shortDescription": "Fitness equipment",
            "longDescription": "Electric treadmill for beginners Zoom1 which includes a shock absorbing surface and 4 air shock absorbers. Engine: 6.5 hp at peak. Speed: up to 14 km/h. Inclination: mechanical 3 positions.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 10000,
            "price": 12000,
            "imgUrl": "/public/imgs/cart-items/item7.jpg"
        },
        {
            "id": 8,
            "name": "Adjustable Weight Bench",
            "shortDescription": "Fitness Equipment",
            "longDescription": "Adjustable Weight Bench, Foldable Workout Bench for Full Body Exercise, Multi-Purpose Incline Decline Bench for Home Gym Strength Training - 550 lbs Capacity",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 349,
            "price": 427,
            "imgUrl": "/public/imgs/cart-items/item8.jpg"
        },
        {
            "id": 9,
            "name": "Stationary Exercise Bike",
            "shortDescription": "Fitness Equipment",
            "longDescription": "Stationary Exercise Bike with Magnetic Resistance, Quiet Indoor Cycling Bike with Comfortable Seat Cushion, LCD Monitor, Tablet Holder, for Home Cardio Workout",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 599.99,
            "price": 750,
            "imgUrl": "/public/imgs/cart-items/item9.jpg"
        },
        {
            "id": 10,
            "name": "TRX® Suspension Training",
            "shortDescription": "Fitness Equipment",
            "longDescription": "Suspension Trainer Kit, Home Gym Training Straps, Workout Straps with Door Anchor, Extension Strap, Handles and Carry Bag, Full Body Resistance Exercise for Indoor and Outdoor",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 119.99,
            "price": 150,
            "imgUrl": "/public/imgs/cart-items/item10.jpg"
        },
        {
            "id": 11,
            "name": "Sports Duffle Bag",
            "shortDescription": "Bags",
            "longDescription": "Sports Duffle Bag with Shoes Compartment and Wet Pocket, 42L Waterproof Gym Bag for Men and Women, Durable Travel Duffel Bag with Shoulder Strap and Combination Lock",
            "minimum": 1,
            "maximum": 10,
            "price": 150,
            "imgUrl": "/public/imgs/cart-items/item11.jpg"
        },
        {
            "id": 12,
            "name": "FORICH Cooler Backpack",
            "shortDescription": "Bags",
            "longDescription": "FORICH Insulated Cooler Backpack Lightweight Soft Cooler Bag Leakproof Backpack Cooler for Men Women to Lunch Work Picnic Beach Camping Hiking Park Day Trips, 30 Cans",
            "minimum": 1,
            "maximum": 10,
            "price": 80,
            "imgUrl": "/public/imgs/cart-items/item12.jpg"
        },
        {
            "id": 13,
            "name": "330 ml UFIT Pack",
            "shortDescription": "Drinks",
            "longDescription": "Pack of 10 protein shake drinks 330 ml UFIT with white chocolate flavor. UFIT protein shake drinks are full of available energy, nutritious vitamins for the body and rich in protein. The winning taste and pleasant texture make them the leading protein shake drinks in the world!",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 119.90,
            "price": 159.00,
            "imgUrl": "/public/imgs/cart-items/item13.webp"
        },
        {
            "id": 14,
            "name": "ZOA Energy Drink Pack",
            "shortDescription": "Drinks",
            "longDescription": "ZOA Energy Drink Pack - All Flavors 16oz (Pack of 60) - Healthy Energy Drinks with B Vitamins, Amino Acids, Camo Camo, Electrolytes and Caffeine.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 319.90,
            "price": 350.00,
            "imgUrl": "/public/imgs/cart-items/item14.webp"
        },
        {
            "id": 15,
            "name": "Professional yoga mat",
            "shortDescription": "Fitness Equipment",
            "longDescription": "Professional TPE yoga mat, 6 mm thick, black&gray color, very high quality, suitable for yoga and pilates, soft and pleasant to the touch, protects the joints, comfortable for rolling and carrying, double-sided.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 99.99,
            "price": 120.00,
            "imgUrl": "/public/imgs/cart-items/item15.webp"
        },
        {
            "id": 16,
            "name": "Yoga and Pilates kit",
            "shortDescription": "Fitness Equipment",
            "longDescription": "HEAD brand yoga kit. Meet our complete yoga kit! Overall assessment: 1)Training ball with air pump: diameter: 65 cm Suitable for pilates and stretching exercises allows you to perform a variety of body toning exercises. 2) PVC yoga mat: 173 * 61 * 0.6 cm Helps to evaporate sweat during training - for the maximum comfort of the exerciser. 3)Yoga towel: 183 * 63 cm. 4)Yoga pillow: 30 * 30 cm",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 319.90,
            "price": 350.00,
            "imgUrl": "/public/imgs/cart-items/item16.jpg"
        },
        {
            "id": 17,
            "name": "Neoprene dumbbells Set",
            "shortDescription": "Fitness Equipment",
            "longDescription": "A set of 8 dumbbells that come in a fancy suitcase, the dumbbells are made of durable cast iron along with a special neoprene coating that prevents slipping. Neoprene coated dumbbells are the ideal tool for toning the body and building muscle mass. Suitable for all endurance and strength training.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 130.00,
            "price": 130.00,
            "imgUrl": "/public/imgs/cart-items/item17.jpg"
        },
        {
            "id": 18,
            "name": "Multi You Sport",
            "shortDescription": "Vitamins",
            "longDescription": "Multivitamin for athletes from Superherb, a formula containing a combination of 39 ingredients of the highest quality: vitamins, minerals, plant extracts, digestive enzymes and powerful antioxidants. Multi U Sport is a high-quality multivitamin suitable for those involved in physical activity.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 145.90,
            "price": 171.00,
            "imgUrl": "/public/imgs/cart-items/item18.webp"
        },
        {
            "id": 19,
            "name": "BiotechUSA Multivitamin",
            "shortDescription": "Vitamins",
            "longDescription": "The product contains 100 capsules containing a balanced mixture of essential vitamins. Includes vitamin A, C, D, E and B vitamins, such as B12 and B6. These vitamins play essential roles in supporting various bodily functions, such as the function of the immune system. Energy production and cognitive health. In addition to vitamins, it also provides essential minerals such as calcium and magnesium. zinc and selenium. These minerals are necessary for maintaining bone health. Supporting muscle function and promoting optimal cell function throughout the body.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 171.00,
            "price": 171.00,
            "imgUrl": "/public/imgs/cart-items/item19.jpg"
        },
        {
            "id": 20,
            "name": "PRE-WORKOUT powder",
            "shortDescription": "Powders",
            "longDescription": "Total War PRE-WORKOUT provides the strength, endurance and energy to fuel your most intense workouts. Conserve energy and endurance, fight muscle fatigue, improve blood flow for pumps",
            "maximum": 10,
            "salePrice": 102.90,
            "price": 130.00,
            "imgUrl": "/public/imgs/cart-items/item20.avif"
        },

    ]);

    function loadItems() {
        let itemArr: StoreItemProps[] = [];
        if(localStorage.getItem('items')){
            itemArr = JSON.parse(localStorage.getItem('items') as string) as StoreItemProps[];
        }
        else 
            itemArr = [
            {
                "id": 1,
                "name": "Vita JYM Sports Multivitamin",
                "shortDescription": "Vitamins",
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
                "shortDescription": "Fitness Equipment",
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
                "shortDescription": "Powders",
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
                "shortDescription": "Powders",
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
                "salePrice": 160,
                "price": 180,
                "imgUrl": "/public/imgs/cart-items/item6.jpg"
            },
            {
                "id": 7,
                "name": "Folding home treadmill",
                "shortDescription": "Fitness equipment",
                "longDescription": "Electric treadmill for beginners Zoom1 which includes a shock absorbing surface and 4 air shock absorbers. Engine: 6.5 hp at peak. Speed: up to 14 km/h. Inclination: mechanical 3 positions.",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 10000,
                "price": 12000,
                "imgUrl": "/public/imgs/cart-items/item7.jpg"
            },
            {
                "id": 8,
                "name": "Adjustable Weight Bench",
                "shortDescription": "Fitness Equipment",
                "longDescription": "Adjustable Weight Bench, Foldable Workout Bench for Full Body Exercise, Multi-Purpose Incline Decline Bench for Home Gym Strength Training - 550 lbs Capacity",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 349,
                "price": 427,
                "imgUrl": "/public/imgs/cart-items/item8.jpg"
            },
            {
                "id": 9,
                "name": "Stationary Exercise Bike",
                "shortDescription": "Fitness Equipment",
                "longDescription": "Stationary Exercise Bike with Magnetic Resistance, Quiet Indoor Cycling Bike with Comfortable Seat Cushion, LCD Monitor, Tablet Holder, for Home Cardio Workout",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 599.99,
                "price": 750,
                "imgUrl": "/public/imgs/cart-items/item9.jpg"
            },
            {
                "id": 10,
                "name": "TRX® Suspension Training",
                "shortDescription": "Fitness Equipment",
                "longDescription": "Suspension Trainer Kit, Home Gym Training Straps, Workout Straps with Door Anchor, Extension Strap, Handles and Carry Bag, Full Body Resistance Exercise for Indoor and Outdoor",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 119.99,
                "price": 150,
                "imgUrl": "/public/imgs/cart-items/item10.jpg"
            },
            {
                "id": 11,
                "name": "Sports Duffle Bag",
                "shortDescription": "Bags",
                "longDescription": "Sports Duffle Bag with Shoes Compartment and Wet Pocket, 42L Waterproof Gym Bag for Men and Women, Durable Travel Duffel Bag with Shoulder Strap and Combination Lock",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 135,
                "price": 150,
                "imgUrl": "/public/imgs/cart-items/item11.jpg"
            },
            {
                "id": 12,
                "name": "FORICH Cooler Backpack",
                "shortDescription": "Bags",
                "longDescription": "FORICH Insulated Cooler Backpack Lightweight Soft Cooler Bag Leakproof Backpack Cooler for Men Women to Lunch Work Picnic Beach Camping Hiking Park Day Trips, 30 Cans",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 80,
                "price": 80,
                "imgUrl": "/public/imgs/cart-items/item12.jpg"
            },
            {
                "id": 13,
                "name": "330 ml UFIT Pack",
                "shortDescription": "Drinks",
                "longDescription": "Pack of 10 protein shake drinks 330 ml UFIT with white chocolate flavor. UFIT protein shake drinks are full of available energy, nutritious vitamins for the body and rich in protein. The winning taste and pleasant texture make them the leading protein shake drinks in the world!",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 119.90,
                "price": 159.00,
                "imgUrl": "/public/imgs/cart-items/item13.webp"
            },
            {
                "id": 14,
                "name": "ZOA Energy Drink Pack",
                "shortDescription": "Drinks",
                "longDescription": "ZOA Energy Drink Pack - All Flavors 16oz (Pack of 60) - Healthy Energy Drinks with B Vitamins, Amino Acids, Camo Camo, Electrolytes and Caffeine.",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 319.90,
                "price": 350.00,
                "imgUrl": "/public/imgs/cart-items/item14.webp"
            },
            {
                "id": 15,
                "name": "Professional yoga mat",
                "shortDescription": "Fitness Equipment",
                "longDescription": "Professional TPE yoga mat, 6 mm thick, black&gray color, very high quality, suitable for yoga and pilates, soft and pleasant to the touch, protects the joints, comfortable for rolling and carrying, double-sided.",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 99.99,
                "price": 120.00,
                "imgUrl": "/public/imgs/cart-items/item15.webp"
            },
            {
                "id": 16,
                "name": "Yoga and Pilates kit",
                "shortDescription": "Fitness Equipment",
                "longDescription": "HEAD brand yoga kit. Meet our complete yoga kit! Overall assessment: 1)Training ball with air pump: diameter: 65 cm Suitable for pilates and stretching exercises allows you to perform a variety of body toning exercises. 2) PVC yoga mat: 173 * 61 * 0.6 cm Helps to evaporate sweat during training - for the maximum comfort of the exerciser. 3)Yoga towel: 183 * 63 cm. 4)Yoga pillow: 30 * 30 cm",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 319.90,
                "price": 350.00,
                "imgUrl": "/public/imgs/cart-items/item16.jpg"
            },
            {
                "id": 17,
                "name": "Neoprene dumbbells Set",
                "shortDescription": "Fitness Equipment",
                "longDescription": "A set of 8 dumbbells that come in a fancy suitcase, the dumbbells are made of durable cast iron along with a special neoprene coating that prevents slipping. Neoprene coated dumbbells are the ideal tool for toning the body and building muscle mass. Suitable for all endurance and strength training.",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 130.00,
                "price": 130.00,
                "imgUrl": "/public/imgs/cart-items/item17.jpg"
            },
            {
                "id": 18,
                "name": "Multi You Sport",
                "shortDescription": "Vitamins",
                "longDescription": "Multivitamin for athletes from Superherb, a formula containing a combination of 39 ingredients of the highest quality: vitamins, minerals, plant extracts, digestive enzymes and powerful antioxidants. Multi U Sport is a high-quality multivitamin suitable for those involved in physical activity.",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 145.90,
                "price": 171.00,
                "imgUrl": "/public/imgs/cart-items/item18.webp"
            },
            {
                "id": 19,
                "name": "BiotechUSA Multivitamin",
                "shortDescription": "Vitamins",
                "longDescription": "The product contains 100 capsules containing a balanced mixture of essential vitamins. Includes vitamin A, C, D, E and B vitamins, such as B12 and B6. These vitamins play essential roles in supporting various bodily functions, such as the function of the immune system. Energy production and cognitive health. In addition to vitamins, it also provides essential minerals such as calcium and magnesium. zinc and selenium. These minerals are necessary for maintaining bone health. Supporting muscle function and promoting optimal cell function throughout the body.",
                "minimum": 1,
                "maximum": 10,
                "salePrice": 171.00,
                "price": 171.00,
                "imgUrl": "/public/imgs/cart-items/item19.jpg"
            },
            {
                "id": 20,
                "name": "PRE-WORKOUT powder",
                "shortDescription": "Powders",
                "longDescription": "Total War PRE-WORKOUT provides the strength, endurance and energy to fuel your most intense workouts. Conserve energy and endurance, fight muscle fatigue, improve blood flow for pumps",
                "maximum": 10,
                "salePrice": 102.90,
                "price": 130.00,
                "imgUrl": "/public/imgs/cart-items/item20.avif"
            },

        ];

        setItems(itemArr);
        localStorage.setItem("items", JSON.stringify(itemArr));
    }

    function AddItemToStore(item: StoreItemProps) {
        let updated = [...items, item];
        setItems(updated);
        localStorage.setItem("items", JSON.stringify(updated));
    }

    function EditItem(id: number, item: StoreItemProps) {
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

    useEffect(()=>{
        loadItems();
    },[]);

    const value = {
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