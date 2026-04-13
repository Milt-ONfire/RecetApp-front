export function Steps({ steps }: { steps: string[] }) {
  return (
    <div>
      <h3 className="text-head_text text-2xl lg:text-4xl font-extrabold mb-9">Preparación paso a paso</h3>
      {steps.map((step, i) => (
        <div key={i} className="mb-3 flex items-center ">
          <h4 className="text-body_text text-lg font-bold whitespace-nowrap">Paso {i + 1}:&nbsp;&nbsp;</h4>
          <p className="text-body_text text-md ">{step}</p>
        </div>
      ))}
    </div>
  );
}
