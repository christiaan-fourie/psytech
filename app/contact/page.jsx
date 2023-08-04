import React from 'react'
import Link from 'next/link'

import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import ParticleSystem from '@/components/ParticleSystem/ParticleSystem'

export default function page() {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-center items-center min-h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <div className=' text-center z-0'>
                    <h4>Get in Touch</h4>
                    <h1 className='text-6xl'>We are <span className='text-blue-500'>available</span></h1>
                    {/* Social Icons Using FA */}
                    <div className='flex justify-center items-center space-x-4 mt-8'>
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://www.facebook.com/psytechstudio" target='_blank'> <FaFacebook size={30} /> </Link>
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://www.linkedin.com/" target='_blank'> <FaLinkedin size={30} /> </Link>
                        {/* Whatsapp */}
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://wa.me/0718737005" target='_blank'> <FaWhatsapp size={30} /> </Link>
                        <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://github.com/PsytechStudio" target='_blank'> <FaGithub size={30} /> </Link>
                    </div>
                </div>
            </div>            
        </div>
        <div className='flex flex-col md:flex-row py-24 items-center justify-center gap-6'>
            <div className='text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]'>Subscribe</div>
            <div className='flex flex-col md:flex-row items-center gap-4'>
            <input className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4 w-[40vw]' placeholder='Email Address' />
            <button className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Subscribe</button>
            </div>
        </div>   
        <ParticleSystem />
    </div>
  )
}
