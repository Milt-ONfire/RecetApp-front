import { useNavigate } from "react-router-dom";
import Button from "../Button";



export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-[280px] relative">
      <img src="/assets/banner-image.png" alt="banner" className="w-full h-full object-cover" />
      <div className="h-full absolute z-20 top-0 flex flex-col justify-center items-start px-10 lg:px-[100px] max-w-[800px]">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-6xl font-extrabold text-secondary50">¡Te ayudamos a cocinar!</h1>
          <p className="tracking-[0.50px] text-secondary50">
            Descubre recetas deliciosas con los ingredientes que tienes en casa. Selecciona tus ingredientes y encuentra ideas fáciles para preparar platos increíbles sin complicaciones.
          </p>
        </div>
        <Button type="filled" className="bg-accent" onClick={() => navigate("/recipes/personalized")}>Ingresar ingredientes</Button>
      </div>
      <div className="bg-[#4F5663] opacity-50 w-full h-full absolute top-0"></div>
    </div>
  )
}
