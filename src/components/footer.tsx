"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="text-white bg-[#474747] body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      
         <Link href={'/'} className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0 mt-10">
            <Image
              alt="logo"
              width={56}
              height={55}
              src={require("../../public/picture/footer/japanese-food-logo.png")}
            />
            <span className="playfair-display-sc-black-italic ml-3 text-xl text-white">Bistro Bliss</span>
          </Link>

                    {/*  */}
       
        <p className="mt-2 text-sm text-[#ADB29E]">
          In the new era of technology we look a in the future with certainty and pride to for our company and.
        </p>
         {/* icon */}
         <div className="flex gap-2 mt-2 ">
         
         <div className="flex  p-1 bg-[#AD343E] rounded-full">
            <Link href={'/'} >
             <FaFacebookF  className="text-white  w-[27.17] h-[27.17] rounded-full gap-1 "/>
             </Link>
            </div>
            <div className="flex  p-1 bg-[#AD343E] rounded-full">
             <Link href={'/'} className="text-white w-[27.17] h-[27.17] rounded-full ">
             <FaInstagram />
             </Link> 
            </div>
            <div className="flex  p-1 bg-[#AD343E] rounded-full">
             <Link href={'/'} className="text-white w-[27.17] h-[27.17] rounded-full ">
             <CiTwitter />
             </Link> 
            </div>
            <div className="flex  p-1 bg-[#AD343E] rounded-full">
             <Link href={'/'} className="text-white w-[27.17] h-[27.17] rounded-full ">
             <FaGithub />
             </Link> 
             </div>
           </div>
            {/* icon end */}
      </div>
{/* 1 */}
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
       
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="dm-sans title-font font-medium text-white tracking-widest text-sm mb-3">
            Pages
          </h2>
          <nav className="list-none mb-10 cursor-pointer">
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Home</p></Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">About</p></Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Menu</p></Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Pricing</p></Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Blog</p></Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Content</p></Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Delivery</p></Link>
            </li>
          </nav>
        </div>
        {/* 2 */}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="dm-sans title-font font-medium text-white tracking-widest text-sm mb-3">
           Utility Pages
          </h2>
          <nav className="list-none mb-10 cursor-pointer ">
            <li>
                <Link href={'/'}>
                <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Start Here</p>
                </Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Styleguide</p>
              </Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Password Protected</p>
              </Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">404 Not Found</p>
              </Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Licenses</p>
              </Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">Changelog</p>
              </Link>
            </li>
            <li>
            <Link href={'/'}>
              <p className="text-[#DBDFD0] hover:text-gray-800 py-2">View More</p>
              </Link>
            </li>
          </nav>
        </div>


<div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
<Link href={'/'}>
<p className="text-[16] text-white bold tracking-widest text-sm mb-3 cursor-pointer">
            Follow Us On Instagram
          </p></Link>
<div className='flex gap-2'>
<div className='flex'>
          <Link href={'/menu'}>
          <Image 
          className='flex rounded-lg w-[400] h-[400]  hover:animate-ping'
             alt="name"
             width={400}
             height={400}
             src={require("../../public/picture/footer/steve-1.png")}/>
             </Link>
          </div>
          <div className='flex'>
          <Link href={'/menu'}>
          <Image 
          className='flex rounded-lg w-[400] h-[400]  hover:animate-ping'
               alt="name"
               width={400}
               height={400}
               src={require("../../public/picture/footer/ella-olsson-3.png")}/>
                </Link>
          </div>
</div>
  <div className='flex gap-2 mt-2 rounded-lg'>
            <div className='flex'>
            <Link href={'/menu'}>
            <Image 
            className='flex rounded-lg w-[400] h-[400] hover:animate-ping'
               alt="name"
               width={400}
               height={400}
               src={require("../../public/picture/footer/fries-2.png")}/>
                </Link>
            </div>
            <div>
            <Link href={'/menu'}>
            <Image 
             className='flex rounded-lg w-[400] h-[400] hover:animate-ping'
               alt="name"
               width={400}
               height={400}
               src={require("../../public/picture/footer/ash-4.png")}/>
                </Link>
            </div> 
    </div>       
      
</div>


<p className="text-sm text-[#ADB29E] sm:ml-6 sm:mt-0 mt-4">
       Copyright © 2023 Hashtag Developer. All Rights Reserved
             </p>

      </div>
    </div>
  </footer>
  
  )
}
