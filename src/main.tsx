import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import UsersContextProvider from './context/usersContext'
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import ItemContextProvider from './context/ItemContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemContextProvider>
    <UsersContextProvider>
      <ShoppingCartProvider>
        <RouterProvider router={routes} />
      </ShoppingCartProvider>
    </UsersContextProvider>
    </ItemContextProvider>

  </React.StrictMode>,
)
