import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import Header from "../Header"
import Footer from "../Footer"

import * as S from "./styled"

import GlobalStyled from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>
      <S.MainContent>{children}</S.MainContent>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
