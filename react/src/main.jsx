import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import OutletJSX from './OutletJSX.jsx'
import AppB from './AppB.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<OutletJSX />}>
      {/* Login Page */}
      <Route
        index
        element={< App />}
      />
      {/*Create User Page */}
      <Route
        path="/home"
        element={< AppB />}
      />

    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
