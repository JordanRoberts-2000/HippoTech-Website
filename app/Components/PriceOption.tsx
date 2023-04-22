import React from 'react'

type Props = {
    title: string,
    examples: string[],
    price: number,
    i: number
}

const PriceOption = ({title, examples, price, i}: Props) => {
    const titleCharArray = title.split("")
  return (
    <div className={`flex-1 flex justify-between border-b-[2px] border-gray-200 relative group` }>
        
        <div className='absolute bottom-[-2px] left-0 w-0 bg-gray-700 h-[2px] duration-500 group-hover:w-full'></div>
        <div className='flex-col pl-2 flex'>
            <div className='text-8xl mb-auto leading-[6rem] relative h-full overflow-y-hidden group-hover:ml-8 duration-300'>
                    {/* Main Text */}
                    {titleCharArray.map((item, index) => (
                        <span key={index} style={{transitionDelay: `${0.05 * index}s`}} className={`group-hover:bottom-[100%] relative duration-300 bottom-0`}>{item}</span>
                   ))}
                   {/* Underneath text */}
                <div className={` absolute w-full top-[100%] h-full`}>
                   {titleCharArray.map((item, index) => (
                        <span key={index} style={{transitionDelay: `${0.05 * index}s`}} className={`group-hover:bottom-[100%] relative duration-300 bottom-0 text-teal-500`}>{item}</span>
                   ))}
                </div>
            </div>
        


            <div className='flex group-hover:pl-16 duration-300 bg-white z-50'>
                {examples.map((item, index) => (
                    !index ?
                            <h4 key={index} className='text-gray-700 font-semibold ml-2 mt-auto'>{item}</h4>
                    :
                    <div key={index} className='flex'>
                        <h4 className='text-2xl text-gray-700 mx-4 font-semibold'>.</h4>
                        <h4 className='text-gray-700 font-semibold mt-auto'>{item}</h4>
                    </div>
                ))}
                
                
            </div>
        </div>
        <div className='flex flex-col justify-end pr-2'>
            <h4 className='text-gray-500 group-hover:text-gray-600 text-5xl group-hover:text-[3.25rem] duration-500'>{`Up to $${price}`}</h4>
            <button className='bg-teal-700 relative leading-6 font-medium text-gray-200 group-hover:text-white transition px-4 mt-2 mb-2 w-fit ml-auto flex justify-center items-center py-1 -z-10'>
                <div className='absolute top-0 left-0 h-full w-0 group-hover:w-full duration-500 bg-black z-[-5]'></div>
                See Pricelist<svg className='ml-2 h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
        </div>
    </div>
  )
}

export default PriceOption