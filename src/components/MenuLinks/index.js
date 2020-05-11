import React from 'react';

import links from './content'

import * as S from './styled'


const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => (
        <S.MenuLinksItem>
          <S.MenuLinksLink
            to={link.url}
            title={link.title}
            activeClassName="active"
            target={link.target}
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
      <S.MenuLinksItem>
        <S.MenuLinksLinkOut href="https://thiagowilliam.com.br/">
          Meu Portifolio
        </S.MenuLinksLinkOut>
      </S.MenuLinksItem>
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks