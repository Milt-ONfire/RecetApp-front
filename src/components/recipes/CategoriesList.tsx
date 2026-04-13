import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { Category } from "@/types"
import CategoriesStore from '@/store/categoriesStore'
import { getCategories } from "@/services/categories"

export default function CategoriesList() {
  const isHome = location.href.split('/').pop() === ''
  const navigate = useNavigate()
  const { selected, setSelected } = CategoriesStore()
  const [categories, setCategories] = useState<Category[] |[]>([])

  useEffect(()=>{
    const result = getCategories()
    if(result) setCategories(result)
  }, [])

  const handleSelectedCategory = (id: number) => {
    setSelected(id)
    console.log(selected)
    if(isHome) navigate('/recipes/categories')
  }

  return (
    <div className="w-screen py-3 flex justify-center items-center flex-wrap gap-4 mx-auto px-3 lg:px-20">
      {categories?.length > 0 && categories.map(({ name, id, image }) => (
        <button 
          onClick={() => handleSelectedCategory(id)}
          className="px-3 " 
          key={id}
        >
          <img src={image} alt="categoría" className="w-24 h-24 object-cover mx-auto"/>
          <h4 className="text-primary_text_color text-center">
            {name}
          </h4>
        </button>
      ))}
    </div>
  )
}
