import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import type { IPostMessages } from '../interfaces/Chat';

import { useChatStore } from '../store/chatStore';
import { useStatusStore } from '../store/appStatusStore';
import RsmChat from '../services/rsmChatService';
const rsmChat = new RsmChat()

import IndexedDB from '../services/indexedDB';
const idxDB = new IndexedDB()

const initialFormValues: IPostMessages = {
  status: null,
  sender: 'Felipe', //! REPLACE FOR INDEXED DB USER
  message: '',
  timestamp: null
}

const MessagesForm = React.memo(() => {
  const { addMessage, updateMessageStatus } = useChatStore((state) => state)
  const { addToStack } = useStatusStore(state => state)
  const [formValues, setFormValues] = useState<IPostMessages>(initialFormValues)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    }) 
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const messageToStore = {
      ...formValues,
      status: 'sent' as IPostMessages['status'],
      timestamp: new Date().toISOString()
    }

    addMessage(messageToStore)
    const messageId = await idxDB.saveMessage(messageToStore)

    const serverValues = { ...formValues }
    setFormValues(initialFormValues)

    try {
      const res = await rsmChat.postMessages(serverValues)

      setLoading(false)

      const messageFromServer = {
        sender: "bot",
        message: res.response,
        status: res.status,
        timestamp: res.timestamp
      }

      addMessage(messageFromServer)
      updateMessageStatus(Number(messageId), 'success')
      await idxDB.saveMessage(messageFromServer)
    } catch(err) {
      addToStack({ 
          id: new Date().getTime(), 
          type: 'error', 
          message: 'Error submiting your message, try again later.'
      })

      updateMessageStatus(Number(messageId), 'error')
      await idxDB.updateMessageStatus(Number(messageId), 'error')

      console.error(err)
    }
  }

  return (
    <form className="flex self-end w-full gap-2" onSubmit={loading ? () => {} : (e) => handleSubmit(e)}>
        <input 
          type="text" 
          className="rounded-lg p-2 shadow-md shadow-primary flex-1" 
          name="message" 
          placeholder="Type a message..." 
          disabled={ loading }
          value={ formValues.message }
          onChange={(e) => handleInputChange(e)} 
        />
        <button 
          type="submit" 
          className="bg-primary rounded-full p-2 hover:scale-105 ease-in-out duration-200 disabled:bg-text"
          disabled={ !formValues.message.length }
        >
          { loading ?
            <div className="animate-spin rounded-full h-6 w-6 border-t-8 border-blue-500 border-solid bg-primary-light"></div> : 
            <IoSend size={28} color="white" />                
          }
        </button>
    </form>
  )
})

export default MessagesForm