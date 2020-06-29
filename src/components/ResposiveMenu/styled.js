import styled from 'styled-components';
import media from "styled-media-query";

export const ResponsiveMenu = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: flex;
  `}
  /* Individual item */
  .bm-item {
    display: inline-block;

    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #fcfcfc;
    transition: color 0.2s;
    font-size: 18px;
    cursor: pointer;
    padding-bottom: 8px;
    border-bottom: 2px solid transparent;
    transition: 0.2s all;
  }

  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }

  .active {
    border-bottom: 2px solid #57d131;
  }

  /* The rest copied directly from react-burger-menu docs */

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 25px;
    top: 16px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fcfcfc;
    transition: all 0.2s;
    height: 17% !important;
    border-radius: 5px;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
