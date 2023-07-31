'use client'

import Header from "@/components/Header/Header"
import Image from "next/image"

import { useState, useEffect } from "react"

const About = () => {
  // When the page loads it should start typing the header text
  const [isTyping, setIsTyping] = useState(true)
  const [headerText, setHeaderText] = useState("")
  const [techStachSize, setTechStachSize] = useState(120)

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
  

  return (
    <div>
        <Header />
          <div className='flex flex-col lg:flex-row justify-between items-center pt-24 px-12'>
            <div>
              <h1 className='text-4xl text-left font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>{ headerText }</h1>
              {
                !isTyping && (
                  <div className="flex gap-2">
                    <button className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Learn More</button>
                    <button className='bg-[#2daa52]  my-4 py-2 px-4'>See offers</button>
                  </div>                  
                )
              }
            </div>
            <Image alt='Psytech Software Devices' className="animate-pulse"  width={600} height={400} src={image}></Image>
          </div>
          {
            !isTyping && (
              <div className="flex-col justify-center items-center my-12 py-12 bg-neutral-950">
                <h1 className='text-4xl text-center font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Our Mission</h1>
                <p className='font-sans font-light text-lg text-center'>
                We connect people to your business, this ensures that you are able to make informed decisions and provide the best service to your customers. <br />
                  <button className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'>Explore More</button>
                </p>
                <div className="p-12 gap-4 bg-neutral-900">
                  <h1 className='text-4xl text-center font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Our tech stack.</h1>
                  <div className="flex flex-col gap-4 md:flex-row justify-around items-center pt-24 px-12">
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/react.png"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/next.png"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/tailwind.webp"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/node.png"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/express.png"></Image>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row justify-around items-center pt-24 px-12">
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/python.png"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/tux.png"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/mongodb.png"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/googlecloud.png"></Image>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt='Psytech Software Devices' className="animate-pulse"  width={techStachSize} height={techStachSize} src="/postman.png"></Image>
                    </div>
                  </div>

                </div>     
              </div>
            )

          }          
    </div>
  )
}

export default About
