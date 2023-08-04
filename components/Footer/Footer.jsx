'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    // Once something is clicked, start loading the page
    const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='border-t flex flex-col items-center border-neutral-800 font-sans font-light capitalize'>
        <div className='flex items-center border-b py-12 border-neutral-800'>
                        <Image
                            src="/logo.png"
                            alt="Psytech Logo"
                            className='rotate-90 hover:rotate-180 transition-all duration-700'
                            width={25}
                            height={25}
                            priority
                        />
                        <Link href='/' className="pl-4 tracking-tighter text-2xl md:3xl font-extrabold hover:cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]">
                            Psytech<span className='font-extralight'>Studio</span>
                        </Link>
                        <div className=' pl-12 text-center'>
                            <div className='flex justify-center items-center mspace-x-4'>
                                <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://www.facebook.com/psytechstudio" target='_blank'> <FaFacebook size={20} /> </Link>
                                <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://wa.me/0718737005" target='_blank'> <FaWhatsapp size={20} /> </Link>
                                <Link className='hover:bg-[#2daa52] rounded-full p-1 transition-all duration-500' href="https://github.com/PsytechStudio" target='_blank'> <FaGithub size={20} /> </Link>
                            </div>
                        </div>
        </div>
        <div className='mt-6 px-12 flex flex-col md:flex-row gap-8 w-full md:w-2/3'>
            <div className='w-full md:w-1/3 overflow-hidden'>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Company</li>
                    <Link href='/'>
                        <li className=' text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Home</li>
                    </Link>
                    <Link href='/company/about'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>About Us</li>
                    </Link>
                    <Link href='/company/careers'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Careers</li>
                    </Link>
                    <Link href='/company/investor-oppertunities'>
                        <li className='relative text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Investment Oppertunities</li>
                    </Link>
                    <Link href='/company/partners'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Partners</li>
                    </Link>

                </ul>
            </div>
            <div className='w-full md:w-1/3 overflow-hidden'>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Solutions</li>
                    <Link href='/solutions/packages'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Packages</li>
                    </Link>
                    <Link href='/solutions/custom-software'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Custom Software</li>
                    </Link>
                    <Link href='/solutions/security'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Security Services</li>
                    </Link>                    
                </ul>
            </div>
            <div className='w-full md:w-1/3 overflow-hidden'>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Legal</li>
                    <Link href='/terms-and-conditions'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Terms & Conditions </li>
                    </Link>
                    <Link href='/privacy-policy'>
                        <li className='text-sm py-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Privacy Policy</li>
                    </Link>                    
                </ul>
            </div>            
        </div>
        {/* Copywright */}
        <div className='flex flex-col w-full md:flex-row glassLight capitalize items-center justify-between py-6 pl-12 pr-20 border-t border-neutral-800 mt-12 bg-opacity-50'>
            <p className='text-sm text-center font-light'>© 2021 Psytech Studio. All Rights Reserved. | Designed in Cape Town</p>
            <p className='text-sm text-center font-light hidden md:block'>Crafted By Psytech Studio </p>
        </div>
    </div>    
  )
}

export default Footer
