import React from 'react'

const PriceCards = () => {
  return (
    <div className='font-sans font-light text-lg'>              
      <h1 className='text-4xl text-center font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Solutions</h1>
      <div className='flex flex-col gap-4 lg:flex-row justify-around md:p-8 md:mx-10'>
        <div className='flex flex-col lg:w-1/3 items-center p-8 md:rounded-3xl hover:shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm bg-neutral-800 hover:bg-opacity-50'>
          <h1 className='text-4xl text-center'>Web <br /> Presence</h1>
          <h1 className='text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>R 4 500</h1>
          <p>This package is designed for businesses or individuals looking to establish an online presence and showcase their products or services.</p>
          <h4 className='text-green-500 my-6'>What You Get:</h4>
          <ul className='list-disc'>
            <li>Custom Website Development</li>
            <li>Responsive Design</li>
            <li>Basic UI/UX Design</li>
            <li>Contact Form</li>
            <li>Domain Name and Hosting</li>
            <li>SEO-Friendly</li>
            <li>Social Media Integration</li>
            <li>3 Months Support</li>
          </ul>
          <button className='p-2 m-2 rounded-md border border-[#2daa52] text-[#2daa52]  focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Purchase</button>
        </div>
        <div className='flex flex-col lg:w-1/3 items-center p-8 md:rounded-3xl hover:shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm bg-neutral-800 hover:bg-opacity-50'>
          <h1 className='text-4xl text-center'>E-commerce <br /> Growth</h1>
          <h1 className='text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>R 12 400</h1>
          <p>This package is tailored for businesses looking to expand their reach, boost sales, and provide a seamless online shopping experience to customers.</p>
          <h4 className='text-green-500 my-6'>What You Get:</h4>
          <ul className='list-disc'>
            <li>Full-Featured E-commerce Website</li>
            <li>Custom Design</li>
            <li>Product Management System</li>
            <li>Payment Gateway Integration</li>
            <li>Order Processing and Fulfillment</li>
            <li>Customer Accounts</li>
            <li>Product Search and Filtering</li>
            <li>Analytics and Reporting</li>
          </ul>
          <button className='p-2 m-2 rounded-md border border-[#2daa52] text-[#2daa52] focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Purchase</button>
        </div>
        <div className='flex flex-col lg:w-1/3 items-center p-8 md:rounded-3xl hover:shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm bg-neutral-800 hover:bg-opacity-50'>
          <h1 className='text-4xl text-center'>Business <br /> Intelligence</h1>
          <h1 className='text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>R 28 600</h1>
          <p>This package caters to businesses seeking data-driven insights to make informed decisions and optimize their operations.</p>
          <h4 className='text-green-500 my-6'>What You Get:</h4>
          <ul className='list-disc'>
            <li>Data Visualization Dashboard</li>
            <li>Data Integration</li>
            <li>Accounts & Management</li>
            <li>Customizable Reports</li>
            <li>Predictive Analytics</li>
            <li>Data Security and Compliance</li>
            <li>Training and Support</li>
          </ul>
          <button className='p-2 m-2 rounded-md border border-[#2daa52] text-[#2daa52]  focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Purchase</button>
        </div>
      </div>
    </div>    
  )
}

export default PriceCards
