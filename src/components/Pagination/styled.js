import styled from 'styled-components'
import media from "styled-media-query";

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--texts);
  color: var(--texts);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  width: 100%;
  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: var(--headerBackground);
    }
  }

  ${media.lessThan("small")`
    padding: 1.5rem 0;
  `}
`
