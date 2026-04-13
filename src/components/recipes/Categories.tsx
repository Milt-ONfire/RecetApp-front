import { useEffect, useState } from "react";

import Recipes from "./Recipes";
import CategoriesList from "./CategoriesList";

import { Recipe } from "@/types";
import CategoriesStore from '@/store/categoriesStore'
import { getAllRecipes} from "@/services/recipes";
import useAuthStore from "@/store/authStore";

export default function Categories() {

  const [recipes , setRecipes] = useState<Recipe[]>([]);
  const token = useAuthStore.getState().token;
  
    useEffect(() => {
      if (!token) return;
      const load = async () => {
        try {
          console.log("Ejecutando load...");
          const data = await getAllRecipes(0);
          console.log("Data recibida:", data);
          setRecipes(data)
        } catch (error) {
          console.log("error carga de recetas:", error);         
        }
      };
      load();
    }, []);

    useEffect(() => {
      console.log("receta",recipes);   
    },[])

  const { selected } = CategoriesStore()
  console.log(selected);
 
  // const [recipes, setRecipes] = useState<Recipe[] | []>([])
  // useEffect(() => {
  //   loadRecipes(1)
  // }, [])

  // const loadRecipes = (page: number) => {
  //   const result = getUserRecipes(page)
  //   if (result) {
  //     setRecipes(result)
  //   }
  // }

  return (
    <div className='flex flex-col gap-8 pb-8'>
      <CategoriesList />
      <Recipes recipes={recipes}
               categoryFilter = {selected}
      />
    </div>
  )
}
