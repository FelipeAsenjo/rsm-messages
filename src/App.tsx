import { useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useChatStore } from "./store/chatStore";
import { useStatusStore } from "./store/appStatusStore";

import MessagesForm from "./components/MessagesForm";
import Header from "./components/Header";

import useHealthPolling from "./hooks/useHealthPolling";
import IndexedDB from './services/indexedDB';
const idxDB = new IndexedDB()

const commonMsgStyles = 'flex p-2 w-fit rounded-md text-black'

function App() {
  const { messages, setMessages } = useChatStore(state => state)
  const { toastStack, removeFromStack } = useStatusStore(state => state)

  useHealthPolling(15000)

  useEffect(() => {
    const persistanceMessages = async () => {
      const storedMessages = await idxDB.getAllMessages()
      // const storedMessages = await idxDB.clearMessages()

      setMessages(storedMessages)
    }

    persistanceMessages()
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <Header />
        <main className="flex flex-col self-center h-full w-full max-w-[768px] px-4 text-text relative">

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

          <section className="absolute top-2 right-2 flex flex-col gap-2">
            { !!toastStack && toastStack.map(toast => (
              <div key={toast.id} className={`flex gap-1 text-white p-2 rounded-lg ${toast.type === 'error' ? 'bg-error' : 'bg-secondary'}`}>
                <button className="hover:scale-105 ease-in-out duration-200" onClick={() => removeFromStack(toast.id)}>
                  <ImCancelCircle size={24} />
                </button>
                <p>{ toast.message }</p>
              </div>
            )) }
          </section>
        </main>
      </div>
    </>
  )
}

export default App
