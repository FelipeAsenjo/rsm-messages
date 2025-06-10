import { useState, useEffect } from "react"
import { useStatusStore } from "../store/appStatusStore"

export default function Header() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const { health } = useStatusStore(state => state)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); 

  return (
    <>
      <header className="flex justify-center bg-primary p-2">
          <div className="flex flex-row gap-2 w-fit bg-white text-text text-center rounded-full p-2">
            <div className={`self-center w-4 h-4 rounded-full ${health?.status === 'healthy' ? 'bg-secondary' : 'bg-error'}`}></div>
            <h1>RSM Chat</h1>
          </div>
      </header>
      { !isOnline && 
        <div className="bg-error text-center text-white">Offline</div>
      }
    </>
  )
}
