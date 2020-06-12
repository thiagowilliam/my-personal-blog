import React from "react"

import { Search } from '@styled-icons/feather/Search'

import * as S from "./styled"

const Filters = () => {
  return (
    <S.Content>
      <S.WrapperSearch>
        <input type="text" placeholder="O que você esta procurando" />
        <button type="submit">
          <Search size="20" title="Buscar" />
        </button>
      </S.WrapperSearch>

      <S.WrapperCategory>
        <select name="" id="">
          <option value="">Categorias</option>
        </select>
      </S.WrapperCategory>
    </S.Content>
  )
}
export default Filters