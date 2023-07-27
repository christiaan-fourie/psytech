'use client'
import Image from 'next/image'

import MatrixBackgroundComponent from "./MatricBackgroundComponent"


export default function Hero() {



  return (
    <div>
        <div className='flex items-center pt-[160px]'>
          <Image alt='Psytech Software Core' className='animate-pulse' width={500} height={250} src='/technology.png'></Image>
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
