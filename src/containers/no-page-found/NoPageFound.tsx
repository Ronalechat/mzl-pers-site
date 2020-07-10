import * as React from "react";
import styled from "styled-components";

const NoPageFound: React.FC = () => {
  return <AbsWrapper>No page Found</AbsWrapper>;
};

const AbsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default NoPageFound;
