import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.text
      : `${lighten(0.3, props.theme.colors.primary)}`};
  padding: 0.5rem 1rem;
  gap: 1rem;
  display: flex;
  box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.1);
  border-radius: 23px;

  @media (max-width: 842px) {
    display: none;
  }
`;

interface ImageContainerProps {
  isActive: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 30px;

  border: ${(props) =>
    props.isActive
      ? props.theme.title === "light"
        ? "black 2px solid"
        : "white 2px solid"
      : "0px"};
  border-radius: 50%;

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const FlagImage = styled.img``;
