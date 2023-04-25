'use client'

import Steps from './Inputs/Steps'
import { FormEvent, useRef, useState } from 'react'
import UserPage from './FormPages/UserPage'

const AccountForm = () => {
    let steps = useRef(['User', 'Delivery'])
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    let usernameValue = useRef<HTMLInputElement>(null)
    let emailValue = useRef<HTMLInputElement>(null)
    let passwordValue = useRef<HTMLInputElement>(null)
    let termsAndConditionsValue = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <>
            <span className=' text-teal-500 font-semibold text-2xl mx-auto mt-8'>Create Account</span>
            <div className='mx-auto flex mt-8 mb-4'>
                <Steps titles={steps.current} currentIndex={currentStepIndex}/>
            </div>
            <form className='flex flex-col mt-4' onSubmit={(e) => handleSubmit(e)}>
                { currentStepIndex === 0 ? 
                   <UserPage usernameRef={usernameValue} emailRef={emailValue} passwordRef={passwordValue} checkBoxRef={termsAndConditionsValue} indexSetter={setCurrentStepIndex}/>
                :
                    <>
                    
                    </>
                }
            </form>
        </>
    )
}

export default AccountForm