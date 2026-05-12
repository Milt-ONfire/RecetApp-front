import { ResponseError } from "@/models"
import { Category, Ingrediente } from "@/types";


export const ERROR_RESPONSE: ResponseError = {
  "It should be a valid email": "Email invalido",
  "Min length: 6": "El campo debe tener minimo 6 caracteres",
  "Max length: 20": "El campo debe tener maximo 20 caracteres",
  "Max length: 30": "El campo debe tener maximo 30 caracteres",
  "Required": "Campo requerido",
  "It should be a valid email!": "Email invalido",
  "User not found!": "Usuario no encontrado",
  "Already logged in!": "Ya estas logueado",
  "Password does not match!": "Contraseña incorrecta",
  "File too large": "El archivo es demasiado pesado",
}

export const CATEGORIES_MOCK: Category[] = [
  { id: 1 , name: "Vegetariana" },
  { id: 2 , name: "Vegana" },
  { id: 3 , name: "Sin gluten" },
  { id: 4 , name: "Comida rápida" },
  { id: 5 , name: "Sopas" },
  { id: 6 , name: "Mediterránea" },
  { id: 7 , name: "Bebidas" },
  { id: 8 , name: "Ensalada" },
  { id: 9 , name: "Prueba" }
];
 
export const INGREDIENTS_MOCK: Ingrediente[] = [
  { id: 1, name: "Harina", unidadMedida: "taza" },
  { id: 2, name: "Azúcar", unidadMedida: "cda" },
  { id: 3, name: "Huevos", unidadMedida: "und" },
  { id: 4, name: "Leche", unidadMedida: "ltr" },
  { id: 5, name: "Mantequilla", unidadMedida: "cub" },
  { id: 6, name: "Sal", unidadMedida: "cda" },
  { id: 7, name: "Aceite de oliva", unidadMedida: "cda" },
  { id: 8, name: "Ajo", unidadMedida: "und" },
  { id: 9, name: "Cebolla", unidadMedida: "und" },
];
