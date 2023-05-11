import React from 'react'
import Logo from '../../assets/Group 6.png'

export default function navbar() {
  return (
    <div className='flex flex-row justify-between items-center px-16 py-6 '>
    <div className=''>
      <img src={Logo} className='w-20'></img>
    </div>
    <div className='flex flex-row justify-center items-center space-x-6 text-white text-sm '>
      <p>Home</p>
      <p>About us</p>
      <p>FAQ</p>
      <p>Sponcers</p>
      <p>Contact</p>
      <button className='border border-white px-8 py-2 rounded-sm '>Login</button>
      <button className='bg-[#4270FF] px-8 py-2 rounded-sm'>Sign Up</button>
    </div>
    </div>
  )
}
