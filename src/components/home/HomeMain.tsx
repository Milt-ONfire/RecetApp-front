import Banner from "./Banner";
import CategoriesList from "../recipes/CategoriesList";
import BigCard from "./BigCard";
import Favorites from "./Favorites";

export default function HomeMain() {

  return (
    <div className="flex flex-col gap-10 pb-8 bg-background">
      <Banner />
      <CategoriesList />
      <BigCard />
      <Favorites />
    </div>
  )
}
