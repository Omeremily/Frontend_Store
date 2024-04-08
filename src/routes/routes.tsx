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
import UsersTable from "../components/UsersTable";
import Profile from "../pages/Profile";

export const routes= createBrowserRouter([
    {
        path:'/', //הפנייה לדף הראשי
        element:<Home/>
    },
    {
        path:'/about', //הפנייה לדף אודות
        element:<About/>
    },
    {
        path:'/store', //הפנייה לדף החנות
        element:<Store/>
    },
    {
        path:'/item/:id', // הפניות דינאמיות למוצרים בתוך החנות
        element:<StoreItem/>
    },
    {
        path:'/register', //הפנייה לדף הרשמה
        element:<Register/>
    },
    {
        path:'/admin', //הפנייה לדף אדמין
        element:<Admin/>
    },
    {
        path:'/login', //הפנייה לדף התחברות
        element:<Login/>
    },
    {
        path:'/profile', //הפנייה לדף התחברות
        element:<Profile/>
    },
    {
        path:'/edit-item-data', //הפנייה לדף עריכת פרטי מוצר בחנות
        element:<EditProductForm EditItem={EditItemData} />
    },
    {
        path:'/AdminStoreAndManage', //הפנייה לדף ניהול פונקציות החנות
        element:<AdminStoreAndManage/>
    },
    {
        path:'/UsersTable', //הפנייה לדף פנימי באדמין - טבלת ניהול משתמשים
        element:<UsersTable/>
    }

])