'use client'

import React from 'react'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa'

// Import Loader
import Loader from '@/components//Loader'

const Footer = () => {
    // Once something is clicked, start loading the page
    const [isLoading, setIsLoading] = useState(false)

    


  return (
    <div className='border-t flex flex-col items-center border-neutral-800 font-sans font-light capitalize'>
        { isLoading && <Loader /> }
        <div className='flex items-center border-b-2 py-12 border-green-500'>
                        <Image
                            src="/logo.png"
                            alt="Psytech Logo"
                            className='rotate-90 hover:rotate-180 transition-all duration-700'
                            width={50}
                            height={50}
                            priority
                        />
                        <Link href='/' className="pl-4 tracking-tighter text-3xl font-extrabold hover:cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]">
                            Psytech<span className='font-extralight'>Studio</span>
                        </Link>
                        <div className=' pl-12 text-center'>
                                <ul className='flex gap-2 justify-center'>
                                    {/* Social */}                    
                                    <FaGithub size={25} />
                                    <FaFacebook size={25} />
                                    <FaWhatsapp size={25} />
                                </ul>
                        </div>
        </div>
        <div className='z-40 p-12 flex flex-col md:flex-row justify-between w-2/3'>            
            <div className=''>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Company</li>
                    <Link href='/'>
                        <li className=' text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Home</li>
                    </Link>
                    <Link href='/company/about'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>About Us</li>
                    </Link>
                    <Link href='/company/careers'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Careers</li>
                    </Link>
                    <Link href='/company/investor-oppertunities'>
                        <li className='relative text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Investment Oppertunities</li>
                    </Link>
                    <Link href='/company/partners'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Partners</li>
                    </Link>

                </ul>
            </div>
            <div>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Solutions</li>
                    <Link href='/solutions/packages'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Packages</li>
                    </Link>
                    <Link href='/solutions/custom-software'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Custom Software</li>
                    </Link>
                    <Link href='/solutions/security'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Security Services</li>
                    </Link>                    
                </ul>
            </div>
            <div>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Legal</li>
                    <Link href='/terms-and-conditions'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Terms & Conditions </li>
                    </Link>
                    <Link href='/privacy-policy'>
                        <li className='text-sm my-1 hover:text-green-500 hover:border-l  hover:pl-2 border-green-500 transition-all'>Privacy Policy</li>
                    </Link>                    
                </ul>
            </div>            
        </div>
        {/* Copywright */}
        <div className='flex flex-col w-full md:flex-row glassLight capitalize items-center justify-between py-6 pl-12 pr-20 border-t border-neutral-800 mt-12 bg-opacity-50'>
            <p className='text-sm text-center font-light'>© 2021 Psytech Studio. All Rights Reserved. | Designed in Cape Town</p>
            <p>Crafted By Psytech Studio </p>
        </div>
    </div>    
  )
}

export default Footer
