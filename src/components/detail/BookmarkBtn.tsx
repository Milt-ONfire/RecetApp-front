import { bookmark, bookmarkActive } from "@/assets";
import { IRecetSaved } from "@/models";
import { addRecipeToSaved } from "@/services/recipes";

export function BookmarkBtn({ bookmarked, setBookmarked, recipeSaved }: { bookmarked: boolean, recipeSaved: IRecetSaved | undefined, setBookmarked: (value: boolean) => void }) {
  
  const handleClick = async () => {
    if (!recipeSaved) {
    console.log("Aún no hay datos de receta");
    return;
  }
    try {
      console.log("ID receta que envío:", recipeSaved?.idReceta);
      await addRecipeToSaved(recipeSaved); // primero backend
      setBookmarked(true); // luego UI
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={() =>handleClick()}>
      {bookmarked ? (
        <img src={bookmarkActive} alt="Guardar" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
      ) : (
        <img src={bookmark} alt="Guardar" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
      )}
    </button>
  );
}
