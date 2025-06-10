import { useEffect } from 'react';
import { useStatusStore } from '../store/appStatusStore';
import RsmChat from '../services/rsmChatService';

const chatService = new RsmChat()

const useHealthPolling = (interval = 5000) => {
  const { setHealth } = useStatusStore(state => state);

  useEffect(() => {
    let isMounted = true;

    const fetchStatus = async () => {
      try {
        const data = await chatService.getHealth();

        if (isMounted) setHealth(data);
      } catch (err) {
        if(isMounted) setHealth({ 
          status: 'not-healthy', 
          message: 'Fail to fetch health status' , 
          timestamp: String(new Date().getTime()) , 
          version: "1.0.0" 
        })

        console.log('errors', err)
      }
    };

    fetchStatus(); 
    const id = setInterval(fetchStatus, interval);

    return () => {
      isMounted = false;
      clearInterval(id);
    };
  }, [interval, setHealth]);
};

export default useHealthPolling;
