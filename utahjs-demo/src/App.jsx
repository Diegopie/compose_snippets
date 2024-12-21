import { Outlet } from "react-router-dom"
import NavBar from "./layouts/NavBar"
import { Cart } from "./layouts/Cart"

export default function App () {
  return (
    <>
      <NavBar />
      <Cart />
      <Outlet />
    </>
  )
}