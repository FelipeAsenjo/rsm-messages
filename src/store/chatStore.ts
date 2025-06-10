import { create } from 'zustand'

import type { IPostMessages } from '../interfaces/Chat'

interface ChatStore {
    messages: IPostMessages[],
    addMessage: (message: IPostMessages) => void
    setMessages: (messages: IPostMessages[]) => void
    updateMessageStatus: (id: number, status: IPostMessages['status']) => void
    clearMessages: () => void
}

export const useChatStore = create<ChatStore>((set) => ({
    messages: [],
    addMessage: (message) => set((state) => ({ messages: [message, ...state.messages] })),
    setMessages: (bulkMessages: IPostMessages[]) => set(() => ({ messages: bulkMessages })),
    updateMessageStatus: (id: number, status: IPostMessages['status']) => set(state => ({
        messages: state.messages.map(message => message.id === id ? { ...message, status } : message)
    }))
    ,
    clearMessages: () => set({ messages: [] }),
  }));
