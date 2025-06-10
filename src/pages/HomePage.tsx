import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useChatStore } from "../store/chatStore";
import { useUserStore } from "../store/userStore";

import MessagesForm from "../components/MessagesForm";
import Header from "../components/Header";

import useHealthPolling from "../hooks/useHealthPolling";
import IndexedDB from '../services/indexedDB';
import ToastStack from "../components/ToastStack";
import MessagesDisplay from "../components/MessagesDisplay";
const idxDB = new IndexedDB()

export default function HomePage() {
    const navigate = useNavigate()
    const { setMessages } = useChatStore(state => state)
    const { username } = useUserStore(state => state)

    useHealthPolling(15000)

    useEffect(() => {
        if(!username) navigate('/register')
    }, [navigate, username])

    useEffect(() => {
        const persistanceMessages = async () => {
        const storedMessages = await idxDB.getAllMessages()
        // const storedMessages = await idxDB.clearMessages()

        setMessages(storedMessages)
        }

        persistanceMessages()
    }, [])

    return (
        <div className="flex flex-col justify-center h-screen">
            <Header />
            <main className="flex flex-col self-center h-full w-full max-w-[768px] px-4 text-text relative">
            <MessagesDisplay />
            <MessagesForm />

            <ToastStack />
            </main>
        </div> 
        )
}
