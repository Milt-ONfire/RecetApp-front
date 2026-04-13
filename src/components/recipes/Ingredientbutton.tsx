type Props = {
  id: number,
  name: string,
  handleItemListClick?: undefined | ((id: number) => void),
  handleRemoveIngredient?: undefined | ((id: number) => void)
}

export default function Ingredientbutton({ id, name, handleItemListClick, handleRemoveIngredient }: Props) {
  return (
  //   <button
  //     key={id}
  //     onClick={() => handleItemListClick && handleItemListClick(id)}
  //     className="px-1 bg-pink-900/10 rounded-md border-2 border-primary70 justify-between items-center gap-1 flex relative"
  //   >
  //     <span className="text-[#111928] text-xs font-['Lato'] leading-normal tracking-wide">{name}</span>
  //     {
  //       handleRemoveIngredient &&
  //       <button
  //         className="text-primary70 text-xs text-right relative"
  //         onClick={() => handleRemoveIngredient(id)}
  //       >
  //         <i className="fa fa-sharp-duotone fa-thin fa-xmark hover:text-lg hover:font-semibold "></i>
  //       </button>
  //     }
  //   </button>
  // )
  <button
  key={id}
  onClick={() => handleItemListClick && handleItemListClick(id)}
  className="px-1 bg-pink-900/10 rounded-md border-2 border-primary70 flex justify-between items-center gap-1 relative"
>
  <span className="text-[#111928] text-xs">{name}</span>

  {
    handleRemoveIngredient &&
    <span
      className="text-primary70 text-xs cursor-pointer"
      onClick={(e) => {
        e.stopPropagation(); 
        handleRemoveIngredient(id);
      }}
    >
      <i className="fa fa-xmark hover:text-lg"></i>
    </span>
  }
</button>)
}
