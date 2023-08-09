'use client'

import Link from 'next/link'
import Logo from './Logo'

import { useState } from 'react'

import { FaPaperPlane, FaSpinner } from 'react-icons/fa'

const Form = () => {
  // Form data
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [agree, setAgree] = useState('no')
  const [signUp, setSignUp] = useState('no')
  const [submitted, setSubmitted] = useState(false)

  // Message
  const [message, setMessage] = useState('')

  // Errors
  const [errors, setErrors] = useState([])
  
  // Post To API
  const postToApi = async () => {
    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, interest }),
      });

      if (res.ok) {
        setMessage("Thank You, we will get back to you soon!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle agreement
  const handleAgreement = (e) => {
    if (e.target.checked) {
      setAgree('yes')
    } else {
      setAgree('no')
    }
  }

  // Handle sign up
  const handleSignUp = (e) => {
    if (e.target.checked) {
      setSignUp('yes')
    } else {
      setSignUp('no')
    }
  }

  // Once form is submitted, start sending
  const handleSubmit = async (e) => {
    // Prevent the page from reloading
    e.preventDefault()
    
    // If the fields are not empty, send start
    if (name !== '' && email !== '' && interest !== 'none' && agree !== 'no') {
      // Set message to checking
      setMessage('Sending...')
    }

    // Check if name is valid
    if (name.length < 3) {
      setErrors([...errors, 'Name must be at least 3 characters'])
    } else {
      setErrors(errors.filter(error => error !== 'Name must be at least 3 characters'))
    }
    
    // Check if email is valid
    if (email.includes(' ')) {
      // Remove space
      setEmail(email.replace(' ', ''))
    }
    if (!email.includes('@')) {
      setErrors([...errors, 'Email must include @ symbol'])
    } else {
      setErrors(errors.filter(error => error !== 'Email must include @ symbol'))
    }
    // Check if interest is not none
    if (interest === 'none') {
      setErrors([...errors, 'Please select an interest'])
    } else {
      setErrors(errors.filter(error => error !== 'Please select an interest'))
    }
    // Check if user has agreed to terms
    if (agree === 'no') {
      setErrors([...errors, 'Please agree to terms'])
    } else {
      setErrors(errors.filter(error => error !== 'Please agree to terms'))
    }

    // If there are no errors, wait 5seconds and send
    if (errors.length === 0) {
      setTimeout(() => {
        if (errors.length === 0) {
          // Send to API
          postToApi()
          setSubmitted(true)
          // Reset form
          setName('')
          setEmail('')
          setInterest('none')
          setAgree('no')
          setSignUp('no')
        }
      }, 5000)
    }

    // ...
    // 2. Send email to user
    // ...
    // 3. Send email to admin
    // ...
    
    
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='p-12 md:mt-24 mb-12 glassLight'>
              <div className='flex flex-col justify-center items-center space-y-4'>
                    <Logo />
                    
                      {message && <p className='text-xs text-green-500'>{message}</p>}                
                      <input type="text" placeholder='Name' className={message.includes('name') ? 'glassLight border-1 border-red-500': 'glassLight' } value={name} onChange={(e) => setName(e.target.value)} />
                      {errors.includes('Name must be at least 3 characters') && <p className='text-xs text-red-500'>Name must be at least 3 characters</p>}
                      <input type="email" placeholder='Email' className='glassLight' value={email} onChange={(e) => setEmail(e.target.value)} />
                      {errors.includes('Email must include @ symbol') && <p className='text-xs text-red-500'>Email must include @ symbol</p>}
                      {/* Selection of interest */}
                      <select name="" id="" className='glassLight' value={interest} onChange={(e) => setInterest(e.target.value)}>
                        <option className='my-10' value="none">Select Option</option>
                        <option value="invest">Investment</option>
                        <option value="career">Careers</option>
                        <option value="partner">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.includes('Please select an interest') && <p className='text-xs text-red-500'>Please select an interest</p>}
                      <div className='flex flex-col gap-2 items-start'>
                          {/* Select agree to privacy policy and terms and conditions */}
                          <div className='flex gap-2 items-center'>
                            <input type="checkbox" name="" id="" className='' value={agree} onChange={handleAgreement} />
                            <p className='text-xs'>I agree to the <Link href="/privacy-policy" className='text-[#2daa52]'>Privacy Policy</Link> and <Link href="/terms-and-conditions" className='text-[#2daa52]'>Terms and Conditions</Link></p>
                          </div>
                          {errors.includes('Please agree to terms') && <p className='text-xs text-red-500'>Please agree to terms</p>}

                          {/* Sign Up for Newsletter */}
                          <div className='flex gap-2 items-center'>
                            <input type="checkbox" name="" id="" className='' value={signUp} onChange={handleSignUp} />
                            <p className='text-xs'>Sign up for our <span className='text-[#2daa52]'>Newsletter</span> - Optional</p>
                          </div>

                      </div>                    

                      {/* Submit button */}
                      {message === 'Sending...' ? <button type="submit" className='glassLight flex justify-center items-center gap-2 bg-[#2daa52] text-white px-4 py-2 rounded-md'> <FaSpinner className='animate-spin' /> </button> : 
                      <button
                          disabled={submitted ? true : false} 
                          type="submit" 
                          className='mx-auto bg-[#2daa52] hover:bg-[#2daa5200] text-neutral-950 hover:text-[#2daa52] border glassLight border-[#2daa52] px-6 py-2 my-6 flex items-center justify-center gap-2 hover:gap-4 transition-all' 
                      >
                        <FaPaperPlane />Send
                      </button>
                      }


                      
              </div>
        </form>
    </div>
  )
}

export default Form

