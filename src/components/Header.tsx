import { useStatusStore } from "../store/appStatusStore"

export default function Header() {
  const { health } = useStatusStore(state => state)

  return (
    <header className="flex justify-center bg-primary p-2">
        <div className="flex flex-row gap-2 w-fit bg-white text-text text-center rounded-full p-2">
        <div className={`self-center w-4 h-4 rounded-full ${health?.status === 'healthy' ? 'bg-secondary' : 'bg-error'}`}></div>
        <h1>RSM Chat</h1>
        </div>
    </header>
  )
}
