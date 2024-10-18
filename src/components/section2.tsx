import Image from "next/image"
export default function Section2() {
    return (
        <>
            <div className='flex relative max-w-[1366px] h[688px] px-36 font-Montserrat'>
                {/* 1 */}
                <div className="overflow-hidden  items-center">
                    <Image width={566} height={688} alt="section2 Picture"
                        src="/assets/sec2img.png"
                        className=" hover:scale-110 duration-1000" />
                </div>
                {/* 2 */}
                <div className="max-w-[534px] h[314px] font-Montserrat" >
                    <h1 className="ml-10 mt-20 text-[#333333] text-4xl font-bold hover:text-[#FAD261] animate-out">PARTAGER L'AMOUR</h1>
                    <p className="text-xl m-10 text-[#333333]  font-semibold">Envie de vous chouchouter et aussi de faire plaisir à un ami ? Parrainez un ami et il bénéficiera d’une réduction de 5000 FCFA dès 20.000 FCFA d’achats en ligne. Pour vous remercier, nous vous offrirons également une réduction de 5000 FCFA lors de votre prochaine commande.</p>
                    <div className="flex justify-center">
                        <button className='w-[195px] h-[40px] rounded-2xl mx-4 px-5 py-2 text-sm font-bold bg-[#FAD261] text-[#000000] hover:bg-amber-100'>INVITER VOS AMIS</button>
                        <button className='w-[195px] h-[40px] rounded-2xl mx-4 px-5 py-2 text-sm font-bold bg-[#333333] text-[#FFFFFF] hover:bg-gray-300'>EXPLORER</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
