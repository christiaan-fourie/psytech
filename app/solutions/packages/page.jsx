import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import PriceCards from '@/components/PriceCards/PriceCards'
import React from 'react'

const Packages = () => {
  return (
    <div>
        <Header />
        <div className='pt-24'>
            <PriceCards />
        </div> 
        <Footer />       
    </div>    
  )
}

export default Packages
