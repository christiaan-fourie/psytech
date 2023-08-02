import Header from '@/components/Header/Header'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer/Footer'

const Security = () => {
  return (
    <div className=''>
      <Header />
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-12 p-24'>
        <div className='bg-neutral-800 p-12 lg:w-1/3'>
            <h1 className='text-4xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Security Dashboard:</h1>
                <p className='font-sans font-light text-lg'>
                    At Psytech, We understand the importance of security in the digital world. <br />
                </p>
                <h2 className='text-2xl my-2 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>We Secure:</h2>
                <ul className='list-disc list-inside'>
                    <li>Firewall</li>
                    <li>Encryption</li>
                    <li>Authentication</li>
                    <li>Account Activity</li>
                    <li>Access Control</li>
                    <li>Backup</li>
                    <li>Monitoring</li>
                    <li>Testing</li>
                    <li>Reporting</li>
                    <li>Updates</li>
                </ul>
            {/* Call To action */}
            <button className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Explore</button>
        </div>
        <div className='flex flex-col gap-4 lg:w-2/3'>
            <Image alt='Psytech Software Core' width={1200} height={1200} src='/dashboardSecurityPreview.jpg' className='rounded-lg glass w-full opacity-90'></Image>
            <Image alt='Psytech Software Core' width={1200} height={1200} src='/codeWallCropped.jpg' className='hidden xl:block left-0 top-0 w-screen bg-cover -z-50 fixed'></Image>
        </div>        
      </div>
      {/* <Footer />       */}
    </div>
  )
}

export default Security
