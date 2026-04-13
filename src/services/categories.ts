import { Category } from "@/types";
// import axios from "axios"
import { categoriesList } from './datatemp'

// export const getCategories = async (): Promise<Category[] | undefined> => {
export const getCategories = (): Category[] | undefined => {
  try {
    return categoriesList
  } catch (error) {
    console.error(error);
  }
}
