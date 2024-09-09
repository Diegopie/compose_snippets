import { Outlet } from "react-router-dom"
import NavBar from "./layouts/NavBar"

export default function App () {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}