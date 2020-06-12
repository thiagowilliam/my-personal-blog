import styled from "styled-components"

export const SearchWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox {
    width: 100%;
  }
  .ais-Stats {
    color: #8899a6;
    width: 100%;
    margin: 18px 0;
  }
  .ais-SearchBox-input {
    border: 0;
    padding: 10px;
    font-size: 16px;
    background: none;
    width: 100%;
    color: var(--texts);
    border: 1px solid var(--borders);
    border-radius: 4px;
    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits{
    width: 100%;
  }

  .ais-Hits-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 16px;
    width: 100%;
  }

  .ais-Hits-item{
    width: 100%;
    a{
      width: 100%;
    }
  }
`
