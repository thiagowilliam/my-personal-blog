import styled from 'styled-components';
import media from "styled-media-query";

export const MainContent = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  min-height: calc(100vh - 76px);
  padding: 140px 0 0 0;
  ${media.lessThan("large")`
    padding: 140px 20px 0 20px;
  `}
`;
