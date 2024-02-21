import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import Item from "../pages/Item";

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
        path:'/item/:product',
        element:<Item/>
    }

])