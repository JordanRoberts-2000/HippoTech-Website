'use client'

import RisingFallingModel from './RisingFallingModel'
import { useStore } from '@/Zustand/store'
import Image from 'next/image'
import { useRef } from 'react'
import AccountForm from './AccountForm'

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
        <RisingFallingModel active={accountModelActive} cancelFunction={cancelFunction} fadedBackgroundRef={fadedBackgroundRef} tailwindStyles='bg-white rounded-md w-[900px] flex flex-col border-gray-300 border'>
            <div className='flex relative'>
                <button className='absolute top-0 right-0 m-2 z-40' onClick={() => useStore.setState(() => ({accountModelActive : false}))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} className="w-8 h-8 stroke-white"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='flex-[1] flex flex-col'>
                    <AccountForm/>
                </div>
                <div className='flex-[1] bg-white relative overflow-hidden'>
                    <Image alt="j" src='http://res.cloudinary.com/dewhcvhvq/image/upload/v1682329986/x68o08er1gmmbf6g0ne1.webp' fill className='object-cover'/>
                </div>
            </div>
        </RisingFallingModel>
    )
}

export default AccountModel