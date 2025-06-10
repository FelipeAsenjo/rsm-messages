import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

export default function RegisterPage() {
    const navigate = useNavigate()
    const { setUser } = useUserStore(state => state)
    const [username, setUsername] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)     
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!username.length) return

        setUser(username)

        navigate('/')
    }

    return (
        <main className='flex justify-center items-center max-w-[1200px] h-dvh'>
            <form className='flex flex-col items-center w-80 h-fit p-4 shadow-md shadow-primary-light rounded-lg' onSubmit={(e) => handleSubmit(e)}>
                <input 
                    className='my-2 p-2 rounded-md border border-primary'
                    type="text" 
                    name="username" 
                    placeholder='Username (sender)' 
                    onChange={(e) => handleChange(e)}
                    required
                />
                <button className='bg-primary text-white w-fit p-2 rounded-md' type='submit'>Enter</button>
            </form>
        </main>
    )
}
