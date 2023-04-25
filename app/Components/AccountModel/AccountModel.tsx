'use client'

import RisingFallingModel from './RisingFallingModel'
import { useStore } from '@/Zustand/store'
import Image from 'next/image'
import { useRef } from 'react'
import TextInput from './Inputs/TextInput'
import { emailValidation, passwordValidation, usernameValidation } from '@/utils/validation/clientsideValidation'

const AccountModel = () => {
    let usernameValue = useRef<HTMLInputElement>(null)
    let emailValue = useRef<HTMLInputElement>(null)
    let passwordValue = useRef<HTMLInputElement>(null)
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
                        {/* <NameInput usernameValue={usernameValue}/> */}
                        <TextInput refValue={usernameValue} validationFunc={usernameValidation} title={'Username:'} maxLength={16} tooltip={true} debounceDuration={100}
                                   tooltipMessage='Username must have a minimum of 6 letters' password={false}/>
                        <TextInput refValue={emailValue} validationFunc={emailValidation} title={'Email:'} maxLength={40} tooltip={false} debounceDuration={400} password={false}/>
                        <TextInput refValue={passwordValue} validationFunc={passwordValidation} title={'Password:'} maxLength={16} tooltip={true} debounceDuration={400}
                                   tooltipMessage='Password must have a minimum of 8 letters and must contain atlest one capital letter, one number on one special value eg: $&+,:;=?@#|<>.^*()%!-' 
                                   password={true}/>
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