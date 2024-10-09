"use client"
import React from 'react'
import Link from 'next/link'
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
export default function TopHeader() {
  return (
    <footer className="text-white body-font bg-[#474747]">
    <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
      <Link href={'/'} className="flex items-center md:justify-start justify-center text-white gap-2">
            <HiOutlinePhone className='w-5 h-5 hover:animate-ping' />
            (414) 857-0107
      </Link>
        
      <Link href="mailto:yummy@bistrobliss" className="flex items-center md:justify-start justify-center text-white ml-3 gap-2">
   
            <MdOutlineMail className='w-5 h-5 hover:animate-ping' />
                yummy@bistrobliss
            </Link>
           
     {/* right side */}

      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
       {/* fb */}
        <div className="flex  p-1 bg-[#838181]  rounded-full ">
            <Link href={'/'} >
             <FaFacebookF  className="text-white  w-[27.17] h-[27.17] rounded-full  hover:animate-spin"/>
             </Link>
            </div>
        {/* twi */}
        <div className="flex  p-1 bg-[#838181]  rounded-full">
             <Link href={'/'} className="text-white w-[27.17] h-[27.17] rounded-full hover:animate-spin ">
             <FaInstagram />
             </Link> 
            </div>
        {/* inta */}
        <div className="flex  p-1 bg-[#838181]  rounded-full">
             <Link href={'/'} className="text-white w-[27.17] h-[27.17] rounded-full hover:animate-spin">
             <CiTwitter />
             </Link> 
            </div>
        {/* lin */} 
        <div className="flex  p-1 bg-[#838181]  rounded-full">
             <Link href={'/'} className="text-white w-[27.17] h-[27.17] rounded-full  hover:animate-spin"> 
             <FaGithub />
             </Link> 
             </div>
              </span>
    </div>
  </footer>
  
  )
}
