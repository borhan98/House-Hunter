import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Routes'
import { Toaster } from 'react-hot-toast'
import UserProvider from './UserProvider/UserProvider'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </HelmetProvider>
    <Toaster />
  </React.StrictMode>,
)
