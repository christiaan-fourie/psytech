import React from 'react'

const Loader = () => {
  return (
    <div className='animate-pulse pt-[50vh] h-screen w-screen glass backdrop-blur-xl z-50'>
        <div className='flex justify-center items-center'>
            <svg className="animate-spin h-8 w-8 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>  
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg><span>Loading...</span>
        </div>
    </div>
  )
}

export default Loader
