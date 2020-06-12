import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  display:flex;
  width: 100%;
  text-decoration: none;
`;
export const PostItemWrapper = styled.section`
  background: var(--postsBackground);
  padding: 24px;
  border-radius: 16px 0 16px 0;
  width: 100%;
  min-height: 220px;
  display: flex;

`;

export const PostItemInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const PostItemDate = styled.time`
  font-size: 14px;
  color: var(--texts);
  margin-bottom: 25px;
  display: block;

`;
export const PostItemTitle = styled.h1`
  font-size: 20px;
  color: var(--texts);
  font-weight: 600;
  margin-bottom: 20px;
`;
export const PostItemDescription = styled.p`
  font-size: 16px;
  color: var(--texts);
  font-weight: 400;
  margin-bottom: 20px;
  flex: 1;
`;

export const PostItemTagWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const PostItemTag = styled.div`
  background: ${props => props.background ? props.background : 'var(--texts)'};
  color: #FFF;
  font-size: 12px;
  display: flex;
  padding: 6px 12px;
  border-radius: 5px 0px 5px 0px;
  margin-left: 8px;
  align-self: flex-end;
`;
