import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import Item from "../pages/Item";
import Register from "../pages/Register";

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
        path:'/item/:product', // הפניות דינאמיות למוצרים בתוך החנות
        element:<Item/>
    },
    {
        path:'/register',
        element:<Register/>

    }

])