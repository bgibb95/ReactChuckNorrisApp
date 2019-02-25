import styled from 'styled-components/macro';
import { colours, sizes } from './variables';
import backgroundImage from '../assets/images/background.jpg';

const AppShell = styled.div`
  text-align: center;
  background-color: ${colours.black};
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  @media ${sizes.tablet} {
    background-position: 50%;
  }
`;

export default AppShell;
