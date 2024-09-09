import { NavLink } from "react-router-dom"
export default function NavBar() {

  return (
    <nav className='bg-brand-orange-300 h-14 flex'>
      <div className='flex flex-row justify-evenly items-center w-5/6 text-center px-8 h-full'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  )
}