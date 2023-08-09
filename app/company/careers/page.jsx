'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaKey, FaHome } from 'react-icons/fa'

import { useState, useEffect } from 'react'

function getItemDescription(item) {
    const descriptions = {
        'Technical Roles': 'These roles directly involve developing, programming, and maintaining software products. They require strong technical skills and expertise.',
        'Non-Technical Roles': 'These roles support the overall functioning of the company. They often involve areas such as management, sales, marketing, human resources, finance, and administration.',
        'Leadership and Management Roles': 'These roles are responsible for overseeing teams, projects, and the strategic direction of the company. They require a combination of technical knowledge, leadership skills, and business acumen.',
        'Legal and Compliance Roles': 'These roles are responsible for ensuring that the company complies with all applicable laws and regulations',
    }

    return descriptions[item]
}

function getItemLink(item) {
    const links = {
        'Technical Roles': '/company/careers',
        'Non-Technical Roles': '/company/careers',
        'Leadership and Management Roles': '/company/careers',
        'Legal and Compliance Roles': '/company/careers',
    }

    return links[item]
}

const Careers = () => {
  return (
    <section>

        {/* This is the Landing section */}
        <div className='flex flex-col md:flex-row items-center justify-center h-screen md:mx-12'>
            {/* An Career Image */}
            <div>
                <Image alt='Careers' src='/careers.jpg' className='rounded-full mx-auto w-1/2 pt-6 md:w-full' width={400} height={400} />
            </div>
            <div className='px-12'>
                <h1 className='text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500'>Careers</h1>
                <p className='font-sans font-light text-lg'>
                    At Psytech, We understand the importance of having the right team members. <br /> Therefore, we strive to assemble the most ambitious teams to create <br />software solutions that are scalable, reliable and innovative. <br />
                </p>
                <div className="flex gap-2 h-12 my-6">
                    <Link href='/company/careers' className='rounded-l-full hover:bg-[#2daa5200] text-neutral-100 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 flex justify-end items-center gap-2 hover:gap-4 transition-all'>What We Do<FaHome /></Link>
                    <Link href='/company/careers' className='rounded-r-full bg-[#2daa52] hover:bg-[#2daa5200] text-neutral-950 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 flex items-center gap-2 hover:gap-4 transition-all'><FaKey />See Oppertunities</Link>
                </div>
            </div>      
        </div>

        {/* This is a table to list all the job oppertunities. */}
        <div className='flex flex-col justify-center items-center my-12 py-12 glassLightNoBd text-center'>
            <h1 className='text-4xl my-6 bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-700 to-blue-500'>
                Job Oppertunities
            </h1>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-12 h-full'>
                {['Technical Roles', 'Non-Technical Roles', 'Leadership and Management Roles', 'Legal and Compliance Roles'].map((item, index) => (
                    <div
                        key={index}
                        className='w-4/5 md:w-1/5 bg-neutral-900 rounded-lg shadow-lg p-6 h-fill flex flex-col justify-between items-center gap-4'
                    >
                        <h1 className='text-2xl my-6 bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-700 to-blue-500'>
                            {item}
                        </h1>
                        <p className='text-neutral-100'>
                            {getItemDescription(item)}
                        </p>
                        <div className='flex justify-center items-center gap-4 my-6'>
                            <Link href={getItemLink(item)} className='rounded-full bg-[#2daa52] hover:bg-[#2daa5200] text-neutral-950 hover:text-[#2daa52] border glassLight border-[#2daa52] px-4 flex items-center gap-2 hover:gap-4 transition-all'>Apply Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* The listing in the form of html table */}
        <div className='flex flex-col justify-center items-center my-12 py-12'>
            <h1 className='text-4xl my-6 bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-700 to-blue-500'>
                Listings
            </h1>
            <table className='w-1/2 font-thin transition-all'>
                <thead className='mb-6 glassLightNoBd rounded-full'>
                    <tr>
                        <th className='px-4 py-2'>Job Title</th>
                        <th className='px-4 py-2'>Location</th>
                        <th className='px-4 py-2'>Department</th>
                        <th className='px-4 py-2'>Type</th>
                        <th className='px-4 py-2'></th>
                    </tr>
                </thead>
                <div className='py-2'></div>
                <tbody>
                    <tr className='jobListing'>
                        <td className='px-4 py-2'>Cloud Engineer</td>
                        <td className='px-4 py-2'>Remote</td>
                        <td className='px-4 py-2'>Engineering</td>
                        <td className='px-4 py-2'>Part Time</td>
                        <td className='px-4 py-2'><Link href='/company/careers'>Apply</Link></td>
                    </tr>
                    <tr className='jobListing'>
                        <td className='px-4 py-2'>Legal Consultant</td>
                        <td className='px-4 py-2'>Remote</td>
                        <td className='px-4 py-2'>Legal</td>
                        <td className='px-4 py-2'>Part Time</td>
                        <td className='px-4 py-2'><Link href='/company/careers'>Apply</Link></td>
                    </tr>
                    <tr className='jobListing'>
                        <td className='px-4 py-2'>Promoter</td>
                        <td className='px-4 py-2'>Remote</td>
                        <td className='px-4 py-2'>Marketing</td>
                        <td className='px-4 py-2'>Part Time</td>
                        <td className='px-4 py-2'><Link href='/company/careers'>Apply</Link></td>
                    </tr>
                    <tr className='jobListing'>
                        <td className='px-4 py-2'>Software Engineer</td>
                        <td className='px-4 py-2'>Remote</td>
                        <td className='px-4 py-2'>Engineering</td>
                        <td className='px-4 py-2'>Part Time</td>
                        <td className='px-4 py-2'><Link href='/company/careers'>Apply</Link></td>
                    </tr>
                </tbody>                
            </table>
        </div>



    </section>
  )
}

export default Careers
