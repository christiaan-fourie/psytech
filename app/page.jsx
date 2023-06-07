import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'



export default function Home() {

  
  return (
    <main className='flex flex-col md:justify-center'>
      <Header />
      <Hero />

      {/* Three Cards that display the pricing structure */}
      <div className='flex flex-col md:flex-row justify-around p-8 mx-24'>
        <div className='flex flex-col justify-center w-1/3 items-center p-8 rounded-3xl shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm'>
          <h1 className='text-4xl'>Basic</h1>
          <h1 className='text-6xl'>R 600</h1>
          <p>Per Month</p>
          <ul className='list-disc'>
            <li>Basic Website Design</li>
            <li>Basic Website Development</li>
            <li>Basic Maintanance</li>
            <li>Basic Support</li>
            <li>Monthly Report</li>
          </ul>
          <button className='p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Button</button>
        </div>
        <div className='flex flex-col justify-center items-center p-8 rounded-3xl shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm'>
          <h1 className='text-4xl'>Standard</h1>
          <h1 className='text-6xl'>R 2 400</h1>
          <p>Per Month</p>
          <ul className='list-disc'>
            <li>Website Design</li>
            <li>Website Develop</li>
            <li>Maintanance</li>
            <li>Support</li>
            <li>Monthly Analytics Report</li>
          </ul>
          <button className='p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Button</button>
        </div>
        <div className='flex flex-col justify-center items-center p-8 rounded-3xl shadow-[0_0_16px_5px_#2daa5255] backdrop-blur-sm'>
          <h1 className='text-4xl'>Premium</h1>
          <h1 className='text-6xl'>R 9 600</h1>
          <p>Per Month</p>
          <ul className='list-disc'>
            <li>Advance Website Design</li>
            <li>Advance Website Development</li>
            <li>Advance Maintanance</li>
            <li>Advance Support</li>
            <li>Monthly Analytics</li>
          </ul>
          <button className='p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2daa52]'>Button</button>
        </div>
      </div>
    </main>
  )
}
