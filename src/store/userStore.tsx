import { User } from "@/models";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore extends User {
  setUser: (user: User) => void;
  clearUser: () => void;
}

const initialState: User = {
  description: null,
  img: "",
  user: {
    email: "",
    username: ""
  }
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user: User) => set(user),
      clearUser: () => set(initialState)
    }),
    {
      name: "user",
    }
  )
);

export default useUserStore;
