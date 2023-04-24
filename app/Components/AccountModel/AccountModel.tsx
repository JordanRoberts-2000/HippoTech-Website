'use client'

import RisingFallingModel from './RisingFallingModel'
import { useStore } from '@/Zustand/store'
import Image from 'next/image'
import { useRef, useState } from 'react'
import NameInput from './Inputs/NameInput'

const AccountModel = () => {
    const { accountModelActive } = useStore()
    let fadedBackgroundRef = useRef<HTMLDivElement>(null)
    const cancelFunction = (e: any) => {
        if(e.target !== fadedBackgroundRef.current)return
        useStore.setState(() => ({
            accountModelActive : false,
        }))
    }
    return (
        <RisingFallingModel active={accountModelActive} cancelFunction={cancelFunction} fadedBackgroundRef={fadedBackgroundRef} tailwindStyles='bg-white rounded-sm top-[10%] w-[800px] flex flex-col border-gray-300 border'>
            <div className='flex'>
                <div className='flex-1 flex flex-col'>
                    <span className=' text-teal-500 font-semibold text-2xl mx-auto mt-8'>Create Account</span>
                    <div className='mx-auto flex mt-8 mb-4'>
                        <div className='flex items-center'>
                            <div className='rounded-full p-1 border-teal-500 bg-teal-400 border-2 w-8 h-8 flex justify-center items-center font-medium text-teal-500 relative'>
                                <span className='text-white'>1</span>
                                <span className='absolute left-[50%] translate-x-[-50%] top-[100%] whitespace-nowrap text-xs font-medium mt-1 flex'>User</span>
                            </div>
                            
                            <div className='h-[2px] w-12 bg-teal-400 mx-1'></div>
                            <div className='rounded-full p-1 border-teal-500 border-2 w-8 h-8 flex justify-center items-center font-medium text-teal-500 relative'>
                                2
                                <span className='absolute left-[50%] translate-x-[-50%] top-[100%] whitespace-nowrap text-xs font-medium mt-1'>Delivery</span>
                            </div>
                        </div>
                    </div>
                    <form className='flex flex-col mt-4'>
                        <NameInput/>
                        <div className='w-[80%] mx-auto flex flex-col mt-4'>
                            <label className='font-medium text-gray-700'>Email:</label>
                            <input type="email" className='bg-gray-100 border-gray-300 border rounded-sm p-1'/>
                        </div>
                        <div className='w-[80%] mx-auto flex flex-col mt-4'>
                            <div className='flex'>
                                <label className='font-medium text-gray-700'>Password:</label>
                                <div className='mt-auto mb-1 mr-1 ml-auto relative cursor-pointer group'>
                                    <span className='absolute top-[50%] opacity-0 duration-150 group-hover:opacity-[1] pointer-events-none tooltip translate-y-[-50%] left-[100%] 
                                          whitespace-nowrap z-20 bg-gray-200 border-gray-400 border text-xs font-medium text-gray-600 p-2 ml-2 rounded-md'>
                                          Password must have a minimum of 6<br/> characters and a maximum of 16 characters
                                    </span>
                                    <svg className='h-3 fill-teal-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                </div>
                            </div>
                            <input type="password" className='bg-gray-100 border-gray-300 border rounded-sm p-1'/>
                        </div>
                        <div className="checkbox-wrapper-4 w-[80%] mx-auto mt-4">
                            <input className="inp-cbx" id="terms" type="checkbox"/>
                            <label className="cbx" htmlFor="terms">
                            <span><svg width="12px" height="10px"><use xlinkHref="#check-4"></use></svg></span>
                            <span>I have read the terms and conditions</span></label>
                            <svg className="inline-svg"><symbol id="check-4" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></symbol></svg>
                        </div>
                        <p className='mt-16 font-medium text-sm mx-auto mb-2'>Already have an account? <span className='text-teal-500 ml-2 underline'>Sign in</span></p>
                        <div className='w-[80%] mx-auto flex gap-4 mb-8'>
                            {/* <button className='border-teal-500 border text-teal-500 py-1 flex-1 rounded-sm'>Sign in</button> */}
                            <button className='font-semibold text-white bg-teal-500 py-2 flex-1 rounded-sm'>Confirm</button>
                        </div>
                    </form>
                </div>
                <div className='flex-1 bg-white relative overflow-hidden'>
                    <Image alt="j" src='http://res.cloudinary.com/dewhcvhvq/image/upload/v1682329986/x68o08er1gmmbf6g0ne1.webp' fill className='object-cover'/>
                </div>
            </div>
        </RisingFallingModel>
    )
}

export default AccountModel