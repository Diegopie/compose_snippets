import { NavLink } from "react-router-dom"
import { Icon_Cart } from "./Icons"
import { useGlobalContext } from "../context/GlobalContext"
import { actionToggleCart } from "../context/GlobalActions";
export default function NavBar() {

  const [, globalDispatch] = useGlobalContext();

  return (
    <nav className='bg-brand-orange-300 h-14 flex bg-lime-600'>
      <div className='flex flex-row justify-evenly items-center w-full text-center px-8 h-full'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <button
          onClick={(() => globalDispatch(actionToggleCart()))}
        ><Icon_Cart className="h-6"/></button>
        
      </div>
    </nav>
  )
}