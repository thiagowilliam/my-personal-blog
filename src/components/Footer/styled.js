import styled from "styled-components"

export const Container = styled.footer`
  position: relative;
  width: 100%;
  background: var(--headerBackground);
  padding: 14px 0;
  margin-top: 32px;
`

export const ContainerCenter = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const SocialLinksWrapper = styled.nav`
  position: relative;
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
  width: 16px;
  height: 16px;
  margin-right: 10px;
`

export const WrapperCopyRight = styled.div`
  color: #8899a6;
  font-size: 14px;
  display: flex;
`

export const WrapperHeart = styled.div`
  margin-left: 8px;
  animation: pulse 1s infinite;
`

export const PulsingHeart = styled.div`
  position: relative;
  width: 20px;
  height: 16px;
  &:after,
  &:before {
    position: absolute;
    content: '';
    left: 9px;
    top: 0;
    width: 10px;
    height: 16px;
    background: #aa0000;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    animation: pulsecolor 1s infinite;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    animation: pulsecolor 1s infinite;
  }
  @keyframes pulse {
    10% {
      transform: scale(1.1);
    }
  }
  @keyframes pulsecolor {
    10% {
      background: #dd0000;
    }
  }
`
