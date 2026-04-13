import { Recipe } from "@/types";
import Card from "./Card";

export default function Recipes({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="w-screen flex flex-col p-6">
      <h1 className="text-[#101010] text-[32px] font-semibold font-['Lato'] leading-[56px]">Lorem ipsum </h1>
      <div className="w-full h-[485px] justify-center items-start gap-6 flex flex-row">
        {
          recipes?.length > 0 && recipes.map(({ id, title, description }) => (
            <Card id={id} title={title} description={description} key={id} />
          ))
        }
      </div>
    </div>
  )
}    
