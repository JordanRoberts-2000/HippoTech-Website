'use client'

import { Dispatch, SetStateAction } from "react"

type Props = {
    refValue: React.RefObject<HTMLInputElement>,
    submitEmpty: boolean,
    emtpySetter: Dispatch<SetStateAction<boolean>>
}

const Checkbox = ({refValue, submitEmpty, emtpySetter}:Props) => {
    const handleOnchange = () => {
        if(submitEmpty)emtpySetter(false)
    }
    return (
        <>
            <div className="checkbox-wrapper-4 w-[80%] mx-auto mt-4 flex justify-center">
                <input ref={refValue} onChange={() => handleOnchange()} className="inp-cbx absolute invisible" id="terms" type="checkbox"/>
                <label className="cbx hover:bg-[rgba(3,154,114,0.06)]" htmlFor="terms">
                    <span className='rounded w-[18px] h-[18px] relative border border-gray-300 scale-100 transition-[all_0.2s_ease] shadow-[0_1px_1px_rgba(0,16,75,0.05)]'>
                        <svg className=' stroke-white fill-none absolute top-[3px] left-[2px] delay-100 transition-[all_0.3s_ease]' width="12px" strokeWidth={2} strokeLinecap='round' strokeDashoffset={'16px'} strokeLinejoin='round' strokeDasharray={'16px'} height="10px"><use xlinkHref="#check-4"></use></svg>
                    </span>
                    <span className='text-sm ml-2'>I have read the terms and conditions</span><br/>
                </label>
                <svg className="inline-svg absolute w-0 h-0 pointer-events-none select-none"><symbol id="check-4" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></symbol></svg>
            </div>
            <div className="text-red-500 text-xs w-full font-semibold text-center h-4">{submitEmpty ? 'Required' : ''}</div>
        </>
    )
}

export default Checkbox

{/*
  .checkbox-wrapper-4 .cbx {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.2s ease;
    display: inline-block;
  }
  .checkbox-wrapper-4 .cbx:not(:last-child) {
    margin-right: 6px;
  }
  .checkbox-wrapper-4 .cbx:hover {
    background: rgba(3, 154, 114, 0.06);
  }
  .checkbox-wrapper-4 .cbx span {
    float: left;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-4 .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    transform: scale(1);
    border: 1px solid #cccfdb;
    transition: all 0.2s ease;
    box-shadow: 0 1px 1px rgba(0,16,75,0.05);
  }
  .checkbox-wrapper-4 .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-4 .cbx span:last-child {
    padding-left: 8px;
    line-height: 18px;
  }
  .checkbox-wrapper-4 .cbx:hover span:first-child {
    border-color: rgb(20 184 166);
  }
  .checkbox-wrapper-4 .inp-cbx {
    position: absolute;
    visibility: hidden;
  }
  .checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child {
    background: rgb(20 184 166);
    border-color: rgb(20 184 166);
    animation: wave-4 0.4s ease;
  }
  .checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .checkbox-wrapper-4 .inline-svg {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }

*/}