import Image from 'next/image'
import Link from 'next/link'
import { FaKey, FaHome } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row px-12 pt-24 sm:pt-6 min-h-screen items-center sm:gap-4'>
      <div  className='w-1/2 md:w-1/2 lg:w-1/3'>
        <Image alt='Psytech Software Core' width={400} height={200} src='/authenticate.png'></Image>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl md:text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Privacy & Simplicity</h1>
        <p className='font-sans font-light md:text-lg'>
          At Psytech, We strive to create software solutions that are genuine, reliable, and true to our values. <br /> Resulting in a commitment to our customers and their privacy. <br /> We are a team of passionate individuals who are dedicated to creating a sustainable future for all. <br />
        </p>
        <div className="flex gap-2 h-12">
          <Link href='/company/about' className='rounded-l-full hover:bg-[#2daa5200] text-neutral-100 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 flex justify-end items-center gap-2 hover:gap-4 transition-all'>About Us<FaHome /></Link>
          <Link href='/solutions/packages' className='rounded-r-full bg-[#2daa52] hover:bg-[#2daa5200] text-neutral-950 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 flex items-center gap-2 hover:gap-4 transition-all'><FaKey />See Offers</Link>
        </div>
      </div>
    </div>
  )
}