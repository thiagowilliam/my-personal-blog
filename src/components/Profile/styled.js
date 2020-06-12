import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWapper = styled(AniLink)`
  display: flex;
  align-items: center;
  color: #fcfcfc;
  text-decoration: none;
`

export const DescriptionProfile = styled.div`
  margin-left: 15px;
  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 2px;

    ${media.lessThan("medium")`
    font-size: 1rem;
  `}
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;

    ${media.lessThan("medium")`
    font-size: 0.8rem;
  `}
  }
`
