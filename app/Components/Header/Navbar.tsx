'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"

const Navbar = () => {
    const pathname = usePathname()
    const [active, setActive] = useState(false)
    let backgroundRef = useRef<HTMLDivElement>(null)
    const handleOnClick = () => {
        setActive((prev) => !prev)
    }
    const closeNav = (e: any) => {
        if(e.target !== backgroundRef.current)return
        setActive(false)
    }
    return (
        <nav className="z-10">
            <div onClick={() => handleOnClick()} className='w-6 gap-[6px] pt-2 flex flex-col items-center absolute left-0 md:hidden ml-4 translate-y-[-50%] top-[50%]'>
                <div className={`${active && 'rotate-45 translate-y-[8px]'} w-full h-[2px] duration-300 bg-black`}></div>
                <div className={`${active ? 'w-0' : 'w-full delay-150'} h-[2px] duration-300 bg-black`}></div>
                <div className={`${active && 'rotate-[-45deg] translate-y-[-8px]'} w-full h-[2px] duration-300 bg-black`}></div>
            </div>
            <div ref={backgroundRef} onClick={(e) => closeNav(e)} className={`${active ? 'opacity-1 pointer-events-auto' : 'pointer-events-none opacity-0 md:opacity-1 md:pointer-events-auto'} 
                                                                            w-full duration-300 bg-black/60 h-screen fixed md:relative md:w-auto md:h-auto top-0 left-0 -z-10`}>
                </div>
                <ul className={`${active ? 'left-0' : 'left-[-100%] md:left-0'} pl-4 md:pl-0 flex text-2xl font-bold flex-col md:flex-row gap-6 lg:gap-16 md:gap-12 duration-300 md:font-medium md:text-sm lg:text-base fixed md:relative -z-10 pt-16 w-[55%] md:w-auto md:pt-0 top-0 h-screen md:h-auto bg-white`}>
                    <Link href={'/oof'} className={`${pathname === '/oof' ? 'text-teal-400' : 'visited:text-zinc-500'}`}><li className='group'><div className='group-hover:scale-95 hover:text-teal-400 duration-150'>Services</div></li></Link>
                    <Link href={'/x'} className={`${pathname === '/x' ? 'text-teal-400' : 'visited:text-zinc-500'}`}><li className='group'><div className='group-hover:scale-95 hover:text-teal-400 duration-150'>Case Study</div></li></Link>
                    <Link href={'/x'} className={`${pathname === '/x' ? 'text-teal-400' : 'visited:text-zinc-500'}`}><li className='group'><div className='group-hover:scale-95 hover:text-teal-400 duration-150'>Pricing</div></li></Link>
                    <Link href={'/x'} className={`${pathname === '/x' ? 'text-teal-400' : 'visited:text-zinc-500'}`}><li className='group'><div className='group-hover:scale-95 hover:text-teal-400 duration-150'>Resources</div></li></Link>
                </ul>
        </nav>
    )
}

export default Navbar