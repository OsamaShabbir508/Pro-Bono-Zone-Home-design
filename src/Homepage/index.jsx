import React from "react";
import Navbar from "../component/Navbar/navbar";
import SolutionCard from "../component/SolutionCard/SolutionCard";
import Button from "../component/button/button";
import OfferCard from "../component/OfferCard/OfferCard";
import HeroImage from "../assets/Hero.png";
import YourSolutionImage from "../assets/YourSolution.png";
import HowItsWork from "../assets/HowitWorks.png";
import YourAdvocate from "../assets/YourAdvocate.png";
import FooterLogo from "../assets/Group6.png";
import Location from "../assets/Location.png";
import Youtube from "../assets/Youtube.png";
import LinkIn from "../assets/LinkIn.png";
import LinkedinWhite from "../assets/Linkedin White.png";
import YoutubeWhite from "../assets/Youtube White.png";
import FaceBookWhite from "../assets/FaceBook White.png";
import FaceBook from "../assets/Facebook.png";
import Linkedin from "../assets/Linkedin.png";
import Time from "../assets/Time.png";
import Date from "../assets/Date.png";
import LocationIcon from "../assets/Location-icon.png";
import PhoneIcon from "../assets/phone-icon.png";
import EmailIcon from "../assets/email-icon.png";
import TheProblem from "../assets/TheProblem.png";
import Model from "../assets/Model.png";
import Procrastination from "../assets/Procrastination.png";
import Solution from "../assets/Solution.png";
import Tick from "../assets/Tick.png";


export default function index() {
  return (
    <>
      <div className="bg-[#061133] py-4">
        <Navbar />

        <h1 className="text-center sm:text-center md:text-center lg:text-left font-inter font-bold text-white text-4xl leading-10  lg:w-[600px] w-full  my-1 lg:ml-44">
          EQUAL ACCESS TO JUSTICE FOR EVERYONE
        </h1>

        <div className=" flex flex-col-reverse  items-center lg:flex lg:flex-row lg:items-start mx-4 lg:ml-44 ">
          <p className=" text-xs text-white font-normal leading-5 mt-5 w-full  text-center lg:text-left  lg:w-[400px] ">
            Confronting important legal matters head on can be a daunting task.
            Pro Bono Zone empowers you to explore your options in a safe,
            private and supportive environment. And it is FREE!
          </p>

          <img src={HeroImage} className="w-[500px]"></img>
        </div>
      </div>
      <div className=" flex  flex-col items-center justify-center  sm:flex-col md:flex-row md:justify-start md:items-start  lg:flex-row lg:justify-start  px-10 py-6">
        <div className="w-64 md:w-96 lg:w-96">
          <img src={HowItsWork}></img>
        </div>
        <div className="ml-0 md:ml-16 lg:ml-16   mt-6 ">
          <h1 className="font-bold text-2xl">HOW IT WORKS </h1>
          <li className="text-xs font-normal leading-5">
            Select an available 30-minute time slot.
          </li>
          <li className="text-xs font-normal leading-5">
            Choose your area of interest.
          </li>
          <li className="text-xs font-normal leading-5">
            Prepare your legal questions{" "}
          </li>
          <li className="text-xs font-normal leading-5">
            Arrive 15 minutes early.
          </li>
          <li className="text-xs font-normal leading-5">
            Meet our friendly staff for orientation.
          </li>
          <li className="text-xs font-normal leading-5">
            Consult with an experienced attorney
          </li>
          <li className="text-xs font-normal leading-5">Change your life!</li>
          <div className="mt-4">
            <Button buttonText={"Schedule a Free Consultation"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-7 bg-[#F0F4FF] items-center">
        <h1 className="text-3xl font-bold">COMMON PROBLEMS</h1>
        <div className="py-6 px-3  items-center flex flex-row justify-center  flex-wrap">
          <SolutionCard
            icon={TheProblem}
            heading={"ANXIETY"}
            para="Why do we hesitate to talk with an attorney? We are embarrassed.
            We fear judgement and insensitivity. We avoid change and commitment.
            We worry about the cost."
          />
          <SolutionCard
            icon={Procrastination}
            heading={"PROCRASTINATION"}
            para={
              "So what do we do? We put off potentially life-changing action and remain stuck indefinitely in an unresolved situation."
            }
          />
          <SolutionCard
            icon={Model}
            heading={"TRANSITION "}
            para="Finding an attorney that we can relate to and who has
            expertise in our
            area of need is crucial. There may be times when we need to make a switch."
          />
          <SolutionCard
            icon={Solution}
            heading={"EMERGENCY "}
            para=" There may also be times when a legal situation is thrust upon
            us suddenly and we don't know where to start or who to talk to"
          />
        </div>
      </div>

      <div className="flex  flex-col items-center justify-center sm:flex-col md:flex-row md:justify-evenly md:items-center lg:flex-row lg:items-center lg:justify-evenly mx-4 px-0 py-0 md:px-8 md:py-20 lg:px-8 lg:py-20">
        <div className=" sm:w-full md:w-[50%] lg:w-[50%] ">
          <h1 className="text-2xl font-bold text-center mt-2 md:text-left lg:text-left ">A SMART SOLUTION</h1>
          <p className="mt-8 text-[#414141]">
            Fear is a formidable opponent. But we have the power to change our
            trajectory. Pro Bono Zone gives you a convenient way to get valuable
            insights into your circumstances in a private and safe environment.
            Any legal issue can be covered in your FREE 30-minute consultation.
            You deserve an opinion. We offer the following at a neutral venue:
          </p>
          <div className=" w-72 sm:w-96 md:w-96 lg:w-96 mt-6   flex flex-row justify-between ">
            <div className="space-y-2">
              <div className="flex  flex-row items-center flex-wrap  ">
                <p className=" flex  flex-col items-center justify-center  bg-[#4270FF]  text-white text-2xl  w-4 h-4 rounded-lg ">
                  <img src={Tick}></img>
                </p>
                <p className="ml-2 text-xs md:text-lg lg:text-lg">Experience</p>
              </div>
              <div className="flex  flex-row items-center flex-wrap  ">
                <p className=" flex  flex-col items-center justify-center  bg-[#4270FF]  text-white text-2xl  w-4 h-4 rounded-lg ">
                <img src={Tick}></img>

                </p>
                <p className="ml-2 text-xs md:text-lg lg:text-lg">
                  Competence{" "}
                </p>
              </div>
              <div className="flex  flex-row items-center flex-wrap  ">
                <p className=" flex  flex-col items-center justify-center  bg-[#4270FF]  text-white text-2xl  w-4 h-4 rounded-lg ">
                <img src={Tick}></img>

                </p>
                <p className="ml-2 text-xs md:text-lg lg:text-lg">Privacy </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex  flex-row items-center flex-wrap  ">
                <p className=" flex  flex-col items-center justify-center  bg-[#4270FF]  text-white text-2xl  w-4 h-4 rounded-lg ">
                <img src={Tick}></img>

                </p>
                <p className="ml-2 text-xs md:text-lg lg:text-lg">
                  Sensitivity{" "}
                </p>
              </div>
              <div className="flex  flex-row items-center flex-wrap  ">
                <p className=" flex  flex-col items-center justify-center  bg-[#4270FF]  text-white text-2xl  w-4 h-4 rounded-lg ">
                <img src={Tick}></img>

                </p>
                <p className="ml-2 text-xs md:text-lg lg:text-lg">
                  Affordability (It’s free!)
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-[#414141]">
            Ten minutes with a law student at a "free legal aid" community
            clinic is fine if you want to understand who gets grandma's
            furniture, but if you need to take care of something important or
            potentially life-changing, consult with a competent professional.
            It's free
          </p>
          <div className=" flex justify-center mt-5 md:mt-8  md:justify-start lg:mt-8 lg:justify-start ">
            <Button buttonText={"Schedule a Free Consultation"} />
          </div>{" "}
        </div>
        <div className=" sm:w-full md:w-[40%] mt-4 lg:w-[40%]  ">
          <img
            src={YourSolutionImage}
            className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]  "
          ></img>
        </div>
      </div>

      <div className="  py-10 relative ">
        <img
          src={YourAdvocate}
          className="absolute -z-20 h-[100%] md:w-[100%] lg:[100%]"
        ></img>
        <h1 className="text-3xl text-white font-bold mt-4 text-center py-6 ">
          {" "}
          Your Advocate
        </h1>
        <p className=" text-center text-white text-sm mt-4 px-5 md:px-36 lg:px-36">
          Our vetting process ensures that your advocate will be a discrete and
          sensitive attorney from one of the most experienced firms who are
          committed to community service. You will have a full 30 minutes to
          discuss any legal questions on your mind.
        </p>
        <div className="flex flex-row justify-center  flex-wrap  mt-8">
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>

      <div className=" py-16 bg-slate-100  flex  flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold mt-4 text-center py-6 ">
          Schedule A Consultation
        </h1>
        <p className=" text-center  text-sm mt-2 px-5 mb-4 md:px-64 lg:px-64">
          This event will last just 4 hours, so we have limited openings. If you
          need legal advice, don't delay. Take advantage of this opportunity to
          move forward. You owe it to yourself.
        </p>

        <div className="bg-[#ffff] px-4 py-4 md:py-10 md:px-16 lg:py-10 lg:px-16  w-[100%] md:w-[90%] lg:w-[70%] flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row">
          <div className="w-[100%] md:w-[50%] lg:w-[50%]  ">
            <h1 className="text-[#061133] font-bold text-2xl">Event Venue </h1>
            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-7  ">
                <img src={Date}></img>
              </p>
              <div className="flex  flex-col ">
                <p className="ml-2 text-[#414141] text-sm">Date </p>
                <p className="ml-2 text-[#061133] text-sm">
                  Friday, June 23rd{" "}
                </p>
              </div>
            </div>
            <div className="flex  flex-row items-center flex-wrap mt-4 ">
              <p className=" flex  flex-col items-center justify-center  w-7 ">
                <img src={Time}></img>
              </p>
              <div className="flex  flex-col ">
                <p className="ml-2 text-[#414141] text-sm">Time </p>
                <p className="ml-2 text-[#061133] text-sm">10PM - 2AM</p>
              </div>
            </div>{" "}
            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-7 ">
                <img src={Location}></img>
              </p>
              <div className="flex  flex-col ">
                <p className="ml-2 text-[#414141] text-sm">Location </p>
                <p className="ml-2 text-[#061133] text-sm">
                  Suite 251, 2356 Main Street, Lehi, Utah{" "}
                </p>
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-[#061133] font-bold text-2xl">
                Social Media{" "}
              </h1>
              <div className="flex fle-row space-x-2 w-6 mt-2">
                <img src={FaceBook}></img>
                <img src={Linkedin}></img>
                <img src={Youtube}></img>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] lg:w-[50%]  ">
            <div className="flex flex-col justify-center md:flex-row lg:flex-row  flex-wrap  ">
              <input
                type="text"
                className="py-2 px-4 bg-gray-100 text-sm text-[#414141] rounded-sm m-2"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="py-2 px-4 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                placeholder="First Name"
              ></input>
            </div>
            <div className="flex flex-col justify-center md:flex-row lg:flex-row  flex-wrap  ">
              <input
                type="text"
                className="py-2 px-4 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="py-2 px-4 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                placeholder="First Name"
              ></input>
            </div>
            <div className="flex flex-col justify-center md:flex-row lg:flex-row  flex-wrap  ">
              <input
                type="text"
                className="py-2 px-4 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="py-2 px-4 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                placeholder="First Name"
              ></input>
            </div>

            <div className="flex flex-col justify-center md:flex-row lg:flex-row  flex-wrap  ">
              <textarea
                name=""
                id=""
                placeholder="How did you hear about Pro Bono Zone?"
                className="bg-gray-100 px-4 m-auto w-full md:w-96 lg:w-96 h-20 md:m-2"
              ></textarea>
            </div>
            <div className=" flex justify-center mt-6  md:justify-center lg:justify-center ">
              <button className="bg-[#4270FF] w-full py-2 rounded-sm text-white text-sm">
                Count Me In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#061133] ">
        <div className="flex flex-row justify-center items-center flex-wrap pt-8  m-2 ">
          <h1 className="text-2xl font-bold text-white px-5 ">
            Newsletter Sign Up
          </h1>
          <div className="bg-gray-600 w-72 sm:w-96 md:w-96 lg:w-96  h-12 rounded-sm  md:m-5  lg:m-5">
            <input
              placeholder="Enter your email here..."
              className="w-48 sm:w-72 md:w-72 lg:w-72 h-12 px-4 text-sm text-[#FFFFFF] bg-transparent border-none outline-none"
            />
            <button className="bg-[#4270FF] rounded-md px-5 py-2  text-sm text-white">
              Register
            </button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center   md:flex-row  md:justify-evenly  lg:flex-row  lg:justify-evenly   md my-8 py-5">
          <div className="text-white w-[250px] sm:[280px]  md:w-auto lg:w-auto">
            <img src={FooterLogo} className="w-20 md:w-40 lg:w-40"></img>
            <p className="mt-3">
              © Copyright 2023 - ProBonoZoneTM
              <br />
              All Rights Reserved{" "}
            </p>
            <div className="flex fle-row space-x-2 w-6 mt-2">
              <img src={FaceBookWhite}></img>
              <img src={LinkedinWhite}></img>
              <img src={YoutubeWhite}></img>
            </div>
          </div>
          <div className="text-white  w-[250px] sm:[280px]  md:w-auto lg:w-auto">
            <h1 className="font-semibold">Company</h1>
            <p className="mt-3">Home</p>
            <p className="mt-3">About us</p>
            <p className="mt-3">FAQ</p>
            <p className="mt-3">Sponcers</p>
            <p className="mt-3">Contact</p>
          </div>

          <div className="text-white  w-[250px] sm:[280px]  md:w-auto lg:w-auto">
            <h1 className="font-semibold">Support</h1>
            <p className="mt-3">Help Center</p>
            <p className="mt-3">Terms or Service</p>
            <p className="mt-3">Legal</p>
            <p className="mt-3">Privicy Policy</p>
          </div>

          <div className="text-white  w-[250px] sm:[280px]  md:w-auto lg:w-auto">
            <h1 className="font-semibold">Reach us</h1>
            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-4  ">
                <img src={EmailIcon}></img>
              </p>
              <p className="ml-2 text-white text-sm">hello@PBZ.com </p>
            </div>
            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-4  ">
                <img src={PhoneIcon}></img>
              </p>
              <p className="ml-2 text-white text-sm">+1 987 654 3210 </p>
            </div>
            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-4  ">
                <img src={LocationIcon}></img>
              </p>
              <p className="ml-2 text-white text-sm">
                SLC Hilton 2345 Skyview Ave. SLC.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
