import { useStatusStore } from "../store/appStatusStore";

class Http {
    async GET(url: string) {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        return await res.json()
        // useStatusStore.getState().addToStack({ 
        //     id: new Date().getTime(), 
        //     type: 'error', 
        //     message: 'Error getting your data, try again later.'
        // })
    }

    async POST(url: string, body: string = '') {
        const res = await fetch(url, {
            body,
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        return await res.json()
        // useStatusStore.getState().addToStack({ 
        //     id: new Date().getTime(), 
        //     type: 'error', 
        //     message: 'Error sending your data, try again later.'
        // })
    }
}

export default Http