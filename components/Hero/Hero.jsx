'use client'

import MatrixBackgroundComponent from "./MatricBackgroundComponent"


export default function Hero() {



  return (
    <div>
        <div className='p-12 md:p-24 text-center mt-[20vh] z-0'>
            <h4>We do the Magic</h4>
            <h1 className='text-6xl'>You focus on <span className='text-blue-500'>Success</span></h1>
        </div>
        <MatrixBackgroundComponent />
    </div>
    
  )
}
