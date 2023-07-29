'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function Header() {    

    const [showMenu, setShowMenu] = useState(false)
    const [isLoggedin, setIsLoggedin] = useState(false);
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


  return (
    <div className='fixed top-0 w-full backdrop-blur-sm shadow-2xl z-50'>
        <div className='flex justify-between px-4 items-center w-full py-4 border-b border-white border-opacity-50 overflow-hidden'>
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
                    <div className={`${showMenu ? 'absolute h-[100vh] glass bg-opacity-90 w-1/3 left-0 top-0 z-40' : 'hidden'} md:flex`}>
                        <ul className={`${showMenu ? 'flex-col' : 'flex-row'} flex justify-end `}>
                            <li className="px-4 py-2 transition-all duration-300">
                                <Link href='/' onClick={(e) => setActivePage('home')} className={`${activePage === 'home' ? 'neonButton active' : 'neonButton'}`}>
                                    <span></span>
                                    Home
                                </Link>
                            </li>
                            <li className="px-4 py-2 transition-all duration-300">
                                <Link href='/about' onClick={(e) => setActivePage('about')} className={`${activePage === 'about' ? 'neonButton active' : 'neonButton'}`}>
                                    <span></span>
                                    About
                                </Link>
                            </li>
                            <li className="px-4 py-2 transition-all duration-300">
                                <Link href='/contact' onClick={(e) => setActivePage('contact')} className={`${activePage === 'contact' ? 'neonButton active' : 'neonButton'}`}>
                                    <span></span>
                                    Contact
                                </Link>
                            </li>
                            <li className="px-4 py-2 transition-all duration-300">
                                {isLoggedin ? 
                                    // <ProfileICon />
                                    <h1>Icon</h1>
                                    : 
                                    <Link href='/login' onClick={(e) => setActivePage('login')} className={`${activePage === 'login' ? 'neonButton active' : 'neonButton'}`}>
                                        <span></span>
                                        Login
                                    </Link>
                                }
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
    </div>
    
  )
}

export default Header
