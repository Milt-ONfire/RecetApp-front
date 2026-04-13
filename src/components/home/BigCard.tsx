import Button from "../Button";

export default function BigCard() {
  return (
    <div className="flex flex-col-reverse sm:flex-row mx-10 lg:mx-40 shadow-custom bg-secondary50">
      <img src="/assets/bigcard-image.png" alt="bigcard image" className="size-[280px] lg:size-[350px] min-[1300px]:size-[500px] mx-auto" />
      <div className="flex flex-col justify-center items-center sm:items-start gap-4 lg:gap-6 px-8 lg:px-12">
        <h2 className="font-extrabold text-4xl lg:text-5xl text-head_text">Crea una receta</h2>
        <p className="text-subtitle_text text-center sm:text-left">
          Descubre lo fácil que es crear y compartir tus propias recetas. 
          Inspira a otros con tus sabores, guarda tus platos favoritos y 
          convierte cada idea en una experiencia deliciosa dentro de la app.
        </p>
        <Button type="filled" className="bg-primary" onClick={() => {}}>
          Hacer receta
        </Button>
      </div>
    </div>
  )
}
