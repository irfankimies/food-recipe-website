import { useContext } from "react"
import { GlobalContext } from "../../components/context"
import { Link } from "react-router-dom";



export default function Home(){
  
  const { recipeList,loading } = useContext(GlobalContext);

  return (
    <div>
      <h1 className="text-center text-5xl mt-3 underline decoration-wavy decoration-red-200 decoration-[5px]">
        List of Recipes
      </h1>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-80 overflow-hidden p-5 bg-white shadow-xl gap-5 border-2 border-gray-200 rounded-xl"
            >
              <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                <img
                  src={item?.image}
                  alt=""
                  className="block w-full hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl truncate text-black">
                  {item?.name}
                </h3>
                <span className="text-sm text-cyan-700 font-medium flex flex-row items-center">
                  Rating: {item?.rating}
                  <img className="w-4 m-1" src="./public/star4.svg" />(
                  {item?.reviewCount})
                </span>
                <p className="text-sm">
                  <span className="text-black font-semibold">Cuisine: </span>
                  {item?.cuisine}
                </p>
                <p className="text-sm">
                  <span className="text-black font-semibold">Difficulty: </span>
                  {item?.difficulty}
                </p>

                <Link
                  to={`/recipe-item/${item?.id}`}
                  className="text-sm text-center mt-3 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black hover:bg-gray-600 text-white"
                >
                  Recipe Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>your search none in the list</div>
        )}
      </div>
    </div>
  );
}