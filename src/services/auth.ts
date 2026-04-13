// import axios from "axios";
import { Login} from "@/types";
import useAuthStore from "@/store/authStore";
import api from "./axios";

const REGISTER_URL = import.meta.env.VITE_API_URL + import.meta.env.VITE_REGISTER
const UPDATER = import.meta.env.VITE_API_URL + import.meta.env.VITE_UPDATER

export const login = async (user: Login) => {

  try {
    
    const res = await api.post("/UserAccount/Login", user);
    const tokenResp = res.data.accesToken; // 👈 AJUSTA SI SE LLAMA DISTINTO
    useAuthStore.getState().setToken(tokenResp);
    console.log("LOGIN RESPONSE COMPLETO:", res.data);
    return res
  } catch (error) {
    throw await error;
  }
};

export const register = async (user: FormData) => {
  try {
    const res = await api.post(REGISTER_URL, user);
    return res;
  } catch(error) {
    console.log(error);
    throw await error;
  }
}

export const getCurrentUser = async () => {
  try {
    const res = await api.get("/Usuarios/buscarUsuarioActual");
    return res;
  } catch (error: any) {
    throw await error.response?.data || await error;
  }
}

export const updateCurrentUser = async (user: FormData) => {
  try {
    const res = await api.patch(UPDATER, user);
    return res;
  } catch (error) {
    console.log(error);
    throw await error;   
  }
}
