import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const Partners = () => {
  return (
    <div>
      <Header />
        <div className='pt-24'> 
            <div className=''>
                <div className='flex justify-center pt-24'>
                    <div className='flex flex-col md:flex-row items-center animate-pulse'>
                        <div>
                            <h1 className='text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Partners</h1>
                            <p className='font-sans font-light text-lg'>
                                We are open to partnerships with companies and individuals who share our values and vision. <br /> If you are interested in partnering with us, please get in touch with us. <br /> We would love to hear from you.
                            </p>
                            <button className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Get Onboard</button>
                        </div>
                    </div>
                </div>
                {/* Our Culture */}
                <div className='flex justify-center mt-24 p-12 bg-green-300'>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='text-center'>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <div className='bg-neutral-950 p-4'>
                                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Invest</h1>
                                    <p>We have a range of different equities, in the company as well as selected projects.</p>
                                </div>
                                <div className='bg-neutral-950 p-4'>
                                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Colaborate</h1>
                                    <p>If your business have overlaping services, let&apos;s team up instead of competing.</p>
                                </div>
                                <div className='bg-neutral-950 p-4'>
                                    <h1 className='text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Learning Programs</h1>
                                    <p>Do you offer any tutoring or educational services? If so we could connect to establish a training platform as well as partner up.</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Partners
