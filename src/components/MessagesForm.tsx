import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";

const MessagesForm = React.memo(() => {
  const [formValues, setFormValues] = useState({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    }) 
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('formvalues',formValues)
  }

  return (
    <form className="flex self-end w-full gap-2" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className="rounded-lg p-2 shadow-md shadow-primary flex-1" name="message" placeholder="Type a message..." onChange={(e) => handleInputChange(e)} />
        <button type="submit" className="bg-primary rounded-full p-2 hover:scale-105 ease-in-out duration-200">
            <IoSend size={28} color="white" />                
        </button>
    </form>
  )
})

export default MessagesForm