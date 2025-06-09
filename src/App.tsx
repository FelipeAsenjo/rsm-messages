
import MessagesForm from "./components/MessagesForm";

function App() {


  return (
    <>
      <div className="flex flex-col justify-center h-dvh">
        <header className="bg-primary p-4">
          hola mundo
        </header>
        <main className="flex flex-col h-full w-full max-w-[768px] p-4">

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
