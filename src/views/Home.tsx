import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-between bg-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
