import { openDB } from 'idb'
import type { IPostMessages } from '../interfaces/Chat';

const dbPromise = openDB('chat-db', 1, {
    upgrade(db) {
        db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
    },
}); 

class IndexedDB {
    //! HANDLE ERRORS

    async saveMessage(messageObj: IPostMessages) {
        const db = await dbPromise;
        await db.add('messages', messageObj);
    }

    async getAllMessages(): Promise<IPostMessages[]> {
        const db = await dbPromise;
        return await db.getAll('messages');
    }

    async updateMessageStatus(id: number, status: IPostMessages['status']) {
        const db = await dbPromise;
        const msg = await db.get('messages', id);

        if (msg) {
            msg.status = status;
            await db.put('messages', msg);
        }
    }

    async clearMessages() {
        const db = await dbPromise;
        return await db.clear('messages');
    }
}

export default IndexedDB