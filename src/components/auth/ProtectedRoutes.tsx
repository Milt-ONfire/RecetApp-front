import useAuthStore from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
  const { token } = useAuthStore.getState();
  const isLoggedIn = token !== "";

  return isLoggedIn ? <Outlet /> : <Outlet />
  

} 
