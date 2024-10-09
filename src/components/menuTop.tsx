"use client";
import React from "react";
import Link from "next/link";

export default function MenuTop() {
      return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">

    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="playfair-display-sc-regular ml-3 text-7xl text-[#474747] text-center mb-2 hover:text-[#AD343E] hover:animate-ping">
        Our Menu
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[18px] text-[#495460]">
       We consider all the drivers of change gives you the  components
       <br />  you need to change to create  a truly happens.
      </p>
    </div>
    {/* nav */}

       <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-3">
            <Link href={'/menu'}> <button className="text-[16] font-bold  text-[#2C2F24]  w-[120px] h-[50px] rounded-full hover:bg-[#AD343E]  focus:bg-[#AD343E] focus:text-[#fff] border-[#474747] border-1 outline outline-1">All</button></Link>
            <Link href={'/menu'}> <button className="text-[16] font-bold text-[#2C2F24]  w-[120px] h-[50px] rounded-full  hover:bg-[#AD343E] focus:bg-[#AD343E] focus:text-[#fff] border-[#474747] border-1 outline outline-1">Breakfast</button></Link>
            <Link href={'/menu'}> <button className="text-[16] font-bold  text-[#2C2F24]  w-[120px] h-[50px] rounded-full hover:bg-[#AD343E]  focus:bg-[#AD343E] focus:text-[#fff] border-[#474747] border-1 outline outline-1">Main Dishes</button></Link>
            <Link href={'/menu'}> <button className="text-[16] font-bold text-[#2C2F24]  w-[120px] h-[50px] rounded-full  hover:bg-[#AD343E] focus:bg-[#AD343E] focus:text-[#fff] border-[#474747] border-1 outline outline-1">Drinks</button></Link>
             <Link href={'/menu'}> <button className="text-[16] font-bold text-[#2C2F24]  w-[120px] h-[50px] rounded-full hover:bg-[#AD343E]  focus:bg-[#AD343E] focus:text-[#fff] border-[#474747] border-1 outline outline-1">Deserts</button></Link>
           </nav>

  </div>
</section>

      );
    }