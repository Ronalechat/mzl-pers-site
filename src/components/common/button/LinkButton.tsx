import * as React from "react";
import styled, { css } from "styled-components";
import { LinkButtonProps } from "./types";

const LinkButton: React.FC<LinkButtonProps> = ({ variant, text }) => {
  return (
    <StyledButton variant={variant} text={text}>
      {variant === "circle-build" ? (
        <>
          <CircleBuildSpan />
          {text}
        </>
      ) : (
        text
      )}
    </StyledButton>
  );
};

const CircleBuildSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mainOrange};
  border-radius: 8px;
  transform: scale(0);
  transition: all 0.3s;
  display: inline-block;
  z-index: -1;
`;

const StyledButton = styled.a<LinkButtonProps>(
  ({ theme, variant, text }) => css`
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    /* outline: none;
    box-shadow: none;
    border: none;
    user-select: none;
    font-family: inherit;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    :hover,
    :focus,
    :active {
      outline: none;
    } */

    ${() => {
      switch (variant) {
        case "side-swap":
          return css`
            padding: 20px 40px;            
            letter-spacing: 4px;
            color: ${({ theme }) => theme.colors.transparent};
            border: 3px solid ${({ theme }) => theme.colors.mainOrange};
            font-size: 30px;
            position: relative;

            &:before {
              content: "${text}";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: ${({ theme }) => theme.colors.mainGrey};
              color: ${({ theme }) => theme.colors.mainOrange};
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.5s;
            }

            &:hover:before {
              left: 100%;
              transform: scale(0) rotateY(360deg);
              opacity: 0;
            }

            &:after {
              content: "${text}";
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background-color: ${({ theme }) => theme.colors.mainGrey};
              color: ${({ theme }) => theme.colors.mainOrange};
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.5s;
              transform: scale(0) rotateY(0deg);
              opacity: 0;
            }
            &:hover:after {
              left: 0;
              transform: scale(1) rotateY(360deg);
              opacity: 1;
            }
          `;
        case "circle-build":
          return css`
            width: 220px;
            height: 80px;
            background-color: ${({ theme }) => theme.colors.transparent};
            color: ${({ theme }) => theme.colors.mainOrange};
            font-size: 26px;
            text-align: center;
            line-height: 80px;
            transition: all 0.5s;
            position: relative;
            z-index: 4;

            &:before,
            &:after {
              content: "";
              position: absolute;
              top: 50%;
              width: 20px;
              height: 20px;
              background-color: ${({ theme }) => theme.colors.mainOrange};
              border-radius: 50%;
              transform: translateY(-50%);
              transition: all 0.3s;
              z-index: -1;
              opacity: 0;
            }
            &:before {
              left: 0;
              box-shadow: -100px 0 0 ${({ theme }) => theme.colors.mainOrange};
            }
            &:after {
              right: 0;
              box-shadow: 100px 0 0 ${({ theme }) => theme.colors.mainOrange};
            }

            &:hover:before {
              left: 50%;
              box-shadow: 30px 0 0 ${({ theme }) => theme.colors.mainOrange};
              transform: translate3d(-50%, -50%, 0);
              opacity: 1;
            }

            &:hover:after {
              right: 50%;
              box-shadow: -30px 0 0 ${({ theme }) => theme.colors.mainOrange};
              transform: translate3d(50%, -50%, 0);
              opacity: 1;
            }

            &:hover ${CircleBuildSpan} {
              transform: scale(1);
              transition-delay: 0.4s;
            }
            &:hover {
              color: ${({ theme }) => theme.colors.mainGrey};
              transition-delay: 0.4s;
              z-index: 1;
            }
          `;

        case "stereoscopic":
          return css`
            width: 300px;
            height: 60px;
            background-color: ${({ theme }) => theme.colors.transparent};
            text-align: center;
            line-height: 60px;
            font-weight: bold;
            letter-spacing: 2px;
            position: relative;
            transition: all 0.2s;
            font-size: 20px;
            z-index: 1;

            &:before {
              content: "";
              position: absolute;
              top: -3px;
              left: -3px;
              width: 100%;
              height: 100%;
              background-color: ${({ theme }) => theme.colors.mainBlue};
              z-index: -1;
            }

            &:after {
              content: "";
              position: absolute;
              top: 3px;
              left: 3px;
              width: 100%;
              height: 100%;
              background-color: ${({ theme }) => theme.colors.mainOrange};
              z-index: -1;
            }
          `;

        default:
          return css`
            background-color: ${theme.colors.grey};
            color: inherit;
            :hover,
            :focus {
              background-color: ${theme.colors.greyHover};
            }
            :active {
              background-color: ${theme.colors.greyActive};
            }
          `;
      }
    }}
  `
);

export default LinkButton;
