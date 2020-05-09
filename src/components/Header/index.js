import React from "react"

import Profile from "../Profile"

import * as S from "./styled"

const Header = () => (
  <S.TopoWapper>
    <S.TopoCenter>
      <Profile />
    </S.TopoCenter>
  </S.TopoWapper>
)

export default Header
