import * as React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <AbsWrapper>
      <h2>Hey, welcome to my site</h2>
      <CSText>It's coming soon!</CSText>
      <br />
      <CSText>- MZL</CSText>
    </AbsWrapper>
  );
};

const AbsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CSText = styled.div`
  display: block;
`;

export default Home;
