import { INutrition } from "@/models";
import { Card } from "./Card";

export function NutritionalData({ nutritionalData }: { nutritionalData: INutrition[] }) {
  return (
    <Card title="Comentarios">
      <ul className="flex flex-col gap-6">
        {nutritionalData.map((nutrition, i) => (
          <li
            key={i}
            className="border border-gray-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.VITE_SERVER_URL}${nutrition.imageUser}`}
                className="h-12 w-12 rounded-full object-cover"
                alt={nutrition.userName}
              />

              <div className="flex flex-col items-start">
                <p className="font-semibold text-head_text text-base">
                  {nutrition.userName}
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg ${index < nutrition.value
                          ? "text-yellow-400"
                          : "text-gray-300"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Comment */}
            <p className="text-subtitle_text text-sm leading-6 text-left">
              {nutrition.description}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
