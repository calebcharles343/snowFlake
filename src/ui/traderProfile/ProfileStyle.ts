import styled, { css } from "styled-components";

interface ProfileProps {
  type: string;
}
interface SpanStyleProps {
  type: string;
}

const ProfileFlex = styled.div<ProfileProps>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.type === "containerFlex" &&
    css`
      height: 100vh;
      padding: 50px 30px;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "profile" &&
    css`
      align-items: center;
      gap: 1rem;
    `}

  ${(props) => props.type === "account" && css``}
  ${(props) => props.type === "assets" && css``}

//////////////////////////////////////
  //MEDIA QUERRY
  /////////////////////////////////////

  //small
  @media (min-width: 640px) {
    font-size: 14px;
    line-height: 20px;
  }

  //medium
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  //large
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }

  //extra large
  @media (min-width: 1280px) {
    /* font-size: 20px;
    line-height: 28px; */
  }

  //extra extra large
  @media (min-width: 1536px) {
    /* font-size: 24px;
    line-height: 32px; */
  }
`;
const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.6rem;
`;
const LiStyle = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  //////////////////////////////////////
  //MEDIA QUERRY
  /////////////////////////////////////

  //small
  @media (min-width: 640px) {
  }

  //medium
  @media (min-width: 768px) {
  }

  //large
  @media (min-width: 1024px) {
  }

  //extra large
  @media (min-width: 1280px) {
  }

  //extra extra large
  @media (min-width: 1600px) {
    flex-direction: row;
  }
`;

const SpanStyle = styled.span<SpanStyleProps>`
  ${(props) =>
    props.type === "fade" &&
    css`
      color: var(--color-grey-400);
    `}
`;

const ValueUnitStyle = styled.div`
  display: flex;
  gap: 5px;
`;

export { UlStyle, LiStyle, SpanStyle, ValueUnitStyle };

export default ProfileFlex;
