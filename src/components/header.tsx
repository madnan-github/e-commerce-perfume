import Link from 'next/link'
import React from 'react'
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className="z-10 bg-white font-Montserrat flex sticky top-0 justify-between items-center px-20 w-[1366px] h-[63.64px]">
    <Link href='/'><div className='flex text-[28px] font-extrabold '>
        <div className='text-[#000000]'>GUI</div>
        <div className='text-[#787777]'>COS</div>
        <div className='text-[#B4B2B2]'>METIQUE</div>
    </div></Link>
    <ul className='flex space-x-8 items-center max-w-464 font-bold text-[#333333] text-sm'>
        <Link className='hover:text-[#F1B919] hover:underline' href={'/'}><li>VISAGE</li></Link>
        <Link className='hover:text-[#F1B919] hover:underline'href={'/'}><li>CORPS</li></Link>
        <Link className='hover:text-[#F1B919] hover:underline' href={'/'}><li>PARFUMS</li></Link>
        <Link className='hover:text-[#F1B919] hover:underline' href={'/'}><li>A PROPOS</li></Link>
        <Link className='hover:text-[#F1B919] hover:underline' href={'/'}><li>AIDE</li></Link>

    </ul>
    <ul className='flex space-x-4 items-center max-w-464  font-bold text-[#333333] text-sm'>
        <Link className='hover:text-[#F1B919] hover:underline'href={'/'}><li>MON COMPTE</li></Link>
        <Link href={'/'}><li className='bg-[#FDECBE] w-[109.05px] h-[30px] rounded-2xl px-3 py-1'>PANIER 0</li></Link>
        <div className='flex relative justify-end items-center'>
            <Link href={'/'}><li><input type="search" placeholder='Search'className='w-[164px] h-[35px] px-3 text-sm font-blod rounded-3xl bg-[#C4C4C4] text-[#484343]'/></li></Link>
            <div className='flex absolute mr-3 text-[22px]'><IoSearch /></div>
        </div>
    </ul>
    
    </header>
 )

}

export default Header