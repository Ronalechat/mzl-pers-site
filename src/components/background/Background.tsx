import * as React from "react";
import styled from "styled-components";
// import { theme } from "../../theme/theme";

const Background: React.FC = () => {
  return <BackgroundColors />;
};

const BackgroundColors = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => `repeating-linear-gradient(
    45deg,
    ${theme.colors.mainOrange},
    ${theme.colors.mainOrange} 20%,
    ${theme.colors.mainGreen} 55%,
    ${theme.colors.mainBlue} 100%
  )`};
`;

export default Background;
