import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import UsersContextProvider from './context/usersContext'
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import ItemContextProvider from './context/ItemContext'

// בכל טעינת של האפליקציה יש לרנדר ולבצע את הפעולות הבאות
ReactDOM.createRoot(document.getElementById('root')!).render(

  /* יצירת מצב שבעזרתו ניתן לזהות ולתקן בעיות פוטנציאליות באפליקציה
     מאפשר התראה על פונקציות מיושנות ושימוש בפעולות שלא מאוד מתקדמות
     ומסייע לכתוב אפליקציה ריאקט יותר נקייה ומתקדמת */
  <React.StrictMode>
    {/* ספק מצב משתמש המספק את נתוני המשתמש הרלוונטיים לכל הרכיבים בתוך האפליקציה */}
    <ItemContextProvider>
      {/* ספק מצב לעגלת הקניות המנהל את נתוני המוצרים בעגלת הקניות של המשתמש */}
      <UsersContextProvider>
        {/* ספק הניווט מאפשר ניווט באפליקציה באמצעות הגדרת נתיבים וקומפוננטות שונות עבור כל נתיב */}
        <ShoppingCartProvider>
          {/* בקרת הניווט מועברת לפי הנתיבים שמוגדרים בקובץ ראוטס  */}
          <RouterProvider router={routes} />
        </ShoppingCartProvider>
      </UsersContextProvider>
    </ItemContextProvider>
  </React.StrictMode>,

)
