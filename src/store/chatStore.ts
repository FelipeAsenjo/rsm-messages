import { create } from 'zustand'

import type { IPostMessages } from '../interfaces/Chat'

interface ChatStore {
    messages: IPostMessages[],
    addMessage: (message: IPostMessages) => void
    setMessages: (messages: IPostMessages[]) => void
    clearMessages: () => void
}

export const useChatStore = create<ChatStore>((set) => ({
    messages: [],
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    setMessages: (bulkMessages: IPostMessages[]) => set(() => ({ messages: bulkMessages })),
    clearMessages: () => set({ messages: [] }),
  }));
