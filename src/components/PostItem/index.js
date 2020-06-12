import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled';

const PostItem = ({ slug, category, date, timeToRead, title, description, background }) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="left"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead} de leitura</S.PostItemDate>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
        <S.PostItemTagWrapper>
          <S.PostItemTag background={background}>{category}</S.PostItemTag>
        </S.PostItemTagWrapper>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
