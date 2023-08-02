import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' font-sans font-light uppercase'>
        <div className='border-t border-neutral-800 p-12 flex flex-col md:flex-row justify-between'>
            <div className='flex items-center'>
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
            </div>
            <div>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Company</li>
                    <li className='text-sm my-1'>Home</li>
                    <li className='text-sm my-1'>About Us</li>
                    <li className='text-sm my-1'>Careers</li>
                    <li className='text-sm my-1'>Investment Oppertunities</li>
                    <li className='text-sm my-1'>Partners</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Solutions</li>
                    <li className='text-sm my-1'>Packages</li>
                    <li className='text-sm my-1'>Custom Software</li>
                    <li className='text-sm my-1'>Security Services</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='mb-4 text-lg border-b text-green-500 border-green-500'>Legal</li>
                    <li className='text-sm my-1'>Terms & Conditions</li>
                    <li className='text-sm my-1'>Privacy Policy</li>
                    <li className='text-sm my-1'>FAQ</li>
                </ul>
            </div>            
        </div>
        <div className='text-center'>
            <h2 className='text-xl font-bold py-6'>Social</h2>
                <ul className='flex gap-2 justify-center'>
                    {/* Social */}                    
                    <FaGithub size={25} />
                    <FaFacebook size={25} />
                    <FaWhatsapp size={25} />
                </ul>
        </div>
        {/* Copywright */}
        <div className='flex capitalize items-center justify-between py-6 px-12 border-t border-neutral-800 mt-12'>
            <p className='text-sm font-light'>© 2021 Psytech Studio. All Rights Reserved. | Designed in Cape Town</p>
            <p>Crafted By Psytech Studio </p>
        </div>
    </div>    
  )
}

export default Footer
