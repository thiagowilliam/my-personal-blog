import React, { useState, useEffect } from 'react';

import links from './content'

import { LightBulb } from '@styled-icons/octicons/LightBulb'
import { Search } from '@styled-icons/feather/Search'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'


const MenuLinks = () => {
  const [theme, setTheme] = useState(null)

  const isLightMode = theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
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
          <S.MenuLinksLinkOut href="https://thiagowilliam.com.br/" target="_blank">
            Sobre mim
          </S.MenuLinksLinkOut>
        </S.MenuLinksItem>
      </S.MenuLinksList>

      <S.IconChanceLight onClick={() => {
        window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
      }}
        className={theme}
      >
        <LightBulb size="20" title="Mudar tema" />
      </S.IconChanceLight>
      <S.LinkPageSearch
        to="/search"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Search size="23" title="Pesquisar" />
      </S.LinkPageSearch>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
