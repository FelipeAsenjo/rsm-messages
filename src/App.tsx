import { useEffect } from "react";
import RsmChatService from "./services/rsmChatService";

import MessagesForm from "./components/MessagesForm";
import Header from "./components/Header";

const chatService = new RsmChatService()

function App() {

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
            adios mundo
          </section>

          <MessagesForm />
        </main>
      </div>
    </>
  )
}

export default App
