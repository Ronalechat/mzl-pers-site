import * as React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ variant, text }) => {
  return <StyledButton variant={variant}>{text}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    color: black;
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
        case "round-swipe-top":
          return css`
            border: 2px solid tomato;
            background: none;
            color: tomato;
            padding: 20px 40px;
            font-size: 25px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.5s;
            position: relative;
            overflow: hidden;
            z-index: 1;
            &:hover {
              color: white;
            }
            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: tomato;
              z-index: -10;
              border-radius: 0 0 50% 50%;
              height: 0%;
              transition: all 0.5s;
            }
            &:hover:before {
              height: 190%;
              color: white;
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

export default Button;
