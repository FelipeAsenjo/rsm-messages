import { useEffect } from "react";
import RsmChatService from "./services/rsmChatService";
import { useChatStore } from "./store/chatStore";

import MessagesForm from "./components/MessagesForm";
import Header from "./components/Header";

const chatService = new RsmChatService()

function App() {
  const { messages } = useChatStore(state => state)

  useEffect(() => {
    const fetchHealth = async () => {
      const data = await chatService.mockGetHealth(true)
      console.log('data', data)
    }

    fetchHealth()
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center h-dvh">
        <Header />
        <main className="flex flex-col self-center h-full w-full max-w-[768px] p-4 text-text">

          <section className="flex-1">
            { messages.map(msg => (
              <div key={ msg.id }>
                <p>{ msg.message }</p>
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
