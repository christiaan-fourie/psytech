import Header from '@/components/Header/Header'
import React from 'react'

export default function page() {
  return (
    <div>
        <Header />
        <div className='text-left p-24 md:text-center mt-[20vh] z-0 min-h-screen'>
            <h4>Get in Touch</h4>
            <h1 className='text-6xl'>We are <span className='text-blue-500'>available</span></h1>
        </div>
    </div>
  )
}
