import { create } from 'zustand'

interface UserStore {
    username: string | null,
    setUser: (user: string) => void
    clearUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
    username: null,
    setUser: (user) => set(() => ({ username: user })),
    clearUser: () => set({ username: null }),
}));
