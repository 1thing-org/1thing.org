import React, { Suspense } from "react"
import { HeaderSection } from "../Header"
import { FooterSection } from "../Footer"

const DefaultLayout = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <>
      <HeaderSection />
      <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
      <FooterSection />
    </>
  )
}
export default DefaultLayout
