import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  margin-bottom: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperSearch = styled.div`
  max-width: 700px;
  width: 100%;
  border: 1px solid var(--borders);
  border-radius: 4px;
  display: flex;
  align-items: center;
  input{
    border: 0;
    padding: 10px;
    font-size: 16px;
    background: none;
    width: 100%;
    color: var(--texts);

  }

  button{
    border: none;
    height: 100%;
    background: none;
    padding: 10px;
    color: var(--texts);
  }
`;
export const WrapperCategory = styled.div`
    border: 1px solid var(--borders);
    border-radius: 4px;
    padding: 0 20px;
  select{
    border: none;
    background: none;
    padding: 10px;
    font-size: 16px;
    color: var(--texts);
    height: 42px;
  }
`;
