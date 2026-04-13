import { star } from "@/assets";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="inline-flex gap-2.5">
      {Array.from({ length: rating }, (_, i) => (
        <img key={i} src={star} alt="rating" />
      ))}
    </div>
  )
}

export default Stars;
