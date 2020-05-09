import React from "react"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  return (
    <S.ProfileWapper>
      <Avatar />
      <S.DescriptionProfile>
        <h1>Thiago William</h1>
        <p>Desenvolvedor Front End</p>
      </S.DescriptionProfile>
    </S.ProfileWapper>
  )
}
export default Profile
