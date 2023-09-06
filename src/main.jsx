import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChangePassword from './components/ChangePassword/ChangePassword.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import './index.css'
import Main from './layouts/main/Main.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/change-password",
        element: <ChangePassword/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
