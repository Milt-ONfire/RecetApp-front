
import { Ingrediente } from "@/types";
import api from "./axios";

const INGREDIENTS_URL = import.meta.env.VITE_API_URL+import.meta.env.VITE_INGREDIENTS;

export const getIngredients = async () => {
    try {
        const ingredientes = await api.get<Ingrediente[]>(INGREDIENTS_URL)
        const data = ingredientes.data
        return data
    } catch (error) {
        console.log("error",error); 
        return []  
    }
};