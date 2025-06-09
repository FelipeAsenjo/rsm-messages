import { openDB } from 'idb'
import type { ISavedMessage } from '../interfaces/Chat';

const dbPromise = openDB('chat-db', 1, {
    upgrade(db) {
        db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
    },
}); 

class IndexedDB {
    //! HANDLE ERRORS

    async saveMessage(messageObj: ISavedMessage) {
        const db = await dbPromise;
        await db.add('messages', messageObj);
    }

    async getAllMessages(): Promise<ISavedMessage[]> {
        const db = await dbPromise;
        return await db.getAll('messages');
    }

    async clearMessages() {
        const db = await dbPromise;
        return await db.clear('messages');
    }
}

export default IndexedDB