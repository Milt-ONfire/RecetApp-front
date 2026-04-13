import { starYellow, starGray } from "@/assets";
import { useState } from "react";

export function Stars({ rating }: { rating: number }) {
  // return (
  //   <div className="inline-flex gap-2.5">
  //     {Array.from({ length: rating }, (_, i) => (
  //       <img key={i} src={starYellow} alt="rating" className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" />
  //     ))}
  //     {Array.from({ length: 5 - rating }, (_, i) => (
  //       <img key={i} src={starGray} alt="rating" className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" />
  //     ))}
  //   </div>
  // )

  const [hover, setHover] = useState(0);

  return (
    <div className="inline-flex gap-2.5">

      {Array.from({ length: 5 }, (_, i) => {

        const value = i + 1;

        return (
          <img
            key={i}
            src={value <= (hover || rating) ? starYellow : starGray}
            alt="rating"
            className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] cursor-pointer"
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}

    </div>
  );
}
