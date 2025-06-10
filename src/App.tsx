import { useEffect } from "react";
import RsmChatService from "./services/rsmChatService";
import { useChatStore } from "./store/chatStore";

import MessagesForm from "./components/MessagesForm";
import Header from "./components/Header";

import IndexedDB from './services/indexedDB';
const idxDB = new IndexedDB()

const chatService = new RsmChatService()
const commonMsgStyles = 'flex p-2 w-fit rounded-md text-black'

function App() {
  const { messages, setMessages } = useChatStore(state => state)

  useEffect(() => {
    const fetchHealth = async () => {
      const data = await chatService.mockGetHealth(true)
      console.log('data', data)
    }

    const persistanceMessages = async () => {
      const storedMessages = await idxDB.getAllMessages()

      setMessages(storedMessages)
    }

    persistanceMessages()
    fetchHealth()
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center h-dvh relative">
        <Header />
        <main className="flex flex-col self-center h-full w-full max-w-[768px] p-4 text-text">

          <section className="flex-1 flex flex-col-reverse">
            { messages.map(msg => (
              <div key={ msg.id } className='flex flex-col-reverse my-1 overflow-y-auto'>
                <p 
                  className={msg.sender !== 'Felipe' ? 
                    `${commonMsgStyles} bg-primary-light` : 
                    `${commonMsgStyles} self-end bg-secondary-light`
                }>
                  { msg.message }
                </p>
              </div>
            ))}
          </section>

          <MessagesForm />
        </main>
      </div>
    </>
  )
}

export default App
