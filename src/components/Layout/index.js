import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from "../Footer"

import GlobalStyled from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
