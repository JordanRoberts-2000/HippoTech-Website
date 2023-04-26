'use client'

import dynamic from "next/dynamic"
const PricesSection = dynamic(() => import(/* webpackChunkName: "PricesSection" */'./PageSections/Prices/PricesSection'))
const ReviewSection = dynamic(() => import(/* webpackChunkName: "ReviewSection" */'./PageSections/Reviews/ReviewSection'))
const SellForm = dynamic(() => import(/* webpackChunkName: "SellForm" */'./PageSections/SellForm/SellForm'))
import { useEffect, useRef, useState } from "react"
import ServerConvert from "./ServerConvert"

const ComponentScrollLoad = () => {
    const [reviewSectionLoad, setReviewSectionLoad] = useState(false)
    const [sellSectionLoad, setSellSectionLoad] = useState(false)
    let pricesSectionRef = useRef<HTMLDivElement>(null)
    let reviewSectionRef = useRef<HTMLDivElement>(null)
    let sellSectionRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setReviewSectionLoad(true)
                }
            })
        })
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setSellSectionLoad(true)
                }
            })
        })
        observer.observe(pricesSectionRef.current!)
        observer.observe(reviewSectionRef.current!)
        observer2.observe(reviewSectionRef.current!)
        observer2.observe(sellSectionRef.current!)
    },[])
    return (
        <>
        <ServerConvert>
            <div ref={pricesSectionRef}>
                <PricesSection />
            </div>
            <div ref={reviewSectionRef}>
                {reviewSectionLoad && <ReviewSection/>}
            </div>
            <div ref={sellSectionRef}>
                {sellSectionLoad && <SellForm/>}
            </div>
        </ServerConvert>
        </>
    )
}

export default ComponentScrollLoad