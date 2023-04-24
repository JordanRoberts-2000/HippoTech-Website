'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const varients = {
    errorActive1: { width: ['0rem', '1rem', '1rem', '1rem'], rotate: [0, 0, 0, 45], y: [2], transition: {duration: .6, times: [0, .3]}},
    errorActive2: { width: ['0rem', '1rem', '1rem', '1rem'], rotate: [0, 0, 0, -45], transition: {duration: .6, times: [0, .3]}},
    inActive1: { width: ['1rem', '1rem', '1rem', '0rem'], rotate: [-45, 0, 0, 0], transition: {duration: .6, times: [0, .3]}},
    inActive2: { width: ['1rem', '1rem', '1rem', '0rem'], rotate: [-45, 0, 0, 0], transition: {duration: .6, times: [0, .3]}}
}

const NameInput = () => {
    const [nameErrorMessage, setNameErrorMessage] = useState('')
    const [nameInputError, setNameInputError] = useState(false)
    const nameValidation = (name: string) => {
        if(name.length === 0 || nameInputError)return
        if(name.length < 6){
            setNameInputError(true)
            setNameErrorMessage('Username is too short')
        }
    }
    const nameOnchange = (name:string) => {
        
            console.log(nameInputError, name.length)
        if(nameInputError){
            setNameInputError(false)
            setNameErrorMessage('')
        }
    }
    return (
        <div className='w-[80%] mx-auto flex flex-col'>
            <div className='flex'>
                <label className='font-medium text-gray-700'>Username:</label>
                <div className='mt-auto mr-1 ml-auto relative flex cursor-pointer group'>
                    <span className={`${nameInputError ? 'opacity-1' : 'opacity-0'} duration-200 ml-auto text-xs mt-auto mb-[3px] mr-2 text-red-500`}>{nameErrorMessage}</span>
                    <span className='absolute top-[50%] opacity-0 duration-150 group-hover:opacity-[1] pointer-events-none translate-y-[-50%] left-[100%] 
                            whitespace-nowrap z-20 bg-gray-200 border-gray-400 border text-xs font-medium text-gray-600 p-2 ml-2 rounded-md'>
                            Username must have a minimum of 6 letters
                    </span>
                    <svg className='h-3 fill-teal-400 mt-auto mb-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </div>
            </div>
            <div className='flex relative'>
                <input type="text" className={`bg-gray-100 ${nameInputError && 'border-b-red-500'} border-gray-300 border rounded-sm p-1 flex-1 pr-8`} maxLength={20} onChange={(e) => nameOnchange(e.target.value)} onBlur={(e) => nameValidation(e.target.value)}/>
                <div className='absolute top-[50%] translate-y-[-50%] right-0 flex flex-col w-4 h-4 mr-2 justify-center items-center'>
                    <motion.div variants={varients} animate={nameInputError ? 'errorActive1' : 'inActive1'} className={`h-[2px] bg-red-500`}></motion.div>
                    <motion.div variants={varients} animate={nameInputError ? 'errorActive2' : 'inActive2'} className={`h-[2px] bg-red-500`}></motion.div>
                </div>
            </div>
        </div>
    )
}

export default NameInput