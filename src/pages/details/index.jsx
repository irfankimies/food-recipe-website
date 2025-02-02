import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context";



export default function Details() {
  
  const {id} = useParams();
  const {
    detailsRecipe,
    setDetailsRecipe,
    API_KEY,
    loading,
    handleAddToFav,
    favList,
    setFavList,
  } = useContext(GlobalContext);

  const BASE_URL = 'https://api.spoonacular.com/recipes'
  
  async function getRecipeDetails() {
    const res = await fetch(
      `https://dummyjson.com/recipe/${id}`
    );
    const data = await res.json();
    setDetailsRecipe(data)
    console.log(data);
    
  }
  useEffect(() =>{
    getRecipeDetails();
  
    
  }, [id])
  

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={detailsRecipe?.image}
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 text-start text-lg ml-10 mt-10 font-bold">
          <span>Duration of Making: {detailsRecipe?.cookTimeMinutes} Min</span>
          <span>Servings: {detailsRecipe?.servings}</span>
          <span>Difficulty: {detailsRecipe?.difficulty}</span>
          <span>Cuisine: {detailsRecipe?.cuisine}</span>
          <span>Calorie per servery: {detailsRecipe?.caloriesPerServing}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-3xl text-cyan-700 font-medium">
          {detailsRecipe?.name}
        </span>
        <div>
          <button
            onClick={() => handleAddToFav(detailsRecipe)}
            className="py-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-lg bg-black text-white cursor-pointer"
          >
            {favList?.some((item) => item.id === detailsRecipe?.id)
              ? "Remove from Favorite"
              : "Add to Favorite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Instructions:
          </span>
          <ul className="list-decimal pl-4 mt-4 space-y-2">
            {detailsRecipe?.instructions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="list-decimal pl-4 mt-4 space-y-2">
            {detailsRecipe?.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

}
