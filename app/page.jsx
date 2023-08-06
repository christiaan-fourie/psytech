import Hero from '@/components/Hero/Hero'

import { FaKey, FaHome } from 'react-icons/fa'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {  

  return (
    <main className='flex flex-col md:justify-center'>
      {/* Hero Section */}
      <Hero />      

      {/* Section for Hiring */}
      <div className="flex-col justify-center items-center my-12 py-12 glassLightNoBd">
                    <h1 className='text-4xl text-center font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>We are Hiring !</h1>
                    <p className='font-sans font-light text-lg text-center'>
                      We are putting together a group of talented and enthusiastic individuals. <br />
                      <Link href='/company/careers' className='rounded-full mx-auto bg-[#2daa52] hover:bg-[#2daa5200] text-neutral-950 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 py-4 my-6 w-1/2 lg:w-1/5 flex items-center justify-center gap-2 hover:gap-4 transition-all'><FaKey />Apply Now</Link>
                    </p>
      </div>

      {/* Section for Investment Oppertunities */}
      <div className='flex flex-col lg:gap-4 h-screen lg:flex-row justify-start items-center px-12'>
            <Image alt='Psytech Software Devices' className="animate-pulse"  width={500} height={300} src='/invest.png'></Image>
            <div>
              <h1 className='text-4xl text-left font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Get in by purchasing your equity.</h1>
              <div className="flex gap-2 h-12">
                    <Link href='/' className='rounded-l-full hover:bg-[#2daa5200] text-neutral-100 hover:text-[#2daa52] border glassLight border-[#2daa52] px-6 flex justify-end items-center gap-2 hover:gap-4 transition-all'>Learn More<FaHome /></Link>
                    <Link href='/solutions/packages' className='rounded-r-full bg-[#2daa52] hover:bg-[#2daa5200] text-neutral-950 hover:text-[#2daa52] border glassLight border-[#2daa52] px-6 flex items-center gap-2 hover:gap-4 transition-all'><FaKey />See Oppertunities</Link>
              </div>  
            </div>            
      </div>   

      {/* Subscribe Section */}
      <div className='flex flex-col md:flex-row py-24 items-center justify-center gap-6'>
        <div className='text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]'>Subscribe</div>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <input className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4 w-[40vw]' placeholder='Email Address' />
          <button className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Subscribe</button>
        </div>
      </div>  

    </main>
  )
}
