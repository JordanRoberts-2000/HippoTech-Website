'use client'

import { motion } from "framer-motion"
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react"

const varients = {
    errorActive1: { width: ['0rem', '1rem', '1rem', '1rem'], rotate: [0, 0, 0, 45], y: [2], transition: {duration: .6, times: [0, .3]}},
    errorActive2: { width: ['0rem', '1rem', '1rem', '1rem'], rotate: [0, 0, 0, -45], transition: {duration: .6, times: [0, .3]}},
    inActive1: { width: ['1rem', '1rem', '1rem', '0rem'], rotate: [-45, 0, 0, 0], transition: {duration: .6, times: [0, .3]}},
    inActive2: { width: ['1rem', '1rem', '1rem', '0rem'], rotate: [-45, 0, 0, 0], transition: {duration: .6, times: [0, .3]}},
    valid: { pathLength: [0,1], opacity: [1, 1], transition: {duration: .5, times: [0, .5]}},
    Notvalid: { pathLength: 0, opacity: 0, transition: {duration: .3}},
    
}
interface Validation {
    valid: boolean
    error: string;
}

type Props = {
    refValue: React.RefObject<HTMLInputElement>,
    validationFunc: (value:string) => Validation,
    title: string,
    maxLength: number,
    debounceDuration: number
    tooltip: boolean,
    tooltipMessage?: string,
    password: boolean,
    submitEmpty: boolean,
    emtpySetter: Dispatch<SetStateAction<boolean>>
}

const TextInput = ({refValue, validationFunc, title, maxLength, debounceDuration, tooltip, tooltipMessage, password, submitEmpty, emtpySetter}:Props) => {
    let errorAnimating = useRef(false)
    const [textErrorMessage, setTextErrorMessage] = useState('')
    const [textInputError, setTextInputError] = useState(false)
    const [textValid, setTextValid] = useState(false)

    const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(cb:F, delay:number) => {
        let timeOut:ReturnType<typeof setTimeout>
        return (...args: Parameters<F>) => {
            clearTimeout(timeOut)
            timeOut = setTimeout(() => {
                cb(...args)
            }, delay)
        }
    }

    const resetError = (errorVal:boolean, setter:Dispatch<SetStateAction<boolean>>) => {
        if(errorVal){
            setter(false)
            setTextErrorMessage('')
            errorAnimating.current = true
            setTimeout(() => {
                errorAnimating.current = false
            },600)
        }
    }
    const onChangeFunction = (name:string) => {
        resetError(submitEmpty, emtpySetter)
        resetError(textInputError, setTextInputError)
        const result = validationFunc(name)
        if(result.valid){
            if(!textValid){
                if(!errorAnimating.current){
                    setTextValid(true)
                }else{
                    setTimeout(() => {
                        if(refValue.current!.value.length >= 6)setTextValid(true)
                    }, 600)
                }
            }
        }else{
            if(textValid)setTextValid(false)
        }
    }

    let textOnchangeDebounce = useCallback(debounce((name: string) => onChangeFunction(name), debounceDuration), [textErrorMessage, textInputError, textValid, submitEmpty])

    const textUnfocus = (name: string) => {
        if(textInputError || name.length === 0)return
        const result = validationFunc(name)
        if(result.valid)return
        setTextInputError(true)
        setTextErrorMessage(result.error)
        
    }
    return (
        <div className='w-[80%] mx-auto flex flex-col'>
            <div className='flex'>
                <label htmlFor={title} className='font-medium text-gray-700'>{title}</label>
                <div className='mt-auto mr-1 ml-auto relative flex cursor-pointer group'>
                    <span className={`${(textInputError || submitEmpty) ? 'opacity-1' : 'opacity-0'} duration-200 ml-auto font-semibold text-xs mt-auto mb-[3px] mr-2 text-red-500`}>
                        {submitEmpty ? 'Field empty' : textErrorMessage}
                    </span>
                    {tooltip && 
                    <>
                        <span className='absolute top-[50%] opacity-0 duration-150 group-hover:opacity-[1] pointer-events-none translate-y-[-50%] left-[100%] 
                             w-[300px] z-20 bg-gray-200 border-gray-400 border text-xs font-medium text-gray-600 p-2 ml-2 rounded-md'>
                            {tooltipMessage}
                        </span>
                        <svg className='h-3 fill-teal-400 mt-auto mb-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    </>}
                </div>
            </div>
            <div className='flex relative'>
                <input ref={refValue} id={title} type={password ? 'password' : 'text'} className={`bg-gray-100 ${(textInputError || submitEmpty) && 'border-b-red-500'} border-gray-300 taxt-sm font-medium text-gray-600 border rounded-sm p-1 pl-2 flex-1 pr-8`} 
                       maxLength={maxLength} onChange={(e) => textOnchangeDebounce(e.target.value)} onBlur={(e) => textUnfocus(e.target.value)}/>
                <div className='absolute top-[50%] translate-y-[-50%] right-0 flex flex-col w-4 h-4 mr-2 justify-center items-center overflow-hidden'>
                    <motion.div variants={varients} animate={(textInputError || submitEmpty) ? 'errorActive1' : 'inActive1'} className={`h-[2px] bg-red-500`}></motion.div>
                    <motion.div variants={varients} animate={(textInputError || submitEmpty) ? 'errorActive2' : 'inActive2'} className={`h-[2px] bg-red-500`}></motion.div>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <svg className="w-5 h-5 stroke-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <motion.path variants={varients} animate={textValid ? 'valid' : 'Notvalid'} strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TextInput