import styled from 'styled-components'
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  display: flex;
  align-items: center;
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
  ${media.lessThan("medium")`
    display: none;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    border-bottom: 2px solid var(--borders);
  }

`
export const MenuLinksLink = styled(AniLink)`
  color: #FCFCFC;
  text-decoration: none;
  transition: all 0.5s;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--headerBackground);
  margin-right: 15px;

  &:hover{
    border-bottom: 2px solid var(--borders);
  }
`

export const MenuLinksLinkOut = styled.a`
  color: #FCFCFC;
  text-decoration: none;
  transition: all 0.5s;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--headerBackground);
  margin-right: 15px;

  &:hover{
    border-bottom: 2px solid var(--borders);
  }
  `
export const IconChanceLight = styled.div`
  color: #C5C5C5;
  cursor: pointer;
  border-left: 1px solid #C5C5C5;
  height: 20px;
  padding-left: 15px;
  transition: all 0.2s;

  &:hover{
    color: #FCFCFC;
  }

  &.light{
    color: #d4d400;
    &:hover{
      color: #e2e240;
    }
  }
`;

export const LinkPageSearch = styled(AniLink)`
  color: #C5C5C5;
  cursor: pointer;
  height: 23px;
  padding-left: 16px;
  transition: all 0.2s;
  &:hover{
    color: var(--borders);
  }
`;

export const IconMenu = styled.div`
  color: #C5C5C5;
  cursor: pointer;
  height: 23px;
  padding-right: 16px;
  display: none;
  ${media.lessThan("medium")`
    display: flex;
  `}
`;
