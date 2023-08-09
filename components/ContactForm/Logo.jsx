import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex'>
                          <Image
                              src="/logo.png"
                              alt="Psytech Logo"
                              className='rotate-90 hover:rotate-180 transition-all duration-700'
                              width={25}
                              height={22}
                              priority
                          />
                          <h3 className="pl-4 tracking-tighter text-2xl md:3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]">
                              Psytech<span className='font-extralight'>Studio</span>
                          </h3>
    </div>
  )
}

export default Logo
