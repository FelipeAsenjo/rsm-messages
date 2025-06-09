
class Http {
    async GET(url: string) {
        try {
            const res = await fetch(url)
            const { data } = await res.json()
            
            return data
        } catch(err) {
            //! TODO: HANDLE ERROR
            console.log('error', err)
        }
    }

    async POST(url: string, body: string = '') {
        try {
            const data = await fetch(url, {
                body,
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })

            return await data.json()
        } catch(err) {
            //! TODO: HANDLE ERROR
            console.log('error', err)
        }
    }
}

export default Http