import React from 'react'

import { LuSprout } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa";

const CustomSoftware = () => {
  return (
    <div>
        <div className='flex flex-col justify-center pt-24'>        
        {/* This page has options for custom software solutions? */}
            <h1 className='text-6xl mx-24 my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Custom Solutions</h1>
            <p className='font-sans mx-24 font-light text-lg'>
                At Psytech, We understand the importance of trust and transparency in the digital world. <br /> Therefore, we strive to create software solutions that are genuine, reliable, and true to our values. <br /> Resulting in a commitment to authenticity is reflected in everything we do.
                </p>
            {/* A Mini Form */}
            <div className='flex flex-col lg:flex-row gap-6 p-14 text-center'>
                <div className='bg-neutral-950 p-4 lg:w-2/5'>
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Basic</h1>
                    {/* Few Selectors in form contex */}
                    <form className='flex flex-col'>
                        <label htmlFor='typeOfSoftware'>Type of Software</label>
                        <select id='typeOfSoftware' className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>                        
                            <option value='simpleWebsite'>Simple Website</option>
                            <option value='ecommerceWebsite'>Ecommerce Website</option>
                            <option value='webApp'>Web App</option>
                            <option value='mobileApp'>Mobile App</option>
                        </select>
                        <label htmlFor='features'>Features</label>
                        <select id='features' className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>
                            <option value='simpleWebsite'>Depending On Previous Selection</option>
                            <option value='ecommerceWebsite'>Depending On Previous Selection</option>
                            <option value='webApp'>Depending On Previous Selection</option>
                            <option value='mobileApp'>Depending On Previous Selection</option>
                        </select>
                        <label htmlFor='users'>Users</label>
                        <select id='users' className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>
                            <option value='simpleWebsite'>Depending On Previous Selection</option>
                            <option value='ecommerceWebsite'>Depending On Previous Selection</option>
                            <option value='webApp'>Depending On Previous Selection</option>
                            <option value='mobileApp'>Depending On Previous Selection</option>   
                        </select>
                        <submit className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Submit</submit>
                    </form>                
                </div>
                <div className='flex flex-col justify-center items-center bg-neutral-950 p-4 lg:w-1/5'>
                    <LuSprout size={40} className='animate-pulse' />
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Scalability and Flexibility</h1>
                    <p>solutions are designed to grow and adapt as clients businesses evolve.</p>                
                </div>
                <div className='flex flex-col justify-center items-center bg-neutral-950 p-4 lg:w-1/5'>
                    <AiFillThunderbolt size={40} className='animate-pulse' />
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Cutting-Edge Technologies</h1>
                    <p>innovative tools and technologies you employ to create state-of-the-art solutions.</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-neutral-950 p-4 lg:w-1/5'>
                    <FaPuzzlePiece size={40} className='animate-pulse' />
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Modern Tech Stacks</h1>
                    <p>By integrating the latest advancements in technology into our tech stack, we empower businesses to thrive in a rapidly evolving digital landscape.</p>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default CustomSoftware
