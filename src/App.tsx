
import MessagesForm from "./components/MessagesForm";

function App() {


  return (
    <>
      <div className="flex flex-col justify-center h-dvh">
        <header className="flex justify-center bg-primary p-2">
          <div className="flex flex-row gap-2 w-fit bg-white text-text text-center rounded-full p-2">
            <div className="self-center w-4 h-4 rounded-full bg-secondary"></div>
            <h1>RSM Chat</h1>
          </div>
        </header>
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
