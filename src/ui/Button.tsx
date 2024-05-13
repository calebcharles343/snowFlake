import styled, { css } from "styled-components";

interface ButtonT {
  size: "small" | "medium" | "large" | "fill";
  variation?: "primary" | "secondary" | "danger";
  type: string;
  disabled: boolean;
  onClick: () => void;
}

const Button = styled.button<Partial<ButtonT>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 20px 0 20px 0;

  /////////////////////////////
  //SIZES
  ///////////////////////////
  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 12px;
      line-height: 20px;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      padding: 1rem 0.8rem;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: 16px;
      line-height: 24px;
      padding: 1.2rem 1.6rem;
      font-weight: 500;
    `}

    ${({ size }) =>
    size === "large" &&
    css`
      font-size: 18px;
      line-height: 28px;
      padding: 1.2rem 2.4rem;
      font-weight: 500;
    `}

    ${({ size }) =>
    size === "fill" &&
    css`
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      width: 100%;
    `}
//////////////////////////////////////
//MEDIA QUERRY
/////////////////////////////////////

//small
  @media (min-width: 640px) {
    /* padding: 5px 10px 5px 10; */
  }

  //medium
  @media (min-width: 768px) {
    /* padding: 10px 0 10px 0; */
  }

  //large
  @media (min-width: 1024px) {
    /* padding: 15px 0 15px 0; */
    /* font-size: 16px;
    line-height: 24px; */
  }

  //extra large
  @media (min-width: 1280px) {
    /* padding: 20px 0 20px 0; */
  }

  //extra extra large
  @media (min-width: 1536px) {
  }

  //////////////////////////////////////
  //VARIATION
  //////////////////////////////////////

  ${({ variation }) =>
    variation === "primary" &&
    css`
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);

      &:hover {
        background-color: var(--color-brand-700);
      }
    `}

  ${({ variation }) =>
    variation === "secondary" &&
    css`
      color: var(--color-grey-600);
      background: var(--color-grey-0);
      border: 1px solid var(--color-grey-200);

      &:hover {
        background-color: var(--color-grey-50);
      }
    `}

    ${({ variation }) =>
    variation === "danger" &&
    css`
      color: var(--color-red-100);
      background-color: var(--color-red-700);

      &:hover {
        background-color: var(--color-red-800);
      }
    `}
`;

export default Button;
