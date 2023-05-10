import React from 'react'
import HeroImage from '../assets/Hero.png'
import HowItsWork from '../assets/How it Works.png'
import Navbar from '../component/Navbar/navbar'
import SolutionCard from '../component/SolutionCard/SolutionCard'
export default function index() {
    return (
        <>
            <div className='bg-[#061133]'>
                <Navbar />
                <div className='text-[#fff] flex flex-row  m-auto  w-[70%]  h-80 '>
                    <div className='  relative  lg:w-[70%] md:w-full '>
                        <h1 className='font-inter font-bold text-white text-4xl leading-10  lg:w-[60%] md:w-full'>Equal Access to Justice
                            for Everyone</h1>
                        <p className=' text-xs font-normal leading-5 mt-3  lg:w-[45%] md:w-full'>Confronting important legal matters head on can be a daunting task. Pro Bono Zone empowers you to explore your options in a safe, private and supportive environment. And it is FREE!</p>
                    </div>

                    <div className=' absolute  lg:left-[38%] lg:top-20  lg:w-80 lg:h-80 md:top-48 md:w-full md:h-96 md:left-40'>
                        <img src={HeroImage} className='w-auto h-auto '></img>
                    </div>

                </div>

            </div>
            <div className=' flex  flex-col items-center justify-center sm:flex-col md:flex-row md:justify-start md:items-start lg:flex-row lg:justify-start px-10 py-6' >
                <div className='w-96'>
                    <img src={HowItsWork}></img>
                </div>
                <div className='ml-16   mt-6'>
                    <h1 className='font-bold text-2xl'>How It Works</h1>
                    <li className='text-xs font-normal leading-5'>Select an available 30-minute time slot.</li>
                    <li className='text-xs font-normal leading-5'>Choose your area of interest.</li>
                    <li className='text-xs font-normal leading-5'>Prepare your legal questions.  </li>
                    <li className='text-xs font-normal leading-5'>Arrive 10-15 minutes early.</li>
                    <li className='text-xs font-normal leading-5'>Meet our friendly staff for orientation.</li>
                    <li className='text-xs font-normal leading-5'>Consult with an experienced attorney.</li>
                    <li className='text-xs font-normal leading-5'>Transform your life!</li>

                </div>
            </div>
            <div className='bg-[#F0F4FF] py-6 px-3 justify-center items-center flex flex-row'>
                
                 <SolutionCard />
                 <SolutionCard />
                 <SolutionCard />
                 <SolutionCard />
                 <SolutionCard />
                 
                 </div>
        </>
    )
}
