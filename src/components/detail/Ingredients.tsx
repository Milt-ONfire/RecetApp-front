import { check } from "@/assets";
import { Card } from "./Card";

export function Ingredients({ ingredients }: { ingredients: string[] }) {
  return (
    <Card title="Ingredientes">
      <ul className="grid grid-cols-[max-content,_max-content] justify-between gap-y-3">
        {ingredients.map((ingredient, i) => (
          <li key={i} className="flex gap-2.5 w-content">
            <img src={check} width={24} height={24} alt="ingrediente" />
            <span className="text-md text-body_text">
              {ingredient}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
