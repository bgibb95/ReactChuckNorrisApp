import styled, { keyframes } from 'styled-components/macro';
import { colours } from './variables';

export const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin: auto;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  transition: all 0.5s ease;
`;

export const Parent = styled.div`
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  position: relative;
`;

const translate = keyframes`
  25%{
    transform: translate(30px,0);
  }
  50%{
    transform: translate(30px,30px);
  }
  75%{
    transform: translate(0,30px);
  }
  100%{
    transform: translate(0,0);
  }
`;

const trace = keyframes`
  0%{
    border: 5px solid white;
  }
  25%{
    border: 5px solid ${colours.orange};
  }
  50%, 100%{
    border: 5px solid white;
  }
`;

export const BaseElement = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 100%;
  border: 5px solid white;
  box-shadow: 0 0 20px 0 ${colours.black};
  animation: ${trace} 2s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  &.tl{
    top: 0;
    left: 0;
    animation-delay: 0s;
  }
  &.tr{
    top: 0;
    right: 0;
    animation-delay: 0.5s;
  }
  &.br{
    bottom: 0;
    right: 0;
    animation-delay: 1s;
  }
  &.bl{
    bottom: 0;
    left: 0;
    animation-delay: 1.5s;
  }
  &.moved{
    background: ${colours.orange};
    z-index: 10;
    border: 5px solid ${colours.orange};
    animation: ${translate} 2s cubic-bezier(0.75, 0, 0.5, 1) infinite;
  }
`;
