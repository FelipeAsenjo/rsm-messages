import { create } from 'zustand'

interface UserStore {
    username: string,
    setUser: (user: string) => void
    clearUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
    username: '',
    setUser: (user) => set(() => ({ username: user })),
    clearUser: () => set({ username: null }),
}));
