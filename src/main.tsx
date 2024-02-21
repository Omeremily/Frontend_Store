import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import UsersContextProvider from './context/usersContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsersContextProvider>
      <RouterProvider router={routes} />
    </UsersContextProvider>
  </React.StrictMode>,
)
