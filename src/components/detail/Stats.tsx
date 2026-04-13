import { IStats } from "@/models";

export function Stats({ stats }: { stats: IStats[]}) {
  return (
    <div className="flex">
      {stats.map((stat, index) => (
        <div key={index} className="border-e-[1px] border-black last:border-0 text-center px-2 lg:px-5 first:ps-0 last:pe-0">
          <h5 className="text-xl lg:text-5xl leading-[40px] text-accent70">{stat.value}</h5>
          <p className="text-sm lg:text-md text-accent70">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}
