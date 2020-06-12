import styled from 'styled-components';

export const WrapperGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`;
