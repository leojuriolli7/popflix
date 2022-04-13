import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export const Container = styled.div`
  position: absolute;
  top: 55px;
  right: 12px;
  cursor: pointer;

  @media (max-width: 1080px) {
    top: 52px;
  }

  @media (max-width: 720px) {
    right: 8px;
    top: 46px;
  }

  @media (max-width: 429px) {
    top: 44px;
  }
`;

export const EyeVisible = styled(AiOutlineEye).attrs({
  size: 27,
  className: "animate__animated animate__fadeIn",
})``;

export const EyeInvisible = styled(AiOutlineEyeInvisible).attrs({
  size: 27,
  className: "animate__animated animate__fadeIn",
})``;
