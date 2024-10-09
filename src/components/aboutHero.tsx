"use client"
import Image from 'next/image'
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

export default function AboutHero() {
  return (
   <>
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
    <Image 
        alt='about-hero'
        src={require('../../public/picture/about/about-hero.png')}
        width={599}
        height={566}
             />
        {/* box */}

        <div className='absolute top-64 left-40 bg-[#474747] w-[411px] h-[321px] rounded-2xl hover:animate-bounce'>
        <h1 className='text-[#ffffff] text-[24px] font-bold my-10 ml-12'>Come and visit us</h1>
        <p className='flex text-[16px] text-[#F9F9F7] mt-5 ml-12'>
        <HiOutlinePhone className='w-7 h-7'/>
            <span className='ml-5'>(414) 857-0107</span>
        </p>
        <p className='flex text-[16px] text-[#F9F9F7] mt-5 ml-12'>
       
            <MdOutlineMail className='w-8 h-8'/>
            <span className='ml-5'>happytummy@restaurent.com</span>
        </p>
        <p className='flex text-[16px] text-[#F9F9F7] mt-5 ml-12'>
       
            <HiOutlineMapPin className='w-8 h-8'/>
            <span className='ml-5'>837W. Marshall Lane Marshalltown,<br/>
            IA 50158, Los Angeles</span>
        </p>
        </div>
        {/* box end */}
     </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

      <h1 className="playfair-display-sc-black-italic title-font sm:text-4xl md:text-5xl mb-4 font-medium text-gray-900 hover:animate-bounce hover:text-[#AD343E]">
       We provide healthy
        <br className="hidden lg:inline-block" />
        food for your family.
      </h1>
     
      <p className="mb-8 leading-relaxed text-[18] text-[#2C2F24] font-semibold">
      Our story began with a vision to create a unique dining experience that merges find dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary cultre, we aim to honor our local roots while infucing a global palate.
      </p>
      <p className="mb-8 leading-relaxed text-[16] text-[#414536]">
      At place, we belive that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
      </p>

    </div>
  </div>
</section>

   </>
  )
}
