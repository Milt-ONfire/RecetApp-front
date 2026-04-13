
const favorites = [
  {
    id: 1,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-1.png'
  },
  {
    id: 2,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-2.png'
  },
  {
    id: 3,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-3.png'
  },
  {
    id: 4,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-4.png'
  }
]

export default function Favorites() {
  return (
    <div className="flex self-center mx-10 lg:mx-40">
      <div className="flex flex-col">
        <h3 className="hidden lg:block font-semibold text-4xl text-head_text">Nuestras recetas favoritas</h3>
        <div className="flex flex-wrap justify-evenly gap-1">
          {favorites?.map(({ id, name, description, image }) => (
            <div className="px-1.5 max-w-[300px]" key={id}>
              <img className="size-[280px] rounded-full object-cover mx-auto" src={image} />
              <div className="flex flex-col items-center gap-7 px-2 py-7">
                <div className="flex flex-col gap-[15px]">
                  <span className="font-semibold text-[22px] leading-[32px] text-center text-[#4d4d4d]">
                    {name}
                  </span>
                  <span className="font-normal text-base text-center text-[#637381]">
                    {description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
