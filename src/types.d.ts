export type Recipe = {
  id?: number,
  title: string,
  description: string,
  image?: string | undefined,
  categoryId?: number | null,
  recetaIngredientes?: RecetaIngrediente[],
  recetaGuardada?: RecetaGuardada[],
  linkTo?: string
}

export type Login = { 
  email?: string, 
  password: string 
}

export type Register = { 
  username: string,
  image?: string,
  email: string, 
  password: string,
  token: string
}

export type Category = {
  id: number,
  name: string,
  image?: string
}

export type RecetaIngrediente = {
  id: number;
  idReceta: number;
  idIngrediente: number;
  cantidad: number;
  ingrediente : Ingrediente
};

export type RecetaGuardada = {
  idRecetaGuardada: number;
  idUsuario: number;
  idReceta: number;
};

export type RecipeApi = {
idReceta: number,
nombreReceta: string,
descripcion: string,
imagen: string,
idCategoria: number,
categoria: string, // mejor usar string en tu type
recetaIngredientes: RecetaIngrediente[],
recetaGuardada: RecetaGuardada[]
}

export type Ingrediente = {
  id: number,
  name: string,
  unidadMedida: string | null,
  cantidad?: number,
  isCustom?: boolean
}

export type AddRating = {
  idReceta: number,
  idUser: number,
  comentario: string,
  rating: number
}

export interface RecipeFormData {
  name: string;
  description: string;
  categoryId: string;
  ingredients: Ingrediente[];
  images: RecipeImage | null;
}

export interface RecipeImage {
  id: string;
  url: string;
  file: File;
}
 
 