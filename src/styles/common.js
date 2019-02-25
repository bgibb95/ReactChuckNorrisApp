import styled, { createGlobalStyle, css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { colours, sizes, fonts } from './variables';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fonts.primary};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    @media ${sizes.tablet}{
      font-size: 30px;
    }
    @media ${sizes.mobile}{
      font-size: 13px;
    }
  }
  a,button{
    color: white;
    -webkit-tap-highlight-color: transparent;
    &:focus, &:active{
      outline: none;
    }
  }
  .fade-appear, .fade-enter{
    opacity: 0;
    z-index: 1;
  }
  .fade-appear-active, .fade-enter{
    &.fade-enter-active{
      opacity: 1;
      transition: opacity 0.5s ease 0.3s;
    }
  }
  .fade-exit{
    opacity: 1;
  }
  .fade-exit, .fade-exit-active{
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;

export const Page = styled.div`
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Copy = styled.p`
  font-family: ${fonts.secondary};
  width: 75%;
  line-height: 1.5;
  margin: 1em auto;
`;

const sharedLinkStyle = css`
  text-decoration: none;
  text-transform: capitalize;
  margin: 10px 20px;
  display: inline-block;
  width: 30%;
  cursor: pointer;
  transition: color 0.5s ease;
  font-family: ${fonts.secondary};
  &:hover{
    color: ${colours.lightOrange};
  }
`;

export const BasicLink = styled.a`
  ${sharedLinkStyle}
`;

export const StyledLink = styled(Link)`
  border: 1px solid white;
  border-radius: 25px;
  padding: 7px 0;
  ${sharedLinkStyle}
`;

export const NewCategoryLink = styled(StyledLink)`
  margin: auto 0;
  width: auto;
  border: none;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  transition: all 0.5s ease;
  @media ${sizes.desktopSmall}{
    font-size: 2rem;
  }
  @media ${sizes.tablet}{
    font-size: 3.5rem;
    margin: 0px auto 40px;
  }
  @media ${sizes.mobile} {
    font-size: 1.7rem;
    margin: 10px auto;
  }
`;

const Container = styled.div`
  width: 30%;
  position: absolute;
  background-color: rgba(57, 57, 57, 0.9);
  top: 50%;
  padding: 30px;
  transform: translateY(-50%);
  transition: all 0.5s ease;
  box-shadow: 0px 0px 20px 0px black;
  @media ${sizes.tablet}{
    box-sizing: border-box;
    position: relative;
    top: 0;
    left: 0;
    width: 90%;
    margin: 20px auto;
    transform: translate(0px, 0px);
  }
  @media ${sizes.mobile}{
    padding: 10px;
  }
`;

export const RightContainer = styled(Container)`
  right: 10%;
  opacity: ${props => (props.loading ? 0 : 1)};
  @media ${sizes.tablet}{
    padding: 70px 40px;
  }
  @media ${sizes.mobile}{
    padding: 10px;
  }
`;

export const LeftContainer = styled(Container)`
  left: 10%;
`;
