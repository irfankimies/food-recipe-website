import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";


export default function Navbar(){
  
  const {setSearchParam, searchParam, handleSubmit} = useContext(GlobalContext)

  return(
    <div className="flex justify-between shadow-md items-center py-8 px-10 mx-auto flex-col md:flex-row gap-5">
      <h2 className="text-2xl font-semibold">
        <NavLink to={'/'}>
          FoodRecipe
        </NavLink>
      </h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input 
          type="search" 
          placeholder="Search your Favorites Food recipe"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam}
          />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to={'/'} className='text-black hover:opacity-30'>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} className='text-black hover:opacity-30'>Favorites</NavLink>
        </li>
      </ul>
    </div>
  )
}