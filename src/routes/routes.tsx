import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
//import Item from "../pages/StoreItem";
import Register from "../pages/Register";
import StoreItem from "../pages/StoreItem";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import EditItemData from "../components/EditProductForm";
import EditProductForm from "../components/EditProductForm";

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
        path:'/item/:id', // הפניות דינאמיות למוצרים בתוך החנות
        element:<StoreItem/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/admin',
        element:<Admin/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/edit-item-data',
        element:<EditProductForm EditItem={EditItemData} />
    }

])