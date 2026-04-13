import { recipesList } from "./datatemp";
import { Recipe, RecipeApi } from "@/types";
import api from "./axios";
import { IRecetItem, IRecetSaved } from "@/models";

const RECIPES_URL = import.meta.env.VITE_RECIPES ;
const SAVE_RECIPES_URL = import.meta.env.VITE_SAVER_RECIPES;
const RECIPES_FOUND_URL = import.meta.env.VITE_INGREDIENTS_FOUNDED;
const CHECK_SAVED_BY_USER = import.meta.env.VITE_CHECKER_RECIPES;
const GET_SAVED_RECIPES = import.meta.env.VITE_GET_RECIPES_SAVED;

export const getAllRecipes = async (page: number | undefined): Promise<Recipe[]> => {
  try {
    const recipesAll = await api.get<RecipeApi[]>(RECIPES_URL)
    const data = recipesAll.data;
    console.log("recetas", data);
    const mapped = data.map((r) => ({
      id: r.idReceta,
      title: r.nombreReceta,
      description: r.descripcion,
      image: r.imagen,
      categoryId: r.idCategoria,
      recetaIngredientes: r.recetaIngredientes,
      recetaGuardada: r.recetaGuardada
    }))
    

    if (page !== undefined) {
      const end = 8 + page * 4
      return mapped.slice(0, end)
    } return mapped.slice(0, 8)
  } catch (error) {
    console.log(error);
    return [];
  }
};

// obtener todas las recetas del usuario o según busqueda
export const getUserRecipes = (page: number | undefined) => {
  try {
    if (page) {
      const end = 8 + page * 4
      return recipesList.slice(0, end)
    } else return recipesList.slice(0, 8)
  } catch (error) {
    console.log(error);
  }
};

export const getByIngredients = async (page: number | undefined, ingredients: number[] | undefined): Promise<Recipe[]> => {
  try {
    const recipesFound = await api.post<RecipeApi[]>(RECIPES_FOUND_URL,ingredients)
    const data = recipesFound.data
    console.log("recetas por ingrediente", data);
    const mapped = data.map((r) =>({
      id: r.idReceta,
      title: r.nombreReceta,
      description: r.descripcion,
      image: r.imagen,
      categoryId: r.idCategoria,
      recetaIngredientes: r.recetaIngredientes,
      recetaGuardada: r.recetaGuardada  
    }))
    if (page !== undefined) {
      const end = 8 + page * 4
      return mapped.slice(0, end)  
    }else return mapped.slice(0,8)    
  } catch (error) {
    console.log(error);  
    return [];
  }
};

export const addRecipe = async (recipe: {
  title: string;
  description: string;
  userId: string;
}) => {
  try {
    await api.post(RECIPES_URL, recipe);
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = async (recipe: {
  recipeId: string
  title: string;
  description: string;
  userId: string;
}) => {
  try {
    await api.patch(RECIPES_URL, recipe);
  } catch (error) {
    console.log(error);
  }
} 

export const addRecipeToSaved = async (recipeToSave : IRecetSaved | undefined) => {
  try {
    console.log("BASE URL:", import.meta.env.VITE_OUR_API_URL);
    await api.post(SAVE_RECIPES_URL, recipeToSave)
  } catch (error) {
    console.log(error);   
  }
}

export const getSavedRecipeByIdUser = async (idRecipe : number) => {
  try {
   const data = await api.post(CHECK_SAVED_BY_USER, idRecipe,
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
   return data.data
  } catch (error) {
    console.log(error);
  }
}

export const getSavedRecipesByUser = async (): Promise<Recipe[]> => {
  try {
    const recetasGuardadas = await api.get<RecipeApi[]>(GET_SAVED_RECIPES)
    const mapped = recetasGuardadas.data.map((r) =>({
      id: r.idReceta,
      title: r.nombreReceta,
      description: r.descripcion,
      image: r.imagen,
      categoryId: r.idCategoria,
      recetaIngredientes: r.recetaIngredientes,
      recetaGuardada: r.recetaGuardada  
    }))
    return mapped;
  } catch (error) {
    console.log(error);
    return [];
  }
}