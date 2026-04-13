import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { Outlet } from 'react-router-dom';

export default function Recipes() {
  return (
    <div className="w-screen flex flex-col items-center justify-start bg-[#EEE] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
