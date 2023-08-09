import React from 'react'
import Link from 'next/link'

import Form from '@/components/ContactForm/ContactForm'

import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import ParticleSystem from '@/components/ParticleSystem/ParticleSystem'

export default function page() {
  return (
    <section>
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center min-h-screen pt-24 md:pt-0'>
            <div className='flex flex-row justify-end items-center p-12'>
                <div className=' text-center'>
                    <h4>Lets Connect</h4>
                    <h1 className='text-6xl'>We are <span className='text-green-500'>available</span></h1>
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

            <Form />

        </div>
        <ParticleSystem />
    </section>
  )
}
