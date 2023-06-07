import Header from '@/components/Header/Header'
import React from 'react'
import Link from 'next/link'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import ParticleSystem from '@/components/ParticleSystem/ParticleSystem'

export default function page() {
  return (
    <div>
        <Header />
        

        <div className='flex flex-col md:flex-row justify-center items-center min-h-screen'>
            <div className='flex flex-col justify-center items-center p-8'>
                <div className='p-24 text-center z-0'>
                    <h4>Get in Touch</h4>
                    <h1 className='text-6xl'>We are <span className='text-blue-500'>available</span></h1>
                    {/* Social Icons Using FA */}
                    <div className='flex justify-center items-center space-x-4 mt-8'>
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://www.facebook.com/" target='_blank'> <FaFacebook size={30} /> </Link>
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://www.twitter.com/" target='_blank'> <FaTwitter size={30}  /> </Link>
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://www.instagram.com/" target='_blank'> <FaInstagram  size={30} /> </Link>
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://www.linkedin.com/" target='_blank'> <FaLinkedin size={30} /> </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center p-8 rounded-3xl shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm'>
                <form action="" className='flex flex-col'>
                    <input type="text" placeholder='Name' className='p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2daa52]' />
                    <input type="email" placeholder='Email' className='p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2daa52]' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='p-2 m-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#2daa52]'></textarea>
                    <button className='p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Send</button>

                </form>
            </div>
        </div>
        <ParticleSystem />
    </div>
  )
}
