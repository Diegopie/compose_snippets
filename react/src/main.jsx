import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import './index.css'
import App from './App.jsx'
import Home_B from './Home-B.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Login Page */}
      <Route
        index
        element={< Home />}
      />
      {/*Create User Page */}
      <Route
        path="/home"
        element={< Home_B />}
      />

    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
