'use client'

import { emailValidation, passwordValidation, usernameValidation } from '@/utils/validation/clientsideValidation'
import TextInput from '../Inputs/TextInput'
import Checkbox from '../Inputs/Checkbox'
import { Dispatch, SetStateAction, useState } from 'react'
import { signIn } from "next-auth/react"
import googleLogo from '@/images/googleLogo.png'
import Image from 'next/image'
import Spinner from '../../Loading/Spinner'

type Props = {
    usernameRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    passwordRef: React.RefObject<HTMLInputElement>,
    checkBoxRef: React.RefObject<HTMLInputElement>,
    indexSetter: Dispatch<SetStateAction<number>>
}

const UserPage = ({usernameRef, emailRef, passwordRef, checkBoxRef, indexSetter}: Props) => {
    const [submitLoading, setSubmitLoading] = useState(false)
    const [usernameEmptyFeild, setUsernameEmptyFeild] = useState(false)
    const [emailEmptyFeild, setEmailEmptyFeild] = useState(false)
    const [passwordEmptyFeild, setPasswordEmptyFeild] = useState(false)
    const [uncheckedSubmit, setUncheckedSubmit] = useState(false)
    const handleValidation = () => {
        setSubmitLoading(true)
        // If empty feild, set to empty
        if(usernameRef.current!.value === '' && !usernameEmptyFeild)setUsernameEmptyFeild(true)
        if(emailRef.current!.value === '' && !emailEmptyFeild)setEmailEmptyFeild(true)
        if(passwordRef.current!.value === '' && !passwordEmptyFeild)setPasswordEmptyFeild(true)
        if(!checkBoxRef.current!.checked && !uncheckedSubmit)setUncheckedSubmit(true)
        // Return if any empty values
        if(usernameRef.current!.value === '' || emailRef.current!.value === '' 
           || passwordRef.current!.value === '' || !checkBoxRef.current!.checked)return
        // Validate inputs
        const usernameValid = usernameValidation(usernameRef.current!.value)
        if(!usernameValid.valid)return
        const emailValid = emailValidation(emailRef.current!.value)
        if(!emailValid.valid)return
        const passwordValid = passwordValidation(passwordRef.current!.value)
        if(!passwordValid.valid)return
        indexSetter((prev) => prev + 1)
    }
  return (
    <>
        <TextInput refValue={usernameRef} validationFunc={usernameValidation} title={'Username:'} maxLength={16} tooltip={true} debounceDuration={100}
                tooltipMessage='Username must have a minimum of 6 letters' password={false} submitEmpty={usernameEmptyFeild} emtpySetter={setUsernameEmptyFeild}/>
        <TextInput refValue={emailRef} validationFunc={emailValidation} title={'Email:'} maxLength={40} tooltip={false} 
                debounceDuration={400} password={false} submitEmpty={emailEmptyFeild} emtpySetter={setEmailEmptyFeild}/>
        <TextInput refValue={passwordRef} validationFunc={passwordValidation} title={'Password:'} maxLength={16} tooltip={true} debounceDuration={400}
                tooltipMessage='Password must have a minimum of 8 letters and must contain atlest one capital letter, one number on one special value eg: $&+,:;=?@#|<>.^*()%!-' 
                password={true} submitEmpty={passwordEmptyFeild} emtpySetter={setPasswordEmptyFeild}/>
        <Checkbox refValue={checkBoxRef} submitEmpty={uncheckedSubmit} emtpySetter={setUncheckedSubmit}/>
        <p className='mt-12 font-medium text-sm mx-auto mb-2'>Already have an account? <span className='text-teal-500 ml-2 underline'>Sign in</span></p>
        <div className='w-[80%] mx-auto flex flex-col gap-4 mb-8'>
            <button type='button' className='font-semibold text-white bg-teal-500 flex-1 rounded-sm py-2' onClick={() => handleValidation()}>
                {!submitLoading ? 'Next Step' : <Spinner/>}
            </button>
            <div className='flex items-center px-2'>
                <div className='flex-1 bg-gray-400 h-[1px]'></div>
                <span className='mx-2 mb-1 font-medium text-sm'>Or continue with</span>
                <div className='flex-1 bg-gray-400 h-[1px]'></div>
            </div>
            <div className='flex gap-4'>
                <button className='flex-1 bg-[#4267B2] rounded text-gray-100 text-sm py-2 font-semibold relative pl-4' onClick={() => signIn('facebook', {callbackUrl: '/',})}>
                    <svg className='fill-white h-5 ml-3 absolute left-0 top-[50%] translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    Facebook
                </button>
                <button className='flex-1 bg-gray-200 rounded text-sm py-2 font-semibold relative pl-4' onClick={() => signIn('google', {callbackUrl: '/',})}>
                    <Image alt="Google Logo" className='ml-2 absolute left-0 top-[50%] translate-y-[-50%]' src={googleLogo} height={28} width={28} sizes='20px'/>
                    Google
                </button>
            </div>
        </div>
    </> 
  )
}

export default UserPage