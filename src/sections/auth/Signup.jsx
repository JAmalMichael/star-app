import { FaChevronLeft } from "react-icons/fa"
import { TiInfoLarge } from "react-icons/ti"
import {FaArrowRight} from "react-icons/fa"
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


const Signup = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="w-[30%] h-screen bg-red-300 bg-gradient-to-b from-[#59599B] to-[#0F0C29]
    via-[#24243E] flex items-center justify-between flex-col text-white p-10">
    <img 
    src="../assets/logo.jpg"
    alt="logo"
    width={146}
    height={86}
    className=""
    />
    <img 
    src="../assets/handshake.png"
    alt="logo"
    className="w-[1100px] h-[600px] absolute top-0"
    />
    <div className="text-center">
    <h2 className="text-3xl leading-[46px] text-bold font-[Zen Kaku Gothic Antique]">
    Partnership for Business Growth
    </h2>
    <p className="text-sm">
    Partnerships are pivotal for business growth, 
    enabling companies to leverage mutual strengths, share risks, and capitalize on opportunities.
    </p>
    </div>
   
    </div>
    <div className="w-[70%] h-screen bg-[#F9F9FA] z-20 p-4 flex flex-col justify-between">
    <div className="flex items-center justify-between ">
    <button className="flex items-center text-sm">
     <FaChevronLeft /> Return Home
    </button>
    <button className="text-sm">
      Already a Member? <span className="font-bold text-black">LOG IN NOW</span>
    </button>
    </div>
    <div className="flex items-center flex-col">
      <h2 className="font-bold mb-1">BECOME AN EXCLUSIVE MEMBERS</h2>
      <p className="mb-2">SIGN UP and join the partnership </p>
      <form className="flex flex-col">
      <div className="relative">
        <FaUser className="text-gray-300 absolute top-7 left-3"/>
        <input type="text" placeholder= "Johnson Doe" className="border bg-white w-[400px] h-[70px] pl-10 mb-4"/>

      </div>
      <div className="relative">
      <MdEmail  className="text-gray-300 absolute top-7 left-3"/>
        <input type="email" placeholder="example@email.com" className="border bg-white w-[400px] h-[70px] pl-10 mb-4"/>
      </div>
        <input type="password" 
        placeholder= "******"
        className="border bg-white w-[400px] h-[70px] p-4 mb-4"/>
        <button className="border w-[400px] h-[70px] p-4 bg-[#24243E] text-white flex items-center justify-between">
         Become a Member <FaArrowRight /> </button>
      </form>
    </div>
    <div className="flex items-center justify-between text-sm">
    <p>Copyright 2021 - 2022 5Starcompany. All rights Reserved</p>
    <button className="text-sm flex items-center">
     <TiInfoLarge /> Need help?
    </button>
    </div>
    </div>
    </div>
  )
}

export default Signup