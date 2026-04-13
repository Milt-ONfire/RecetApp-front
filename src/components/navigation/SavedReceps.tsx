import { IRecetItem } from "@/models";
import { RecetTarget } from "../commons/RecetTarget";
import { imgReceta, imgReceta1 } from "@/assets";
import { useEffect, useState } from "react";
import { getSavedRecipesByUser } from "@/services/recipes";

export default function SavedReceps() {

  // const recetItems: IRecetItem[] = [
  //   { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
  //   { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
  //   { imgSrc: imgReceta1, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
  //   { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
  //   { imgSrc: imgReceta1, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
  //   { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
  // ];

  const [recipeItems, setRecipeItems] = useState<IRecetItem[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getSavedRecipesByUser();
        setRecipeItems(data.map((item)=>
          ({
            recetName: item.title,
            imgSrc: item.image,
            recetText: item.description
          }))     
        )
      } catch (error) {
        console.log("error cargando recetas guardadas", error);
      }
    }
    load();
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 px-8 lg:grid-cols-4 gap-8'>
      {
        recipeItems.map(item => (
          <RecetTarget key={item.recetName} {...item} />
        ))
      }
    </div>
  )

}