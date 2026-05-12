import { Ingrediente } from "@/types";
import { useEffect, useRef, useState } from "react";
import { getIngredients } from "@/services/ingredients";


interface MultiSelectIngredientsProps {
  selected: Ingrediente[];
  onChange: (ingredients: Ingrediente[]) => void;
  hasError?: boolean;
}

export function MultiSelectIngredients({
  selected,
  onChange,
  hasError,
}: MultiSelectIngredientsProps) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [allIngredients, setAllIngredients] = useState<Ingrediente[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = allIngredients.filter(
    (i) =>
      (i.name || "").toLowerCase().includes((search || "").toLowerCase()) &&
      !selected.find((s) => s.id === i.id)
  );

  useEffect(() => {
    const getData = async () => {
      const data = await getIngredients();
      const mapped = data.map((i: any) => ({
        id: i.idIngrediente,
        name: i.nombreIngrediente,
        unidadMedida: i.unidadMedida,
        isCustom: true
      }));
      setAllIngredients(mapped);
      console.log(data);
    }
    getData();
  }, []);

  const canCreate =
    search.trim().length > 0 &&
    !allIngredients.find(
      (i) => (i.name || "").toLowerCase() === search.trim().toLowerCase()
    );

  const handleSelect = (ingredient: Ingrediente) => {
    onChange([...selected, ingredient]);
    setSearch("");
    inputRef.current?.focus();
  };

  const handleCreate = () => {
    const newIngredient: Ingrediente = {
      id: 0,
      name: search.trim(),
      unidadMedida: "",
      isCustom: true,
    };
    setAllIngredients((prev) => [...prev, newIngredient]);
    onChange([...selected, newIngredient]);
    setSearch("");
    inputRef.current?.focus();
  };

  const handleRemove = (id: number) => {
    onChange(selected.filter((i) => i.id !== id));
  };

  return (
    <div className="relative">
      <div
        className={[
          "flex flex-wrap gap-1.5 items-center min-h-[46px] px-2.5 py-1.5 bg-white border rounded-md cursor-text transition-colors",
          "focus-within:border-[#9B1255] focus-within:ring-2 focus-within:ring-[#9B1255]/10",
          hasError ? "border-red-500" : "border-[#9B1255]/40",
        ].join(" ")}
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
      >
        {selected.map((ing) => (
          <span
            key={ing.id}
            className={[
              "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs text-white font-sans",
              ing.isCustom ? "bg-[#2E8B6E]" : "bg-[#9B1255]",
            ].join(" ")}
          >
            {ing.name}
            {ing.isCustom && (
              <span className="text-[10px] bg-white/25 px-1 py-px rounded tracking-wide">
                nuevo
              </span>
            )}
            <button
              type="button"
              className="opacity-70 hover:opacity-100 text-base leading-none ml-0.5 bg-transparent border-0 text-white cursor-pointer p-0"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(ing.id);
              }}
            >
              ×
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          className="flex-1 min-w-[160px] border-0 outline-none text-sm bg-transparent text-gray-800 placeholder-gray-400 py-0.5"
          placeholder={selected.length === 0 ? "Buscar o agregar ingrediente..." : ""}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        />
      </div>

      {isOpen && (search.length > 0 || filtered.length > 0) && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white border border-t-0 border-[#9B1255] rounded-b-md max-h-56 overflow-y-auto shadow-md">
          {filtered.slice(0, filtered.length).map((ing) => (
            <div
              key={ing.id}
              className="flex items-center gap-2 justify-between px-3.5 py-2 text-sm font-sans cursor-pointer hover:bg-[#9B1255]/5 transition-colors text-gray-700"
              onMouseDown={() => handleSelect(ing)}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B1255]/20 shrink-0" />
                <span>{ing.name}</span>
              </div>

              <span className="text-xs text-gray-500">
                {ing.unidadMedida}
              </span>
            </div>
          ))}
          {canCreate && (
            <div
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-sans font-semibold text-[#2E8B6E] border-t border-gray-100 cursor-pointer hover:bg-[#2E8B6E]/5 transition-colors"
              onMouseDown={handleCreate}
            >
              <span className="text-lg leading-none">+</span>
              Agregar &quot;{search.trim()}&quot; como nuevo ingrediente
            </div>
          )}
          {filtered.length === 0 && !canCreate && (
            <div className="px-3.5 py-2 text-sm text-gray-400 font-sans">
              No hay resultados
            </div>
          )}
        </div>
      )}
    </div>
  );
}