import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import PriceCards from '@/components/PriceCards/PriceCards'

export default function Home() {  

  return (
    <main className='flex flex-col md:justify-center'>
      <Header />      
      <Hero />

      {/* Three Cards that display the pricing structure */}
      <div className='text-center bg-neutral-800 pb-12'>
        <h1 className='text-4xl my-6 bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-700 to-blue-500'>We Value</h1>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-12'>
          <div className='w-4/5 md:w-1/5 bg-neutral-900 rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-bold py-2'>Security</h2>
            <p className='font-sans font-light text-lg bg-opacity-50'>Protecting against unauthorized access and damage through measures like encryption, firewalls, and access controls.</p>
          </div>
          <div className='w-4/5 md:w-1/5 bg-neutral-900 rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-bold py-2'>Privacy</h2>
            <p className='font-sans font-light text-lg bg-opacity-50'>Ensuring personal information remains confidential and away from public view, safeguarding your privacy.</p>
          </div>
          <div className='w-4/5 md:w-1/5 bg-neutral-900 rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-bold py-2'>Reliability</h2>
            <p className='font-sans font-light text-lg bg-opacity-50'>Guaranteeing we and our systems will perform consistently without failure over time, ensuring an uptime of 99%.</p>
          </div>
        </div>
      </div>

      <PriceCards />
      <div className='flex flex-col md:flex-row py-24 items-center justify-center gap-6'>
        <div className='text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]'>Subscribe</div>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <input className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4 w-[40vw]' placeholder='Email Address' />
          <button className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Subscribe</button>
        </div>
      </div>
      <Footer />      
    </main>
  )
}
