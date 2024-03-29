'use client'

import React from 'react'
import Link from 'next/link'
// import usestate
import { useState, useEffect } from 'react';

// Import Loader
import Loader from '@/components/Loader'

const Login = () => {

    // State
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    // useEffect
    useEffect(() => {
        // If user is logged in, redirect to dashboard
        if (localStorage.getItem('token')) {
            window.location.href = '/dashboard'
        }
    }, [])

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault()

        // Get the form data
        const username = e.target.username.value
        const password = e.target.password.value

        // If username or password is empty, return
        if (!username || !password) {
            setMessage('Please fill in all fields')
            return
        }

        // Set loading to true
        setLoading(true)

        // Make a request to the server
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        // Get the response
        const data = await res.json()

        // Set loading to false
        setLoading(false)

        // If there is an error, set the message
        if (data.error) {
            setMessage(data.message)
            return
        }

        // If everything is ok, set the token and redirect to dashboard
        localStorage.setItem('token', data.token)
        window.location.href = '/dashboard'
    }




    
    return (
        <div className='bg-neutral-900 h-screen '>
          {loading && <Loader />}
          
            {/* A mini Form that adds users */}
            <div className='md:mx-24 lg:mx-48 h-full p-12 rounded-xl'>
              <form onSubmit={handleLogin} className='flex flex-col h-full justify-center'>
                
                      <h1 className="text-6xl text-center my-6">Login</h1>
                      <label htmlFor="username">Username Or Email</label><br />
                      <input type="text" name="username" className={message === 'User does not exist' ? 'rounded-lg mb-2 p-4 w-full bg-red-400 shadow-red-400 shadow-sm': 'rounded-lg mb-2 p-4 w-full' }/><br />
                      <label htmlFor="password">Password</label><br />
                      {/* If message is User does not exist or Invalid Password For Username turn input red */}
                      <input type="password" name="password" className={message === 'User does not exist' || message === 'Invalid Password' ? 'rounded-lg mb-2 p-4 w-full bg-red-400 shadow-red-400 shadow-sm': 'rounded-lg mb-2 p-4 w-full' }/><br />

                      {/* If message */}
                      {message && <p className=''>{message}</p>}
                      <input type="submit" value="Login" className='bg-teal-700 px-12 py-4 mt-4 rounded-xl w-full' />
                      {/* Don't Have an account sign up now */}
                      <div className='flex justify-center gap-4 mt-4'>
                        <p>Don&apos;t have an account?</p>
                        <Link href='/signup' className='text-teal-700'>Sign Up</Link>
                      </div>
              </form>
              {/* Google and Github Logins */}
              {/* <div className='flex justify-center gap-4 mt-4'>
                <button className='border border-red-500 text-red-500 p-4 mt-4 rounded-xl flex items-center gap-2'> <ImGoogle size={25} /></button>
                <button className='border border-gray-700 text-gray-700 p-4 mt-4 rounded-xl flex items-center gap-2'> <ImGithub size={25} /></button>
              </div> */}
              
            </div>

        </div>
      )
  }

export default Login
