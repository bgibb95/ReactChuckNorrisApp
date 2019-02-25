import styled from 'styled-components/macro';
import { sizes, fonts, colours } from './variables';

export const JokeIcon = styled.img`
  max-width: 50px;
  margin: 10px 0;
`;

export const JokeHeader = styled.h3`
  transition: all 0.5s ease;
  margin: 35px auto;
  width: 80%;
  @media ${sizes.tablet}{
    margin: 40px auto;
  }
  @media ${sizes.mobile}{
    margin: 10px auto;
    width: 90%;
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${colours.orange};
  outline: none;
  display: inline-block;
  width: max-content;
  padding: 12px 25px;
  margin: auto 20px auto 0;
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  font-family: ${fonts.secondary};
  font-size: 100%;
  transition: all 0.5s ease;
  &:hover{
    background-color: transparent;
    color: ${colours.orange};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 20px auto;
  width: max-content;
  @media ${sizes.mobile}{
    margin: 10px auto;
  }
`;
