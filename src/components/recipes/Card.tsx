import { Recipe } from "@/types";
import { Link } from "react-router-dom";

export default function Card(recipe: Recipe) {

  const URL = import.meta.env.VITE_SERVER_URL
 
  console.log(recipe.linkTo);
  return (
    <div className="w-[300px] h-[550px] mb-1">
      <div className="w-full flex justify-center -mb-24">
        <img className="w-48 h-48 rounded-full shadow-[0px_20px_30px_-5px_rgba(0,0,0,0.85)] bg-white" src={URL+recipe.image} />
      </div>
      <div className="min-h-96 w-[300px] flex flex-col justify-evenly mt-8 items-center gap-5 shadow-[10px_20px_40px_-10px_rgba(196,175,195,0.45)] bg-[#fff5ee] rounded-tl-[80px] rounded-br-[80px]">
        <div className="w-[290px] flex flex-col flex-grow justify-between items-center px-6 pt-16 pb-6">
          <div className="flex flex-col gap-2 flex-grow">
            <span className="font-semibold text-2xl text-center text-[#2c2c2c]">
              {recipe.title}
            </span>
            <span className="font-normal text-sm text-pretty text-[#637381]">
              {recipe.description.length > 250? (<> {recipe.description.slice(0 , 180)} ... <br />
                 <span className="text-accent text-base font-semibold cursor-pointer">ver más</span></>)
                 : recipe.description}                
            </span>
          </div>
          <Link state={{recipe}} to={recipe.linkTo? recipe.linkTo : ''} className="flex justify-center items-center px-7 py-3 rounded-[50px] border border-solid border-[#66002f]">
            <span className="font-bold text-base text-center text-[#66002f]">Ver receta</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
