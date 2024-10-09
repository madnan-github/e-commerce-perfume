"use client";
import { motion } from "framer-motion";
import { BsCupHot } from "react-icons/bs";
import { BiBowlRice } from "react-icons/bi";
import { RiDrinks2Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
export default function BrowsOurMenu() {
  return (
    <section className="text-gray-600 body-font">
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 3 }}
      >
        <div className="container px-2 py-24 mx-auto ">
          
          <div className="text-center mb-20">
            <h1
              className="  sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 transition-all duration-800 ease-in-out  hover:scale-125 hover:text-[#AD343E]
      ">
              Browse Our Menu
            </h1>
          </div>

          <div className="flex flex-wrap sm:-m-4  -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* 1 */}

            <div className=" md:w-1/4 flex flex-col text-center items-center  border-2 rounded-xl  py-10  transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-105">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <BsCupHot className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#2C2F24] text-[24px] title-font font-medium mb-3">
                  Breakfast
                </h2>
                <p className="leading-relaxed text-base">
                  In the new era of technology we
                  <br /> look in the future with certainty
                  <br /> and pride for our life.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className=" md:w-1/4 flex flex-col text-center items-center border-2 rounded-xl  py-10 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-105">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <BiBowlRice className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#2C2F24] text-[24px]  title-font font-medium mb-3">
                  Main Dishes
                </h2>
                <p className="leading-relaxed text-base">
                  In the new era of technology we <br /> look in the future with
                  certainty <br /> and pride for our life.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="md:w-1/4 flex flex-col text-center items-center border-2 rounded-xl  py-10 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-105">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <LuCakeSlice className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#2C2F24] text-[24px]  title-font font-medium mb-3">
                  Drinks
                </h2>
                <p className="leading-relaxed text-base">
                  In the new era of technology we <br /> look in the future with
                  certainty <br />
                  and pride for our life.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className=" md:w-1/4 flex flex-col text-center items-center border-2 rounded-xl  py-10 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-105">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <RiDrinks2Line className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#2C2F24] text-[24px]  title-font font-medium mb-3">
                  Desserts
                </h2>
                <p className="leading-relaxed text-base">
                  In the new era of technology we <br /> look in the future with
                  certainty <br /> and pride for our life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
