'use client'

import Image from "next/image"
import Link from "next/link"

import { FaKey, FaHome } from "react-icons/fa"

import { useState, useEffect } from "react"

const About = () => {
  // When the page loads it should start typing the header text
  const [isTyping, setIsTyping] = useState(true)
  const [headerText, setHeaderText] = useState("")
  const [techStachSize, setTechStachSize] = useState(100)

  // The image should be devices.png
  const [image, setImage] = useState("/devices.png")
  
  // useEffect to type the header text
  useEffect(() => {
    const text = 'Wee are here to bring intelligence and privacy to you and your business.'
    let i = 0
    const typing = setInterval(() => {
      if (i < text.length) {
        setHeaderText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typing)
        setIsTyping(false)
      }
    }, 10)
  }, [])

  // After typing the header text, it should change the image to devicesAuth.png
  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        setImage("/devicesAuth.png")
      }, 1000)
    }
  }, [isTyping])

  // Get the description of the card
  function getCardDescription(item) {
    const descriptions = {
      Security:
        'Protecting against unauthorized access and damage through measures like encryption, firewalls, and access controls.',
      Privacy:
        'Ensuring personal information remains confidential and away from public view, safeguarding your privacy.',
      Reliability:
        'Guaranteeing we and our systems will perform consistently without failure over time, ensuring an uptime of 99%.',
    };
  
    return descriptions[item];
  }  
  

  return (
    <section>
          {/* Section for About Us */}
          <div className='flex flex-col lg:flex-row sm:justify-between items-center pt-24 px-12 h-screen'>
            <div>
              <h1 className='text-4xl text-left font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>{ headerText }</h1>
              {
                !isTyping && (
                  <div className="flex gap-2 h-12">
                    <Link href='/' className='rounded-l-full hover:bg-[#2daa5200] text-neutral-100 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 flex justify-end items-center gap-2 hover:gap-4 transition-all'>Learn More<FaHome /></Link>
                    <Link href='/solutions/packages' className='rounded-r-full bg-[#2daa52] hover:bg-[#2daa5200] text-neutral-950 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 flex items-center gap-2 hover:gap-4 transition-all'><FaKey />See Offers</Link>
                  </div>                  
                )
              }
            </div>
            <Image alt='Psytech Software Devices' className="animate-pulse"  width={600} height={400} src={image}></Image>
          </div>  


          {/* Three Cards that display the values */}
          <div className='flex-col justify-center items-center my-12 py-12 glassLightNoBd text-center'>
            <h1 className='text-4xl my-6 bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-700 to-blue-500'>
              We Value
            </h1>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-12'>
              {['Security', 'Privacy', 'Reliability'].map((item, index) => (
                <div
                  key={index}
                  className='w-4/5 md:w-1/5 bg-neutral-900 rounded-lg shadow-lg p-4'
                >
                  <h2 className='text-2xl font-bold py-2'>{item}</h2>
                  <p className='font-sans font-light text-lg bg-opacity-50'>
                    {getCardDescription(item)}
                  </p>
                </div>
              ))}
            </div>
          </div>

                
    </section>
  )
}

export default About
