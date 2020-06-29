import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;

  ${media.lessThan("medium")`
    margin: 0;
  `}

  margin: auto;
  width: 3.75rem;

  ${media.lessThan("medium")`
    height: 2rem;
    width: 2rem;
  `}
`

