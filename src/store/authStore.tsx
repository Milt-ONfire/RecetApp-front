import { create } from "zustand";
import { persist } from "zustand/middleware";
import useUserStore from "./userStore";


interface AuthStore {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: "",
      setToken: (token: string) => set({token}),
      logout: () => {
        const { clearUser } = useUserStore.getState();
        clearUser();
        set({
          token: ""
        })
      }
    }),
    {
      name: "auth"
    }
  )
)

export default useAuthStore;
