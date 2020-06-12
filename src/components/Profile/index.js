import React from "react"
import Avatar from "../Avatar"

import getThemeColor from '../../utils/getThemeColor'

import * as S from "./styled"

const Profile = () => {
  return (
    <S.ProfileWapper
      to="/"
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
    >
      <Avatar />
      <S.DescriptionProfile>
        <h1>Thiago William</h1>
        <p>Desenvolvedor Front End</p>
      </S.DescriptionProfile>
    </S.ProfileWapper>
  )
}
export default Profile
