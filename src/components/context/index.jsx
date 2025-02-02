import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "a2cdd2c7c4de44b69d2edf135f45a9ab";
    const earlyData = 'a'

  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [detailsRecipe, setDetailsRecipe] = useState(null)
  const [favList, setFavList] = useState([])
  
  const navigate = useNavigate()

  async function fetchRecipes(query) {
    try{
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/recipe/search?q=${query}&limit=100`)
      const data = await res.json();
      if(data?.recipes){
        setRecipeList(data.recipes);
      }
      setLoading(false)
    } catch(e){
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() =>{
    fetchRecipes(earlyData);
  },[]);

  async function handleSubmit(e) {
    e.preventDefault();
    fetchRecipes(searchParam);
    setDetailsRecipe('')
    navigate('/')
  }

  function handleAddToFav(item){
    setFavList(prev => prev.some(fav => fav.id === item.id)
      ? prev.filter(fav => fav.id !== item.id)
      : [...prev, item]
        )
      }

  return (
    <GlobalContext.Provider
      value={{
        handleSubmit,
        searchParam,
        setSearchParam,
        recipeList,
        navigate,
        BASE_URL,
        API_KEY,
        detailsRecipe,
        setDetailsRecipe,
        handleAddToFav,
        favList,
        setFavList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );


}