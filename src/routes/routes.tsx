import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export const routes= createBrowserRouter([
    {
        path:'/', //הפנייה לדף הראשי
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    }

])