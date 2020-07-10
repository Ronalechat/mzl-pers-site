import * as React from "react";
import styled from "styled-components";
import portrait from "../../assets/images/portrait.jpg";
// import Button from "../../components/common/button/Button";
import LinkButton from "../../components/common/button/LinkButton";
import Button from "../../components/common/button/Button";

const Home: React.FC = () => {
  return (
    <AbsWrapper>
      <ImageLeft
        role="img"
        aria-label="Portrait picture of Michael"
        image={portrait}
      />
      <RightContainer>
        <WelcomeHeading>Michael Z Lin</WelcomeHeading>
        <CSText>It's coming soon!</CSText>
        <br />
        <CSText>- MZL</CSText>
        <Button variant="round-swipe-top" text="CONTENT HERE" />
        <LinkButton variant="stereoscopic" text="button hover effect" />
      </RightContainer>
    </AbsWrapper>
  );
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

const ImageLeft = styled.div<{ image: string }>`
  background-color: ${({ theme }) => theme.colors.mainOrange};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  width: 50vw;
  height: 100%;
  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 460px;
  }
`;
const RightContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    width: 100vw;
  }
`;

const WelcomeHeading = styled.h2`
  color: red;
`;

const CSText = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.mainGrey};
`;

export default Home;
