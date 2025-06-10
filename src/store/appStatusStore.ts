import { create } from 'zustand'
import type { IGetHealth } from '../interfaces/Chat'

interface StatusStore {
    health: IGetHealth | null,
    setHealth: (health: IGetHealth) => void
}

export const useStatusStore = create<StatusStore>((set) => ({
    health: null,
    setHealth: (health: IGetHealth) => set(() => ({ health }))
}));
