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
        <main className='place-content-center max-w-[1200px]'>
            <form className='border' onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder='Write your name (sender)' 
                    onChange={(e) => handleChange(e)}
                />
                <button type='submit'>Enter</button>
            </form>
        </main>
    )
}
