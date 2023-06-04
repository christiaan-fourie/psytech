'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaGithub } from 'react-icons/fa'

import { useState, useEffect } from 'react'

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    // Active Page
    const [activePage, setActivePage] = useState('home')

    // useEffect When the page gets loaded, check the URL and set the active page
    useEffect(() => {
        if (window.location.pathname === '/') {
            setActivePage('home')
        } else if (window.location.pathname === '/about') {
            setActivePage('about')
        } else if (window.location.pathname === '/contact') {
            setActivePage('contact')
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
    <div className='flex justify-around items-center w-full py-4 border-b border-blue-500 border-opacity-50 overflow-hidden'>
        {/* Dim the page */}
        <div className={`${showMenu ? 'fixed w-full h-full left-0 top-0 bg-black bg-opacity-30 z-0' : 'hidden'}`}></div>
        <div className='flex items-center'>
            <Image
                src="/logo.png"
                alt="Psytech Logo"
                className='rotate-90 hover:rotate-180 transition-all duration-700'
                width={50}
                height={50}
                priority
            />
            <Link href='/' className="pl-6 text-3xl font-light hover:cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#517dbf] to-[#2daa52]">
                Psytech <span>Studio</span>
            </Link>
        </div>
        <div className='flex items-center'>
            <div className={`${showMenu ? 'fixed w-3/5 h-full left-0 top-0 bg-black bg-opacity-30 glass' : 'hidden'} md:flex`}>
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
                    d="M4 6h16M4 12h16M4 18h7"
                />
            </svg>) : (
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
  )
}

export default Header
