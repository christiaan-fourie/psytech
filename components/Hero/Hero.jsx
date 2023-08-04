import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='px-16 md:px-10 my-6'>
        <div className='flex justify-center pt-24'>
          <div className='flex flex-col md:flex-row items-center animate-pulse'>
            <Image alt='Psytech Software Core' width={400} height={200} src='/authenticate.png'></Image>
            <div>
              <h1 className='text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Authenticity is at our Core</h1>
              <p className='font-sans font-light text-lg'>
                At Psytech, We understand the importance of trust and transparency in the digital world. <br /> Therefore, we strive to create software solutions that are genuine, reliable, and true to our values. <br /> Resulting in a commitment to authenticity is reflected in everything we do.
              </p>
              <Link href='/company/about' className='border border-[#2daa52] text-[#2daa52] my-12 py-2 px-4'>Explore</Link>
            </div>
          </div>
        </div>
    </div>    
  )
}
