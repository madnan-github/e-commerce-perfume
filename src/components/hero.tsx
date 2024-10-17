import Image from "next/image"
export default function Hero() {
    return (
        <header className="w-full h-screen relative">
            <Image
                src="/assets/bg_img.png"
                alt="bg-hero"
                layout="fill"
                objectFit="cover"
            />
            <div className="max-w-[1200px] max-h-[514px] absolute mx-20 mt-16 grid sm:grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="max-w-[600px] my-20 ">
                    <h1 className="text-[36px] text-[#F1B919] mt-2 font-bold">NOUVEL <span className="text-[36px] text-[#FAD261] mt-2 font-semibold">ARTICLE</span></h1>
                    <h2 className="text-[48px] text-[#333333] font-bold ml-20">BODY GLOW HIVER</h2>
                    <h2 className="text-[48px] text-[#333333] ml-20">SOINS DE LA PEAU</h2>
                    <p className="text-[20px] text-[#333333] text-balance ml-20">votre peau a besoin d’hydratation et de protection, Nous proposons une solution routiniere spéciale.</p>
            </div>
            {/* max-w-[600px] */}
            <div className="">
                <Image src="/assets/hero_img.png" alt="hero" width={450} height={450} />
            </div>
            <div className=" justify-end flex items-center">
            <p className="font-barlo font-light"><span className="font-barlo font-bold">PRIX</span>  15.000 FCFA </p>
                <button className="max-w-[195px] max-h-[40px] font-bold  ml-32  text-[12px] text-[#000000] bg-[#FAD261]  hover:bg-[#c09e40] rounded-xl py-5 px-5 shadow-lg inline-flex items-center">
                    ACHETER MAINTENANT
                </button>
            </div>
        </div>
    </header>
    )
}