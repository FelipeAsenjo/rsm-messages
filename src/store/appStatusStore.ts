import { create } from 'zustand'
import type { IGetHealth } from '../interfaces/Chat'

interface IToastMessages {
    id: number
    type: 'success' | 'error'
    message: string
}

interface IStatusStore {
    health: IGetHealth | null,
    toastStack: IToastMessages[],
    setHealth: (health: IGetHealth) => void,
    addToStack: (toastMessage: IToastMessages) => void,
    removeFromStack: (id: IToastMessages['id']) => void,
    clearStack: () => void
}

export const useStatusStore = create<IStatusStore>((set) => ({
    health: null,
    toastStack: [{ id: 123, type: 'error', message: 'esto es un error'}, { id: 124, type: 'success', message: 'esto es un exito'}],
    setHealth: (health: IGetHealth) => set(() => ({ health })),
    addToStack: (toastMessage: IToastMessages) => set((state) => ({ toastStack: [...state.toastStack, toastMessage]})),
    removeFromStack: (id: IToastMessages['id']) => set((state) => ({ toastStack: state.toastStack.filter(toast => toast.id !== id)})),
    clearStack: () => set(() => ({ toastStack: []}))
}));
