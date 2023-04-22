import Header from "./Components/Header"
import Image from "next/image"
import PricesSection from "./Components/PricesSection"
import ReviewSection from "./Components/ReviewSection"
import SellForm from "./Components/SellForm"

export default function Home() {
  return (
    <>
      <div className="h-[100svh] flex flex-col bg-white">
        <Header/>
        <main className="flex-1 flex pt-8 pl-28">
          <div className="flex-[3] flex flex-col relative h-[80%]">
              <h1 className=" font-bold text-7xl mr-[-8rem] z-10 whitespace-nowrap">We buy your<br/> old tech</h1>
              <h2 className="font-medium text-lg text-gray-700">All online <span className="text-3xl mx-1">.</span> 24h Quota <span className="text-3xl mx-1">.</span> Free shipping</h2>
              <p className="font-medium text-[0.92rem] text-gray-500 mt-2 pr-16">We specialize in buying old technology online! Technology is constantly evolving and improving, leaving many people with outdated devices that they no longer need or use. Our team of experts is committed to providing a seamless experience, from the initial quote to the final payment.</p>
              <button className="bg-teal-500 text-white font-medium w-fit py-2 px-6 shadow leading-6 tracking-wide rounded-sm text-sm 
                                hover:bg-teal-400 hover:shadow-md hover:scale-[1.05] transition focus:scale-[.98] mt-auto">Sell With us Today</button>
          </div>
          <div className="flex-[6] flex items-start">
              <div className="h-[80%] w-full relative rounded-md shadow-lg">
                  <Image alt="" src="https://res.cloudinary.com/dewhcvhvq/image/upload/v1682071513/oaqrhdw0kcvis14htvsj.webp" fill className="rounded-md" sizes="50vw"/>
              </div>
          </div>
          <div className="flex-1"></div>
        </main>
      </div>
      <PricesSection/>
      <ReviewSection/>
      <SellForm/>
    </>
  )
}
