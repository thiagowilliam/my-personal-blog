import styled from "styled-components"

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 9;
  width: 100%;
  background: rgba(27, 30, 38, 1);
  padding: 14px 0;
`

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`
export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
