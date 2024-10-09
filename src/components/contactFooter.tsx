
export default function ContactFooter() {
  return (
    <section>
         <div className="lg:w-1/2 md:w-2/3 mx-auto px-10 py-10  text-left flex flex-wrap">
        <div className='flex-1 flex-wrap'>
            <h4 className='text-lg font-bold text-black'>Call Us:</h4>
            <p className='text-[18] text-[#AD343E] font-bold'>+1-234-567-8900</p>
        </div>
        <div className='flex-1 flex-wrap'>
            <h4 className='text-lg font-bold text-black'>Hours:</h4>
            <p className='text-[18] text-[#2C2F24] '>Mon-Fri: 11am-8pm</p>
            <p className='text-[18] text-[#2C2F24] '>Sat-Sun: 9am-10pm</p>
        </div>
        <div className='flex-1 flex-wrap'>
            <h4 className='text-lg font-bold text-black'>Our Location:</h4>
            <p className='text-[18] text-[#2C2F24] '>123 Bridge Street
                <br/>Nowhere Land, La 12345
                <br />United States
            </p>
        </div>
        </div>
    </section>
  )
}
