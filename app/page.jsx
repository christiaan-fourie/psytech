import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import PriceCards from '@/components/PriceCards/PriceCards'

export default function Home() {  
  return (
    <main className='flex flex-col md:justify-center'>
      <Header />
      
      <Hero />

      {/* Three Cards that display the pricing structure */}
      <div className='text-center my-24'>
                <div className='flex flex-row justify-center items-center gap-12'>
                  <div className='w-1/5 bg-neutral-900 rounded-lg shadow-lg p-4'>
                    <h1 className='text-2xl font-bold'>Secure</h1>
                    <p className=''>Protecting unauthorized access and damage through measures like encryption, firewalls, and access controls.</p>
                  </div>
                  <div className='w-1/5 bg-neutral-900 rounded-lg shadow-lg p-4'>
                    <h1 className='text-2xl font-bold'>Private</h1>
                    <p className=''>Personal information remains confidential and away from public view, achieved by collecting minimal data.</p>
                  </div>
                  <div className='w-1/5 bg-neutral-900 rounded-lg shadow-lg p-4'>
                    <h1 className='text-2xl font-bold'>Reliable</h1>
                    <p className=''>Performs consistently without failure over time, garuanteed to be up and running at 99%.</p>
                  </div>
                </div>
              </div>
      <PriceCards />
      <div className='flex flex-col md:flex-row lg:w-2/3 mx-auto py-24 items-center'>
        <div className='overflow-visible md:w-1/2 rotate-1 pl-4 tracking-tighter text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]'>Introduction</div>
        <p className='w-1/2 -rotate-3 font-sans font-light text-lg bg-opacity-50'>
          Welcome to Psytech Studio, where software design meets exceptional user experience. We&apos;re a team driven by innovation and fueled by the latest technologies. Stay ahead of the curve and never get left behind. Unleash your potential with us today!
        </p>
      </div>
      {/* Security Explanation */}
      {/* We take security very seriously and we ensure that all our information is secure. */}
      {/* We make use of the latest security protocols and ensure that all our data is encrypted and secure. */}
      {/* furthermore open source approuch is mostly taken to ensure that developers all over the world can overview the code and suggest any security issues. */}



      {/* Our Software */}
      {/* We have a wide range of software that we have developed and we are always looking for new ideas and new ways to improve our software. */}
      {/* Zestify */}
      {/* Userbase */}
      {/* Algotrader */}

      {/* The Technologies we use */}
      {/* We make use of the latest technologies to ensure that our software is up to date and that we are always on the cutting edge of technology. */}
      {/* React */}
      {/* NextJS */}
      {/* TailwindCSS */}
      {/* NodeJS */}
      {/* MongoDB */}
      {/* ExpressJS */}
      {/* Python */}
      {/* Django */}
      {/* Flask */}
      {/* JWT */}
      {/* OAuth */}

      {/* Our Projects */}
      {/* We build software solutions for clients, from managing business to training ai models with their data */}
      {/* Champsfirm */}
      {/* Mayan Design */}
      {/* CF Motor repairs */}
      
    </main>
  )
}
