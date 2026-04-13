export interface IStats {
  value: number;
  description: string;
}

export interface INutrition {
  value: number;
  description: string;
}

export interface IRecetData {
  title: string;
  description: string;
  rating: number;
  stats: IStats[];
  nutritionalData: INutrition[];
  ingredients: string[];
  steps: string[];
  media?: string;
}

export interface IRecetItem {
  imgSrc?: string;
  recetName?: string;
  recetText: string;
}

export interface IRecetSaved{
  idUsuario?: number;
  idReceta: number;
  idRecetaGuardada?: number;
}
