import React from "react"
import Compromisos from "./components/CompromisosTitle"
import CompromisosCard from "./components/CompromisosCard"
import { BannerText } from "../../components/bannertext"

const Page = () => {
  return (
    <>
    <BannerText titulo="Gestión de Compromisos"/>
      <div>
        <Compromisos />
      </div>
      <div>
        <CompromisosCard />
      </div>
    </>
  )
}
export default Page
