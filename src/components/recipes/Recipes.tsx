import { Recipe } from "@/types";
import Card from "./Card";

type RecipesProps = {
  recipes: Recipe[]
  categoryFilter?: number | null
}

export default function Recipes({recipes, categoryFilter} : RecipesProps ) {

  return (
    <div className="w-full flex flex-col p-6">
      <div className="w-full justify-center items-start gap-8 flex flex-row flex-wrap">
        {
          recipes?.length > 0 && (categoryFilter?  recipes.filter((recipe) => recipe.categoryId == categoryFilter ) : recipes).map((recipe) => (
            <Card  image={recipe.image} key={recipe.id} linkTo={`/recipes/detail/${recipe.id}`} {...recipe}/>            
          ))
        }
      </div>
    </div>
  )
}    
