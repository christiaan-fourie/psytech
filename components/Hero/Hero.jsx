'use client'
import Image from 'next/image'

import MatrixBackgroundComponent from "./MatricBackgroundComponent"


export default function Hero() {



  return (
    <div>
        <div className='p-12 md:p-24 text-center mt-[20vh] z-0'>
            <h4>We do the Magic</h4>
            <h1 className='text-6xl'>You focus on <span className='text-blue-500'>Success</span></h1>
        </div>
        <div className='flex items-center'>
          <Image alt='Psytech Software Core' className='animate-pulse' width={500} height={250} src='/technology.jpg'></Image>
          <div>
            <h1 className='text-8xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-500'>Core Focus</h1>
            <p>
              Immerse yourself in the rich tapestry of magic and technology, and let the tale of extraordinary adventure awaken the dreamer and inventor within you. Step into this fantastical realm where anything is possible, and let the wonders of imagination take flight!
            </p>
          </div>
        </div>
        <MatrixBackgroundComponent />
    </div>
    
  )
}
