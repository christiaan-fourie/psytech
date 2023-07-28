import React from 'react'

const PriceCards = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row justify-around md:p-8 md:mx-10'>
        <div className='flex flex-col justify-center md:w-1/3 items-center p-8 md:rounded-3xl shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm'>
          <h1 className='text-4xl'>Basic</h1>
          <h1 className='text-2xl text-[#2daa52] m-2 px-4 py-2'>R 600</h1>
          <p>Per Month</p>
          <ul className='list-disc'>
            <li>Basic Website Design</li>
            <li>Basic Website Development</li>
            <li>Basic Maintanance</li>
            <li>Basic Support</li>
            <li>Monthly Report</li>
          </ul>
          <button className='p-2 m-2 rounded-md border border-[#2daa52] text-[#2daa52]  focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Subscribe</button>
        </div>
        <div className='flex flex-col justify-center items-center p-8 md:rounded-3xl shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm'>
          <h1 className='text-4xl'>Standard</h1>
          <h1 className='text-2xl text-[#2daa52] m-2  px-4 py-2'>R 2 400</h1>
          <p>Per Month</p>
          <ul className='list-disc'>
            <li>Website Design</li>
            <li>Website Develop</li>
            <li>Maintanance</li>
            <li>Support</li>
            <li>Monthly Analytics Report</li>
          </ul>
          <button className='p-2 m-2 rounded-md border border-[#2daa52] text-[#2daa52] focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Subscribe</button>
        </div>
        <div className='flex flex-col justify-center items-center p-8 md:rounded-3xl shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm'>
          <h1 className='text-4xl'>Premium</h1>
          <h1 className='text-2xl text-[#2daa52] m-2  px-4 py-2'>R 9 600</h1>
          <p>Per Month</p>
          <ul className='list-disc'>
            <li>Advance Website Design</li>
            <li>Advance Website Development</li>
            <li>Advance Maintanance</li>
            <li>Advance Support</li>
            <li>Monthly Analytics</li>
          </ul>
          <button className='p-2 m-2 rounded-md border border-[#2daa52] text-[#2daa52]  focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Subscribe</button>
        </div>
      </div>
  )
}

export default PriceCards
