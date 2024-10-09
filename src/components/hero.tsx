"use client"
import Image from 'next/image'

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={require('../../public/picture/header-pics/hero-bg.png')}
        alt="Various food items including vegetables, salad, and dips"
        layout="fill"
        objectFit="cover"
        
      />
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="text-center  mx-auto p-6  bg-opacity-5 rounded-lg">
        <motion.div
    initial={{x:-1000}}
    animate={{x: [ 900, 0]}}
    transition={{duration:2, delay:0.5}}
    whileHover={{scale:0.9}}>

        <h1 className=" text-[#2C2F24] md:text-7xl font-serif mb-4 ">Best food for <br />your taste
          </h1>
          </motion.div>
          <p className="text-lg mb-6">
            Discover delectable cuisine and unforgettable <br /> moments in our welcoming, culinary haven.
          </p>
          <div className="space-x-4">
           
        <button className="animate-pulse bg-[#AD343E] hover:bg-[#f03f4e] rounded-full font-bold text-white px-4 py-2">
             Book A Table
           </button>
           <button className= "font-bold text-[#182226] border-1 border-[#2C2F24] py-2 px-4 focus:outline hover:bg-gray-200 rounded-full outline outline-1">
             Explore Menu
           </button>
          </div>

        </div>
      </div>
    </div>
  )
}