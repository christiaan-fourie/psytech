import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import PriceCards from '@/components/PriceCards/PriceCards'



export default function Home() {

  
  return (
    <main className='flex flex-col md:justify-center'>
      <Header />
      <Hero />

      {/* Three Cards that display the pricing structure */}
      <PriceCards />
    </main>
  )
}
