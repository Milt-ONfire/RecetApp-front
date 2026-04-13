interface targetProps {
    imgSrc?: string;
    recetName?: string;
    recetText?: string;
}

export const RecetTarget = (props: targetProps): JSX.Element => {

    const URL = import.meta.env.VITE_SERVER_URL

    return (
        <article className="rounded-tl-roundTarget min-w-[250px] mx-auto min-h-[460px]">
            <img className="rounded-full h-1/4 mx-auto relative bottom-[-10%] bg-white shadow-custom" src={URL+props.imgSrc}></img>
            <div className="px-7 shadow-custom bg-colorbgtarjetas h-96 max-w-[300px] flex-col rounded-br-roundTarget rounded-tl-roundTarget justify-between text-center">
                <h2 className="text-xl h-1/3 text-colorencabezados flex items-end justify-center mb-4 font-bold">{props.recetName}</h2>
                <p className="text-sm h-1/3 text-justify text-pretty text-[#637381]">{props.recetText && props.recetText.length > 250? (<> {props.recetText.slice(0 , 180)} ... <br />
                 <span className="text-accent text-base font-semibold cursor-pointer">ver más</span></>): props.recetText}
                </p>
                <button className="border-2 mb-0 border-colorremolacha text-colorremolacha font-bold rounded-full px-12 py-3 mx-auto mt-5">Ver receta</button>
            </div>
        </article>
    )
}