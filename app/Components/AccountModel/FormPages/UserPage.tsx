'use client'

import { emailValidation, passwordValidation, usernameValidation } from '@/utils/validation/clientsideValidation'
import TextInput from '../Inputs/TextInput'
import Checkbox from '../Inputs/Checkbox'
import { Dispatch, SetStateAction, useState } from 'react'

type Props = {
    usernameRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    passwordRef: React.RefObject<HTMLInputElement>,
    checkBoxRef: React.RefObject<HTMLInputElement>,
    indexSetter: Dispatch<SetStateAction<number>>
}

const UserPage = ({usernameRef, emailRef, passwordRef, checkBoxRef, indexSetter}: Props) => {
    const [usernameEmptyFeild, setUsernameEmptyFeild] = useState(false)
    const [emailEmptyFeild, setEmailEmptyFeild] = useState(false)
    const [passwordEmptyFeild, setPasswordEmptyFeild] = useState(false)
    const [uncheckedSubmit, setUncheckedSubmit] = useState(false)
    const handleValidation = () => {
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
        <div className='w-[80%] mx-auto flex gap-4 mb-8'>
            <button type='button' className='font-semibold text-white bg-teal-500 py-2 flex-1 rounded-sm' onClick={() => handleValidation()}>Confirm</button>
        </div>
    </> 
  )
}

export default UserPage