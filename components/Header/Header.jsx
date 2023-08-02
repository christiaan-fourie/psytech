'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Import Loader
import Loader from '@/components/Loader'

import { FaAngleDown, FaAngleUp, FaArrowCircleLeft, FaArrowAltCircleLeft } from 'react-icons/fa'

function Header() {
    // The Submenu Style
    const submenuStyle = (
        'flex flex-col md:w-1/5 md:fixed rounded-md bg-neutral-800 bg-opacity-90 glassLight z-50 md:px-6 md:py-2 mt-4'
    )

    const [showMenu, setShowMenu] = useState(false)
    const [isLoggedin, setIsLoggedin] = useState(false);
    // Active Page
    const [activePage, setActivePage] = useState('')
    const [loading, setLoading] = useState(true)

    // useEffect When the page gets loaded, check the URL and set the active page & If you click outside the menu, close it
    useEffect(() => {
        setActivePage(window.location.pathname)
        setLoading(false)
    }, [])

    // When any of the menu items are clicked set loading to true
    const menuClicked = (clickedPage) => {        
        // Check if it is the same page
        if (clickedPage === activePage) {
            // If it is the same page, set loading to false
            setLoading(false)
        }else{
            setLoading(true)
            // Set the active page
            setActivePage(clickedPage)            
        }
    }


    // The Company Dropdown Menu
    const [companyDropdownState, setCompanyDropdownState] = useState(false)
    // Function to Toggle the Company Dropdown Menu
    const toggleCompanyDropdownState = () => {
        setCompanyDropdownState(!companyDropdownState)
        // Also close the Solutions Dropdown Menu
        setSolutionsDropdownState(false)
    }
    const companyDropdown = (
        <div className={submenuStyle}>
            <div>
                <Link href='/company/about' onClick={(e) => menuClicked('/company/about')} className={`${activePage === '/company/about' ? 'neonButton active' : 'neonButton'}`}>
                    About Us
                </Link>
                <Link href='/company/careers' onClick={(e) => menuClicked('/company/careers')} className={`${activePage === '/company/careers' ? 'neonButton active' : 'neonButton'}`}>
                    Careers
                </Link>
                {/* Investor Equity Opportunities */}
                <Link href='/company/investor-oppertunities' onClick={(e) => menuClicked('/company/investor-oppertunities')} className={`${activePage === '/company/investor-oppertunities' ? 'neonButton active' : 'neonButton'}`}>
                    Investor Opportunities
                </Link>
                {/* Partners */}
                <Link href='/company/partners' onClick={(e) => menuClicked('/company/partners')} className={`${activePage === '/company/partners' ? 'neonButton active' : 'neonButton'}`}>
                    Partners
                </Link>
            </div>
        </div>
    )

    // The Solutions Dropdown Menu
    const [solutionsDropdownState, setSolutionsDropdownState] = useState(false)
    // Function to Toggle the Solutions Dropdown Menu
    const toggleSolutionsDropdownState = () => {
        setSolutionsDropdownState(!solutionsDropdownState)
        // Also close the Company Dropdown Menu
        setCompanyDropdownState(false)
    }
    const solutionsDropdown = (
        <div className={submenuStyle}>
            {/* Includes Presence, Growth and Business Inteligence */}
            <div>
                <Link onClick={(e) => menuClicked('/solutions/packages')} href='/solutions/packages'  className={`${activePage === '/solutions/packages' ? 'neonButton active' : 'neonButton'}`}>
                    Packages
                </Link>
                {/* Custom Software Development */}
                <Link href='/solutions/custom-software' onClick={(e) => menuClicked('/solutions/custom-software')} className={`${activePage === '/solutions/custom-software' ? 'neonButton active' : 'neonButton'}`}>
                    Custom Software
                </Link>
                {/* Security Services */}
                <Link href='/solutions/security' onClick={(e) => menuClicked('/solutions/security')} className={`${activePage === '/solutions/security' ? 'neonButton active' : 'neonButton'}`}>
                    Security Services
                </Link>
                {/* Data Analytics & Insights */}
                {/* <Link href='/solutions/data-analytics' onClick={(e) => menuClicked('data-analytics-and-insights')} className={`${activePage === 'data-analytics-and-insights' ? 'neonButton active' : 'neonButton'}`}>
                    Data Analytics & Insights
                </Link> */}


                


            </div>
        </div>
    )


  return (
    <div className='fixed top-0 w-full backdrop-blur-sm shadow-2xl z-50'>
        {/* Loader */}
        {loading ? <Loader /> : null}
        <div className='flex justify-between md:px-14 lg:px-24 items-center w-full py-4 border-b border-white border-opacity-50 overflow-hidden'>
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
                    <div className={`${showMenu ? 'absolute bg-neutral-950 bg-opacity-90 w-full left-0 top-20 mt-1 z-40' : 'hidden'} md:flex`}>
                        <ul className={`${showMenu ? 'flex-col' : 'flex-row'} flex justify-end `}>
                            <li className="px-4 py-2 transition-all duration-300">
                                <button onClick={(e) => toggleCompanyDropdownState()} className='neonButton'>
                                    <span></span>
                                    <div className='flex items-center gap-1'>Company {companyDropdownState? <FaAngleUp /> : <FaAngleDown /> } </div>
                                </button>
                                {companyDropdownState ? companyDropdown : null}
                            </li>
                            <li className="px-4 py-2 transition-all duration-300">
                                <button onClick={(e) => toggleSolutionsDropdownState()} className='neonButton'>
                                    <span></span>
                                    <div className='flex items-center gap-1'>Solutions {solutionsDropdownState? <FaAngleUp /> : <FaAngleDown /> } </div>
                                </button>
                                {solutionsDropdownState ? solutionsDropdown : null}
                            </li>
                            <li className="px-4 py-2 transition-all duration-300">
                                <Link href='/contact' onClick={(e) => menuClicked('/contact')} className={`${activePage === '/contact' ? 'neonButton active' : 'neonButton'}`}>
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
                <div className='hidden md:block'>
                    {isLoggedin ? 
                        // <ProfileICon />
                        <h1>Icon</h1>
                        : 
                        <Link href='/login' onClick={(e) => setActivePage('login')} className={`${activePage === 'login' ? 'active neonButton' : 'neonButton'}`}>
                            <span></span>
                            Login
                        </Link>
                    }
                </div>
        </div>
        {/* <div className='hidden lg:block absolute mr-6 mt-2 rounded-full bg-neutral-950 right-0 px-12'>
            <div className='flex flex-row items-center gap-2'>
                {activePage}
            </div>            
        </div> */}
        
    </div>
    
  )
}

export default Header
