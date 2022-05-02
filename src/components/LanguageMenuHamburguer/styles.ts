import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  border: 1px solid transparent;
  border-radius: 46px;
  background-color: white;

  @media (max-width: 320px) {
    width: 60%;
  }
`;

interface ImageContainerProps {
  isActive: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  width: 50px;
  border: ${(props) => (props.isActive ? "3px solid black" : "0px")};
  border-radius: 50%;

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const FlagImage = styled.img``;
