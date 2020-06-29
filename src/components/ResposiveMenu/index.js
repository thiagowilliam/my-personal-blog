import React from 'react';

import { slide as Menu } from 'react-burger-menu';

import links from '../MenuLinks/content';

import * as S from './styled';

export default props => {
  return (
    <S.ResponsiveMenu>
      <Menu>
        {links.map((link, i) => (
          <a
            key={i}
            className="menu-item"
            activeClass="active"
            href={link.url}
            title={link.title}
            target={link.target}
          >
            {link.label}
          </a>
        ))}
        <a
          className="menu-item"
          href="https://thiagowilliam.com.br/"
          target="blank"
          title="Sobre mim"
          alt="Sobre mim"
        >
          Sobre mim
        </a>
      </Menu>
    </S.ResponsiveMenu>
  );
};
