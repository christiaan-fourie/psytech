import Header from "@/components/Header/Header"


const About = () => {
  return (
    <div>
        <Header />
        <div className='text-left p-24 md:text-center mt-[20vh] z-0 min-h-screen'>
            <h4>What We Do</h4>
            <h1 className='text-6xl'>We develop <span className='text-blue-500'>Software</span></h1>
        </div>
    </div>
  )
}

export default About
