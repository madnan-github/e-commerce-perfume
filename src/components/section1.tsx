"use client";
import Image from "next/image"
import { motion } from "framer-motion";
export default function Section1() {
    return (
        <main>
            <div className='max-w-[1366px] mx-auto font-barlow'>
                <h1 className='text-2xl text-center mt-10 py-10 font-Montserrat font-bold animate-bounce'>
                    TENDANCES
                </h1>
            </div>
            <motion.div
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}
            >
                <div className='max-w-[910px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-[20px] font-barlo'>
                    {/* 1 */}
                    <div>
                        <div className="shadow-lg overflow-hidden rounded-2xl items-center">
                            <Image width={280} height={280} alt="product pic1"
                                src="/assets/product1.png"
                                className=" hover:scale-125 duration-1000"/>
                        </div>
                        <div>
                            <h3 className="p-4 text-sm text-[#828282]">Gel de Douche</h3>
                            <h2 className="px-4 text-lg font-semibold leading-4 text-[#333333]">Gel de Douche 1L + crème 500 mL</h2>
                            <p className="p-4 font-semibold leading-4 text-[#333333]">5000 FCFA</p>
                            <button className="w-[195px] h-[40px] ml-9 shadow-2xl text-[#FAD261] text-xs font-semibold px-4 rounded-2xl bg-[#333333]">Ajouter au panier</button>
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className="shadow-lg overflow-hidden rounded-2xl items-center">
                            <Image width={280} height={280} alt="pic"
                                src="/assets/product2.png"
                                className="hover:scale-125 duration-1000 " />
                        </div>
                        <h3 className="p-4 text-sm text-[#828282]">Gel de Douche</h3>
                        <h2 className="px-4 text-lg font-semibold leading-4 text-[#333333]">Gel de Douche 1L + crème 500 mL</h2>
                        <p className="p-4 font-semibold leading-4 text-[#333333]">7000 FCFA</p>
                        <button className="w-[195px] h-[40px] ml-9 shadow-2xl text-[#FAD261] text-xs font-semibold px-4 rounded-2xl bg-[#333333]">Ajouter au panier</button>
                    </div>
                    {/* 3 */}
                    <div>
                        <div className="shadow-lg overflow-hidden rounded-2xl items-center">
                            <Image width={280} height={280} alt="pic"
                                src="/assets/product3.png"
                                className="hover:scale-125 duration-1000" />
                        </div>
                        <h3 className="p-4 text-sm text-[#828282]">Girl Cute Pic</h3>
                        <h2 className="px-4 pr-12 text-lg font-semibold leading-4 text-[#333333]">Christian Dior Sauvage 200 mL</h2>
                        <p className="p-4 font-semibold leading-4 text-[#333333]">15.000 FCFA</p>
                        <button className="w-[195px] h-[40px] ml-9 shadow-2xl text-[#FAD261] text-xs font-semibold px-4 rounded-2xl bg-[#333333]">Ajouter au panier</button>
                    </div>
                </div>
                </motion.div>
                <div className="relative -top-52 -z-10 w[1364] h-[260px] bg-gradient-to-t from-[#17B7CD] to-[#FFFFFF] ">
            </div>
        </main>
    )
}
