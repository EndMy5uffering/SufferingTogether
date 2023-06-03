import { create } from "zustand";

type AuthStore = {
    token: string | undefined
    isAuthed: boolean
}


const useAuthStore = create<AuthStore>(() => (
    {
        token: undefined,
        isAuthed: false,
    }
))