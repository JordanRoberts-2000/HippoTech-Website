// import PricesSection from "./Components/PageSections/Prices/PricesSection"
import ReviewSection from "./Components/PageSections/Reviews/ReviewSection"
import SellForm from "./Components/PageSections/SellForm/SellForm"
const PricesSection = dynamic(() => import(/* webpackChunkName: "AccountModel" */'./Components/PageSections/Prices/PricesSection'))
import Main from "./Components/PageSections/Main/Main"
import ComponentScrollLoad from "./Components/ComponentScrollLoad"
import dynamic from "next/dynamic"

export default function Home() {
  return (
    <>
      <Main/>
      <ComponentScrollLoad/>
    </>
  )
}
