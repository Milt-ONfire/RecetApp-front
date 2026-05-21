import { useState } from "react";
import { Ingrediente, RecipeFormData } from "@/types";
import { MultiSelectIngredients } from "../MultiSelectIngredients";
import { CATEGORIES_MOCK } from "@/constants/api";
import { ImageUploader } from "./Imageuploader";
import { FormField } from "./FormField";
import { addRecipe } from "@/services/recipes";

// Inputs con borde vino, focus vino
const inputBase =
  "w-full border border-[#9B1255]/40 rounded-md px-3.5 py-2.5 text-base text-gray-800 bg-white outline-none transition-colors focus:border-[#9B1255] focus:ring-2 focus:ring-[#9B1255]/10 placeholder:text-gray-400";

const inputErrorClass = "border-red-500 focus:border-red-500 focus:ring-red-500/10";

const emptyForm: RecipeFormData = {
  name: "",
  description: "",
  categoryId: "",
  ingredients: [],
  images: null,
};

export default function RecipeForm({
  onSubmit,
}: {
  onSubmit?: (data: RecipeFormData) => void;
}) {
  const [form, setForm] = useState<RecipeFormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof RecipeFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = <K extends keyof RecipeFormData>(key: K, value: RecipeFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio";
    if (!form.description.trim()) e.description = "La descripción es obligatoria";
    if (!form.categoryId) e.categoryId = "Selecciona una categoría";
    if (form.ingredients.length === 0) e.ingredients = "Agrega al menos un ingrediente";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const formData = new FormData();
    formData.append("NombreReceta", form.name);
    formData.append("Descripcion", form.description);
    formData.append("IdCategoria", String(form.categoryId));

    if (form.images) {
      formData.append("file", form.images.file);
    }

    form.ingredients.forEach((i, index) => {
      formData.append(`Ingredientes[${index}].NombreIngrediente`, i.name);
      formData.append(`Ingredientes[${index}].Cantidad`, String(i.cantidad));
      formData.append(`Ingredientes[${index}].UnidadMedida`, String(i.unidadMedida));
    });

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    if (!form.images?.file) {
      console.log("No hay imagen");
    }

    addRecipe(formData);
    setSubmitted(true);
    onSubmit?.(form);
  };

  if (submitted) {
    return (
      <SuccessScreen
        form={form}
        onReset={() => {
          setForm(emptyForm);
          setSubmitted(false);
        }}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 font-sans text-gray-800">
      {/* Header con franja vino */}
      <div className="mb-8 pb-4 border-b-2 border-[#9B1255]">
        <h1 className="text-3xl font-bold tracking-tight mb-1 text-[#9B1255]">
          Nueva Receta
        </h1>
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Completa los datos para guardar tu receta
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <FormField label="Nombre de la receta" error={errors.name} required htmlFor="recipe-name">
          <input
            id="recipe-name"
            type="text"
            placeholder="Ej: Arepas de choclo con queso"
            value={form.name}
            className={`${inputBase} ${errors.name ? inputErrorClass : ""}`}
            onChange={(e) => setField("name", e.target.value)}
          />
        </FormField>

        <FormField label="Descripción" error={errors.description} required htmlFor="recipe-desc">
          <textarea
            id="recipe-desc"
            rows={4}
            placeholder="Describe brevemente la receta, su origen o cómo prepararla..."
            value={form.description}
            className={`${inputBase} resize-y leading-relaxed ${errors.description ? inputErrorClass : ""}`}
            onChange={(e) => setField("description", e.target.value)}
          />
        </FormField>

        <FormField label="Categoría" error={errors.categoryId} required htmlFor="recipe-cat">
          <select
            id="recipe-cat"
            value={form.categoryId}
            className={`${inputBase} ${errors.categoryId ? inputErrorClass : ""}`}
            onChange={(e) => setField("categoryId", e.target.value)}
          >
            <option value="">Selecciona una categoría...</option>
            {CATEGORIES_MOCK.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Ingredientes" error={errors.ingredients} required>
          <MultiSelectIngredients
            selected={form.ingredients}
            onChange={(ingredients: Ingrediente[]) => setField("ingredients", ingredients)}
            hasError={!!errors.ingredients}
          />
        </FormField>

        <FormField label="Imagenes" optional>
          <ImageUploader
            images={form.images}
            onChange={(img) => setField("images", img)}
          />
        </FormField>

        <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
          {/* Botón primario: verde teal (como el botón "Buscar" de la app) */}
          <button
            type="submit"
            className="bg-[#2E8B6E] text-white rounded-md px-8 py-2.5 text-base font-semibold cursor-pointer hover:bg-[#256f57] active:scale-[0.98] transition-all"
          >
            Guardar receta
          </button>
          {/* Botón secundario: borde vino */}
          <button
            type="button"
            className="bg-transparent text-[#9B1255] border border-[#9B1255]/50 rounded-md px-5 py-2.5 text-sm cursor-pointer hover:border-[#9B1255] hover:bg-[#9B1255]/5 transition-colors"
            onClick={() => setForm(emptyForm)}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

function SuccessScreen({
  form,
  onReset,
}: {
  form: RecipeFormData;
  onReset: () => void;
}) {
  return (
    <div className="max-w-sm mx-auto text-center px-6 py-12 font-sans">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2E8B6E]/10 text-[#2E8B6E] mb-5">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-[#9B1255] mb-1">¡Receta creada!</h2>
      <p className="text-base text-gray-700 mb-1">{form.name}</p>
      <p className="text-sm text-gray-400 mb-6">
        {form.ingredients.length} ingredientes ·{" "}
        {CATEGORIES_MOCK.find((c) => c.id.toString() === form.categoryId)?.name}
      </p>
      <button
        type="button"
        className="bg-[#2E8B6E] text-white rounded-md px-6 py-2.5 text-base font-semibold cursor-pointer hover:bg-[#256f57] active:scale-[0.98] transition-all"
        onClick={onReset}
      >
        Crear otra receta
      </button>
    </div>
  );
}