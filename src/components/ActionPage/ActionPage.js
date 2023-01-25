import React, { Component } from "react"
import { HeaderSection } from "../Headers"
import { FooterSection } from "../Footers"
import ActionPageTop from "./ActionPageTop/ActionPageTop"
import ActionPageBody from "./ActionPageBody/ActionPageBody"

class ActionPage extends Component {
  render() {
    return (
      <>
        <HeaderSection />
        <ActionPageTop />
        <ActionPageBody />
        <FooterSection />
      </>
    )
  }
}

export default ActionPage
