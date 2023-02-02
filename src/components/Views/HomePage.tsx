import React, { Component, ReactNode } from "react"
import { WhatWeDoSection, WhoWeAreSection, WhyWeDoSection, HowWeDoSection } from "../Contents"
import { DefaultLayout } from "../Layouts"

export default class HomePage extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <>
        <DefaultLayout>
          <div className="flex flex-col space-y-10">
            <WhoWeAreSection />
            <WhatWeDoSection />
            <WhyWeDoSection />
            <HowWeDoSection />
          </div>
        </DefaultLayout>
      </>
    )
  }
}
