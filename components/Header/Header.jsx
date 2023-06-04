'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaGithub } from 'react-icons/fa'

import { useState, useEffect } from 'react'

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    // Active Page
    const [activePage, setActivePage] = useState('')

    // useEffect When the page gets loaded, check the URL and set the active page
    useEffect(() => {
        // Remove the '/' from the URL
        if (window.location.pathname === '/') {
            setActivePage('home')
        } else {
            const url = window.location.pathname.replace('/', '')
            setActivePage(url)
        }
    }, [])



    
    // If user clicks outside of the menu, close it
    if (showMenu) {
        window.onclick = function(event) {
            if (event.target.className === 'fixed w-full h-full left-0 top-0 bg-black bg-opacity-30 z-0') {
                setShowMenu(false)
            }
        }
    }


  return (
    <div className='fixed top-0 w-full backdrop-blur-sm shadow-2xl'>
        <div className='flex justify-around items-center w-full py-4 border-b border-white border-opacity-50 overflow-hidden'>
                {/* Dim the page */}
                <div className='flex items-center'>
                    <Image
                        src="/logo.png"
                        alt="Psytech Logo"
                        className='rotate-90 hover:rotate-180 transition-all duration-700'
                        width={50}
                        height={50}
                        priority
                    />
                    <Link href='/' className="pl-4 tracking-tighter text-3xl font-extrabold hover:cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]">
                        Psytech<span className='font-extralight'>Studio</span>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <div className={`${showMenu ? 'absolute h-[100vh] glass bg-opacity-90 w-3/5 left-0 top-0 z-50' : 'hidden'} md:flex`}>
                        <ul className={`${showMenu ? 'flex-col gap-12 align-middle mt-[30vh]' : 'flex-row'} flex justify-end `}>
                            <li className="px-4 py-2 transition-all duration-300">
                                <Link href='/' onClick={(e) => setActivePage('home')} className={`${activePage === 'home' ? 'neonButton active' : 'neonButton'}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Home
                                </Link>
                            </li>
                            <li className="px-4 py-2 transition-all duration-300">
                                <Link href='/about' onClick={(e) => setActivePage('about')} className={`${activePage === 'about' ? 'neonButton active' : 'neonButton'}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    About
                                </Link>
                            </li>
                            <li className="px-4 py-2 transition-all duration-300">
                                <Link href='/contact' onClick={(e) => setActivePage('contact')} className={`${activePage === 'contact' ? 'neonButton active' : 'neonButton'}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>                                      
                    </div>
                {/* A Mobile Menu SVG */}
                {showMenu ? (
                    // If the menu is open, show the close icon
                    <svg
                        onClick={() => setShowMenu(!showMenu)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 hover:glow hover:animate-pulse md:hidden cursor-pointer z-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        title='Source Code'
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    ) : (
                        <svg
                            onClick={() => setShowMenu(!showMenu)}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 hover:glow hover:animate-pulse md:hidden cursor-pointer z-50"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            title='Source Code'
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </div>
            </div>
            <div className='absolute px-4 py-2 bg-transparent'>
                {/* Show the current path */}
                {/* <code className='text-center text-xs my-2 p-1 rounded w-[60px]'>you are here: <span className=''>{window.location.pathname}</span></code> */}
            </div>
    </div>
    
  )
}

export default Header
