import { imgReceta, imgReceta1 } from "@/assets";
import { RecetTarget } from "../commons/RecetTarget";


export default function Receps() {

  interface RecetItem {
    imgSrc?: string;
    recetName?: string;
    recetText: string;
  }

  const recetItems: RecetItem[] = [
    { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
    { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
    { imgSrc: imgReceta1, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
    { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
    { imgSrc: imgReceta1, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
    { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 px-8 lg:grid-cols-3 gap-8 py-2'>
      {
        recetItems.map(item => (
          <RecetTarget key={item.recetName} {...item} />
        ))
      }
    </div>
  )
}