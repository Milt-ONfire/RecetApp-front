import { INutrition } from "@/models";
import { Card } from "./Card";

export function NutritionalData({ nutritionalData }: { nutritionalData: INutrition[] }) {
  return (
    <Card title="Datos nutricionales">
      <ul className="flex flex-col items-center gap-10">
        {nutritionalData.map((nutrition, i) => (
          <li key={i} className="text-head_text text-center">
            <h5 className="font-semibold text-4xl leading-[56px]">{nutrition.value}</h5>
            <p className="text-md">{nutrition.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
