import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  background: var(--postsBackground);
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 8px 0;
  margin-top: 32px;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  color: var(--texts);
  display: flex;
  padding: 1.4rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &.previous {
    border-right: 1px solid var(--texts);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
