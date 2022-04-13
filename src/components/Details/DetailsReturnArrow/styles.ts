import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

export const ArrowBackContainer = styled.div`
  position: absolute;
  padding: 0.5rem;
  left: -5px;
  top: -10px;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.primary
      : props.theme.colors.background};
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const WhiteArrowBack = styled(IoMdArrowRoundBack).attrs({
  size: 25,
  color: "white",
})``;
