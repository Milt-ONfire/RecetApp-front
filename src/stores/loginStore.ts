import { create } from "zustand";

interface User{
    emailOruserName: string;
    password: string;
}

interface login{
    user: User| null,

    login : (user:User) => void;
}

export const loginStore = create<login>()((set) => ({
    user : null,

    login: (newUser:User) => set({user : newUser})   
}))