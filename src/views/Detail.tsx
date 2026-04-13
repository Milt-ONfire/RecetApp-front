import { IRecetData, IRecetSaved } from "@/models/recet";
import { data as recetData } from "@/data/recet"
import { useEffect, useState } from "react";
import { BookmarkBtn, Ingredients, NutritionalData, Stars, Stats, Steps } from "@/components/detail";
import { useLocation, useParams} from "react-router-dom";
import { getRating } from "@/services/rating";
import { getSavedRecipeByIdUser } from "@/services/recipes";

function Detail() {
  const URL = import.meta.env.VITE_SERVER_URL
  const [data, setData] = useState<IRecetData>(recetData);
  const [recipeSaved, setRecipeSaved] = useState<IRecetSaved>();
  const [rating, setRating] = useState<number>(0);
  const [bookmarked, setBookmarked] = useState(false);
  const location = useLocation();
  const recipe = location.state?.recipe;
  const { id } = useParams();
  const idNumber = Number(id);

  useEffect(()=>{
      const checkIfSaved = async () => {
        if (!recipeSaved?.idReceta) return;
        try {
          const isSaved = await getSavedRecipeByIdUser(recipeSaved.idReceta);
          setBookmarked(isSaved);
          console.log("receta guardada",isSaved);
          
        } catch (error) {
          console.log(error);   
        }
      }
      checkIfSaved();
    }, [recipeSaved?.idReceta])

  // return <div>Recipe id: {idNumber}</div>;

  useEffect(() => {
      const getData = async () =>{
      const rat = await getRating(idNumber)
      console.log(rat);
      setRating(rat)
      return rat
     }
     getData()
  },[recipe])

  useEffect(() => {
    const setRecipe = async () =>{
    if (recipe)  
      await setData(
        {
          title: recipe?.title ? recipe.title : recetData.title,
          description: recipe?.description ? recipe?.description : recetData.description,
          rating: rating ? rating : 0,
          stats: recetData.stats,
          nutritionalData: recetData.nutritionalData,
          steps: recipe?.description
            ? recipe.description
              .split(/\r?\n|\.\s+/)
              .map((step: string) => step.trim())
              .filter(Boolean) : recetData.steps,
          ingredients: recipe?.recetaIngredientes?.length ? recipe.recetaIngredientes
            .map((i: any) => i?.idIngredienteNavigation?.nombreIngrediente)
            .filter(Boolean)
            : recetData.ingredients,
          media: recipe?.image ? URL + recipe.image : recetData.media
        });
    console.log("prototipo",recipe);
    }
    setRecipe()
  }, [recipe,rating])

  useEffect(() => {
      const setRecipeToSave = async () =>{
      setRecipeSaved({ idUsuario: 0, idReceta:idNumber, idRecetaGuardada:0 })
      console.log("recetaGuardada",recipeSaved);
      return recipeSaved
     }
     setRecipeToSave()
  },[recipe])

  if (!data) return <p>Cargando receta...</p>;

  return (
    <div className="flex flex-col pb-20 lg:pb-28">
      <div className="grid grid-cols-[minmax(100px,400px)_minmax(100px,_800px)] lg:grid-cols-[minmax(100px,600px)_minmax(100px,_800px)] gap-6">
        <div className="h-[280px] lg:h-[417px]">
          <img src={data.media} alt="media" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[800px] flex flex-col gap-5 lg:gap-10 justify-end me-6">
          <div className="w-full flex justify-between gap-6">
            <h1 className="text-2xl font-extrabold w-min grow text-head_text lg:text-6xl truncate">{data.title}</h1>
            <BookmarkBtn bookmarked={bookmarked} setBookmarked={setBookmarked} recipeSaved={recipeSaved} />
          </div>
          <p className="text-sm lg:text-md text-subtitle_text">{data.description}</p>
          <Stars rating={data.rating} />
          <Stats stats={data.stats}/>
        </div>
      </div>

      <section className="mt-14 mb-10 lg:mt-20 mx-[104px] flex flex-col-reverse gap-6 lg:grid lg:grid-cols-2 lg:gap-10">
        <Ingredients ingredients={data.ingredients}/>
        <NutritionalData nutritionalData={data.nutritionalData}/>
      </section>

      <section className="mx-10 lg:mx-[104px]">
        <Steps steps={data.steps}/>
      </section>
    </div>
  )
}

export default Detail;
