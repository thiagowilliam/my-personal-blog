import React from "react"

import Profile from "../Profile"
import MenuLinks from '../MenuLinks'

import * as S from "./styled"

const Header = () => (
  <S.TopoWapper>
    <S.TopoCenter>
      <Profile />
      <MenuLinks />
    </S.TopoCenter>
  </S.TopoWapper>
)

export default Header
