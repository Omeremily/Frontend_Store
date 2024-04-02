import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import Register from "../pages/Register";
import StoreItem from "../pages/StoreItem";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import EditItemData from "../components/EditProductForm";
import EditProductForm from "../components/EditProductForm";
import AdminStoreAndManage from "../pages/AdminStoreAndManage";

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
    },
    {
        path:'/AdminStoreAndManage',
        element:<AdminStoreAndManage/>
    }

])