import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import { BsGlobe2 } from "react-icons/bs";
import Link from "next/link";

export default function Footernew() {
    return (
        <>
            {/* 1 */}
            <div className='flex w-[1366px] h-[86px] items-center mt-10 px-40 font-Montserrat bg-gradient-to-b from-[#F5E8CB] to-[#FFFFFF]'>
                <div className="w-[60%]">
                    <p className="text-lg font-Montserrat">Souscrire a la newsletter pour rester a jour sur les derniers produits, des promtions spéciales et autres informations pour votre consommation</p>
                </div>
                <div className="flex relative w-[40%] justify-end items-center" >
                    <input type='email' placeholder="@EMAIL" className=" w-[369px] h-[32.97px] px-4 ml-2 text-sm font-semibold text-[#A09D94] rounded-3xl"></input>
                    <div className="flex absolute mr-6"><MdEmail /></div>
                </div>
            </div>
            {/* 2 */}
            <div className='w-[1366px] h-[318px] text-center mt-16 px-40 text-2xl font-bold font-Montserrat tracking-widest '>
                LEURS AVIS
                <div className='flex justify-center text-start mt-6 w-[1034px] h-[210px] text-[#000000] font-extralight tracking-wider'>

                    <div className="bg-[#F1EFEF] mx-8 text-[10px] ">
                        <div className="text-sm p-4">Bons produits, gamme de plus en plus large. Une vraie recherche sur le zéro déchet, avec le souci d'une amélioration continuelle. Livraison à vélo fiable et service client très sympa et efficace. Je recommande vivement.</div>
                        <div className="text-sm font-bold text-end pr-4 hover:text-[#FAD261]">-Céline M. sur Google Avis</div>
                    </div>
                    <div className="bg-[#F1EFEF] mx-8 text-sm">
                        <div className="text-sm p-4">Bons produits, gamme de plus en plus large. Une vraie recherche sur le zéro déchet, avec le souci d'une amélioration continuelle. Livraison à vélo fiable et service client très sympa et efficace. Je recommande vivement.</div>
                        <div className="text-sm font-bold text-end pr-4 hover:text-[#FAD261]">-Céline M. sur Google Avis</div>
                    </div>
                    <div className="bg-[#F1EFEF] mx-8 text-sm">
                        <div className="text-sm p-4">Bons produits, gamme de plus en plus large. Une vraie recherche sur le zéro déchet, avec le souci d'une amélioration continuelle. Livraison à vélo fiable et service client très sympa et efficace. Je recommande vivement.</div>
                        <div className="text-sm font-bold text-end pr-4 hover:text-[#FAD261]">-Céline M. sur Google Avis</div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className='flex justify-between w-[1366px] h-[150px] mt-16 px-16 font-Montserrat '>
                <div className='flex justify-center w-[918px] h-[164px]'>
                    <div className="mx-10 ">
                        <h2 className="mb-3 font-extrabold">PRODUITS</h2>
                        <ul className="leading-8" >
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Nouvels arrivages</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">meilleures ventes</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">produits populaire</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">vente</li></Link>
                        </ul>
                    </div>
                    <div className="mx-10 ">
                        <h2 className="mb-3 font-extrabold">A PROPOS</h2>
                        <ul className="leading-8" >
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Nos engagements</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Nos producteurs </li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Equipe</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Presse</li></Link>
                        </ul>
                    </div>
                    <div className="mx-10 ">
                        <h2 className="mb-3 font-extrabold">CONTACT</h2>
                        <ul className="leading-8" >
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Contact</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Entreprise</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Nous rejoindre</li></Link>
                        </ul>
                    </div>
                    <div className="mx-10 ">
                        <h2 className="mb-3 font-extrabold">AIDE</h2>
                        <ul className="leading-8" >
                            <Link href="/"><li className="hover:text-[#B4B2B2]">FAQ</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Livraison</li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Paiement </li></Link>
                            <Link href="/"><li className="hover:text-[#B4B2B2]">Consigne</li></Link>
                        </ul>
                    </div>
                </div>


                <div className="className=' items-center mb-3 mr-36 font-extrabold">Suivez nous sur
                    <div className="flex justify-evenly mt-4 text-2xl leading-8" >
                        <Link href="/" className="hover:text-[#B4B2B2]"><FiInstagram /></Link>
                        <Link href="/" className="hover:text-[#B4B2B2]"><FaWhatsapp /></Link>
                        <Link href="/" className="hover:text-[#B4B2B2]"><LiaFacebookSquare /></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center w-[1366px] h-[63.64px] bg-[#000000] mt-10 px-20 font-Montserrat '>
                <Link href='/'><div className='flex text-[28px] font-extrabold pt-2 '>
                    <div className='text-white'>GUI</div>
                    <div className='text-[#787777]'>COS</div>
                    <div className='text-[#B4B2B2]'>METIQUE</div>
                </div></Link>
                <div className="text-white">©2022 GuiCosmetique Beauty Care, tous droits reservés.</div>
                <div className="flex justify-center items-center text-white">
                <div className="mx-2"><BsGlobe2/></div>
                <div>FRANCAIS</div>
                </div>
            </div>
        </>
    )
}
