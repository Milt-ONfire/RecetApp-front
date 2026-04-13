import { useEffect, useState } from "react"
import Ingredientbutton from "./Ingredientbutton"
import { useToast } from "@/hooks/use-toast"
import { getIngredients } from "@/services/ingredients"
import { Ingrediente, Recipe } from "@/types"
import { getByIngredients } from "@/services/recipes"
import Recipes from "./Recipes"

export default function Personalized() {
  const { toast } = useToast()

  const [selectedList, setSelectedList] = useState<Ingrediente[] | []>([])
  const [suggestedList, setSuggestedList] = useState<Ingrediente[]>([])
  const [showOptions, setShowOptions] = useState(false);
  const [recipes , setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        console.log("...cargando load");
        const data: Ingrediente[] = await getIngredients();
        console.log(data);
        const mapped = data.map((i: any) => ({ id: i.idIngrediente, name: i.nombreIngrediente, unidadMedida: i.unidadMedida }))
        setSuggestedList(mapped);
      } catch (error) {
        console.log(error);
      }
    }
    load()
  }, []);

  const handleListClick = () => {
    const $list = document.getElementById('addIngredient')
    $list?.classList.remove('hidden')
    $list?.classList.add('flex')
  }

  const handleItemListClick = (id: number) => {
    const $list = document.getElementById('addIngredient')
    $list?.classList.remove('flex')
    $list?.classList.add('hidden')
    const ingredientFound = selectedList.find(ingredient => ingredient.id === id)
    if (ingredientFound) return
    const addIngredient = suggestedList.find(ingredient => ingredient.id === id)
    if (addIngredient) {
      setSelectedList([...selectedList, addIngredient])
      const filteredIngredients = suggestedList.filter(ingredient => ingredient.id !== id)
      setSuggestedList(filteredIngredients)
    }
  }

  const handleRemoveIngredient = (id: number) => {
    const addIngredient = selectedList.find(ingredient => ingredient.id === id)
    if (addIngredient) {
      setSuggestedList([...suggestedList, addIngredient])
      const filteredIngredients = selectedList.filter(ingredient => ingredient.id !== id)
      setSelectedList(filteredIngredients)
    }
  }

  const items: number[] = []

  const handleSearchButton = async () => {
    if (selectedList?.length === 0) return
    else {
      let description = ''   
      for (const ingredient of selectedList) {
        description += ` ${ingredient.name}`,
        items.push(ingredient.id)
      }
      toast({
        title: 'Ingredients',
        description
      })
      console.log(items);
      const dataRecipes = await getByIngredients(8,items);
      setRecipes(dataRecipes)     
    }
    console.log("recipesSeted",recipes); 
  }
  
  useEffect(() => {
      console.log("receta",recipes);   
    },[recipes])

  return (

    <div className="w-screen grow bg-white px-20 py-14">
      <h1 className="text-[#595858] text-5xl font-extrabold font-['Lato'] leading-[56px]">
        Te ayudamos a cocinar
      </h1>

      <div className="w-full flex justify-between h-5/6 gap-4" >
        <div className="relative flex flex-col justify-between w-[95%]" >
          <input
            list='addIngredient'
            className="h-[50px] w-full flex text-gray-400 text-base font-normal font-['Lato'] leading-normal outline-none bg-white rounded-md border border-colorprimario px-4 items-center relative"
            placeholder="Ingresa un ingrediente"
            onClick={() => {
              handleListClick();
              setShowOptions(true);
            }}
          />
          <ul
            id="addIngredient"
            className={`${showOptions ? "" : "hidden"} flex-col absolute w-full top-[45px] max-h-80 rounded-b-md p-1 border border-colorprimario z-10 bg-white overflow-scroll`}
          >
            <li className="cursor-pointer h-[50px] w-full flex text-primary justify-end text-xs hover:text-sm font-['Lato'] leading-normal bg-white hover:font-bold px-4 items-center absolute" 
                onClick={()=>{setShowOptions(false)}}>ocultar X</li>
            {
              suggestedList?.map(({ id, name }) => (
                <li
                  onClick={() => handleItemListClick(id)}
                  key={name + id}
                  className="h-[50px] w-full flex text-gray-400 text-sm hover:text-md font-normal font-['Lato'] leading-normal outline-none bg-white hover:bg-primary hover:text-slate-100 px-4 items-center"
                >
                  {name}
                </li>
              ))
            }
          </ul>

          <div className="w-full rounded-lg justify-center items-end gap-2 flex-column">
            <div className="h-[69px] justify-start items-end gap-2 flex">
              <div className="text-black text-lg font-['Lato'] font-semibold leading-normal tracking-wide">Ingredientes sugeridos</div>
            </div>
            <div
              className="max-h-[108px] py-4 justify-center items-start gap-2 flex flex-wrap overflow-auto scrollbar-none"
            >
              {
                suggestedList?.map(({ id, name }) => (
                  <Ingredientbutton
                    key={id}
                    id={id}
                    name={name}
                    handleItemListClick={handleItemListClick}
                  />
                ))
              }
            </div>
          </div>
        </div>

        <div className="w-[396px] min-h-52 rounded-lg border border-colorprimario flex-col justify-between items-center inline-flex bg-white py-4">
          <div className="w-full p-1  justify-center items-start gap-1 flex flex-wrap">
            {
              selectedList?.length > 0 && selectedList.map(({ id, name }) => (
                <Ingredientbutton
                  key={id}
                  id={id}
                  name={name}
                  handleRemoveIngredient={handleRemoveIngredient}
                />
              ))
            }
          </div>
          <button
            className="w-[184px] h-[50px] px-[18px] py-[13px] bg-coloracento hover:bg-opacity-60  text-white hover:text-colorencabezados rounded-lg justify-center items-end gap-2.5 flex shadow-[0px_2px_3px_0px_rgba(0,0,0,0.50)]"
            onClick={handleSearchButton}
          >
            <span className=" text-base font-bold font-['Lato'] leading-normal tracking-wide">Buscar</span>
          </button>
        </div>
      </div>
      <>
      {recipes?.length > 0 && <Recipes recipes = {recipes} categoryFilter={0}/> } 
      </>
    </div>
  )
}
