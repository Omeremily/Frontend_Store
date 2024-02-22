import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import Item from "../pages/StoreItem";
import Register from "../pages/Register";
import StoreItem from "../pages/StoreItem";

export const routes= createBrowserRouter([
    {
        path:'/', //הפנייה לדף הראשי
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/store',
        element:<Store/>
    },
    {
        path:'/item/:item', // הפניות דינאמיות למוצרים בתוך החנות
        element:<StoreItem id={0} name={""} price={0} imgUrl={""}/>
    },
    {
        path:'/register',
        element:<Register/>

    }

])