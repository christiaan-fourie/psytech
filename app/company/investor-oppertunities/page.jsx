import Header from '@/components/Header/Header'
import React from 'react'

import { LuSprout } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa";
import Footer from '@/components/Footer/Footer';

const InvestmentOppertunities = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col justify-center pt-24'>              
        {/* This page has options for custom software solutions? */}
            <h1 className='text-6xl mx-24 my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Grow Your Money</h1>
            <p className='font-sans mx-24 font-light text-lg'>
                Psytech Studio is open to selected investors, feel free to submit an application to see if you may qualify.
                </p>
            {/* A Mini Form */}
            <div className='flex flex-col lg:flex-row gap-6 p-14 text-center'>
                <div className='bg-neutral-950 p-4 lg:w-2/5'>
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Calculator</h1>
                    {/* Few Selectors in form contex */}
                    <form className='flex flex-col'>
                        <label htmlFor='rangeOfInvestment'>Deposit Range</label>
                        <select id='rangeOfInvestment' className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>                        
                            <option value='0-10k'>0 - 10K </option>
                            <option value='10k-50k'>10K - 50K</option>
                            <option value='50k-100k'>50K - 100K</option>
                            <option value='100k-500k'>100K - 500K</option>
                            <option value='500k-1m'>500K - 1M</option>
                        </select>
                        <label htmlFor='users'>Duration</label>
                        <select id='users' className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>
                            <option value='0-1year'>0 - 1 Year</option>
                            <option value='1-3years'>1 - 3 Years</option>
                            <option value='3-5years'>3 - 5 Years</option>
                            <option value='5-10years'>5 - 10 Years</option>
                            <option value='10-20years'>10 - 20 Years</option>
                        </select>
                        <submit className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Submit</submit>
                    </form>                
                </div>
                <div className='flex flex-col justify-center items-center bg-neutral-950 p-4 lg:w-1/5'>
                    <LuSprout size={40} className='animate-pulse' />
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Invest Your Money</h1>
                    <p>By investing into a Project we ensure a 3 - 13% return on your investment.</p>                
                </div>
                <div className='flex flex-col justify-center items-center bg-neutral-950 p-4 lg:w-1/5'>
                    <AiFillThunderbolt size={40} className='animate-pulse' />
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Help Build The Future</h1>
                    <p>By your investments we are enabled to continue to create more sustainable future.</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-neutral-950 p-4 lg:w-1/5'>
                    <FaPuzzlePiece size={40} className='animate-pulse' />
                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Be a part of Something Awesome</h1>
                    <p> Psytech Studio is a growing company, and we are looking for investors to join us.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>    
  )
}

export default InvestmentOppertunities
