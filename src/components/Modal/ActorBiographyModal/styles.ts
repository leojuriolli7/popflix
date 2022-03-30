import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export const ModalHeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 5px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const CloseButtonWhite = styled(CgClose).attrs({
  color: "white",
  size: 30,
})``;

export const CloseButtonBlack = styled(CloseButtonWhite).attrs({
  color: "black",
})``;

export const TitleText = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  color: ${(props) => props.theme.colors.sectionText};
  margin: 0;
  margin-right: 30px;
`;

export const BiographyText = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.sectionText};
  text-align: justify;

  @media (max-width: 1080px) {
    font-size: 1.4rem;
  }
`;
