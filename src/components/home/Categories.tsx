

type Category = { 
  name: string, 
  id: number 
}

type Props = { 
  categories: Category[], 
  setFilter: (categoryId: number) => void
}

export default function Categories({ categories, setFilter }: Props) {

  return (
    <div className="w-screen justify-center items-center flex">
      <div className="max-w-[1000px] justify-center items-start flex flex-row flex-wrap">
        {
          categories?.length > 0 && categories.map(({ name, id }) => (
            <button 
              onClick={() => setFilter(id)}
              className="min-h-[173px] flex flex-col items-center px-[7px]" 
              key={id}
            >
              <div className="size-[130px] bg-[#DEDEDE] rounded-full"></div>
              <span className="max-w-[130px] text-[#5A5858] text-[22px] font-['Lato'] font-semibold leading-8 text-wrap text-center">
                {name}
              </span>
            </button>
          ))
        }
      </div>
    </div>
  )
}
