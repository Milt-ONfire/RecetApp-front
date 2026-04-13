import { AddRating } from "@/types";
import api from "./axios";


const RATINGS_URL = import.meta.env.VITE_API_URL+import.meta.env.VITE_RATING;
const ADD_RATING = import.meta.env.VITE_BASE_URL+import.meta.env.VITE_ADD_RATING;
const headers = {headers: {
    "Content-Type": "application/json"
  }};

export const getRating = async (idRecipe : number) => {
    try {
        const ratingGotten = await api.post(RATINGS_URL,idRecipe,headers)
        const data = ratingGotten.data
        return data
    } catch (error) {
        console.log("error obteniendo calificación",error)
        return null
    }
} 

export const addRating = async (rating : AddRating ) => {
    try {
        await api.post(ADD_RATING,rating)       
    } catch (error) {
        console.log(error);
    }
} 