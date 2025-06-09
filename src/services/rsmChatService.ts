import Http from "../utils/http"
import type { IPostMessages, IMessagesResponse, IConnectionTest, IGetHealth } from "../interfaces/Chat"

const baseRsmUrl = import.meta.env.VITE_RSM_API_URL
const APIKey = import.meta.env.VITE_API_KEY

class RsmChat {
    private http: Http

    constructor() {
        this.http = new Http()
    }

    getHealth() {
        return this.http.GET(baseRsmUrl + '/api/health')
    }

    connectionTest() {
        return this.http.GET(baseRsmUrl + '/api/webhook' + `?code=${APIKey}`)
    }

    postMessages(body: IPostMessages) {
        return this.http.POST(baseRsmUrl + '/api/webhook' + `?code=${APIKey}`, JSON.stringify(body))
    }

    async mockPostMessages(success: boolean, sender: string, message: string): Promise<IMessagesResponse> {
        return {
            status: success ? 'success': 'error',
            message,
            timestamp: new Date().toISOString(),
            received_from: sender,
            received_message: message,
            response: `Hello ${sender}! Your message '${message}' has been processed.`,
            processing_info: {
                function_name: 'WebbhookHandler',
                method: 'POST',
                message_length: message.length,
            }
        }
    }

    async mockConnectionTest(success: boolean): Promise<IConnectionTest> {
        return {
            "status": success ? "success" : "error",
            "message": success ? "Webhook is running and ready to receive messages": "Please try again later",
            "timestamp": new Date().toISOString(),
            "endpoint": "POST to this URL to send messages"
        }
    }

    async mockGetHealth(success: boolean): Promise<IGetHealth> {
        return {
            "status": success ? "healthy" : "not-healthy",
            "message": success ? "Function App is running" : "Function App is NOT running",
            "timestamp": new Date().toISOString(),
            "version": "1.0.0"
          }
    }
}

export default RsmChat