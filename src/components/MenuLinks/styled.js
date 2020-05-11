import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    border-bottom: 2px solid #57D131;
  }
  
`
export const MenuLinksLink = styled(Link)`
  color: #FCFCFC;
  text-decoration: none;
  transition: all 0.5s;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(27, 30, 38, 1);
  margin-right: 15px;

  &:hover{
    border-bottom: 2px solid #57D131;
  }
`

export const MenuLinksLinkOut = styled.a`
  color: #FCFCFC;
  text-decoration: none;
  transition: all 0.5s;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(27, 30, 38, 1);
  margin-right: 15px;

  &:hover{
    border-bottom: 2px solid #57D131;
  }
  `