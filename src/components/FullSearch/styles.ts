import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { lighten } from "polished";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 3rem;
  color: ${(props) => props.theme.colors.sectionText};

  @media (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const RadioInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  .css-ahj2mt-MuiTypography-root {
    @media (max-width: 610px) {
      font-size: 1.25rem;
    }
  }

  .css-qfz70r-MuiFormGroup-root {
    justify-content: center;
  }

  .css-vqmohf-MuiButtonBase-root-MuiRadio-root {
    color: ${(props) => props.theme.title === "dark" && "white"};
  }

  .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked {
    color: #df2935;
  }
`;

export const SearchInputAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: clamp(260px, 76%, 500px);
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 13px;
`;

export const SearchIconWhite = styled(BsSearch).attrs({
  size: 25,
  color: "white",
})``;

export const SearchIconBlack = styled(BsSearch).attrs({
  size: 25,
  color: "black",
})``;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12.5px 20px 12.5px 50px;
  font-size: 1.1rem;
  border: 1px transparent solid;
  border-radius: 28px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.3);
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.background
      : lighten(0.06, props.theme.colors.background)};
  color: ${(props) => props.theme.colors.sectionText};

  &:focus {
    outline: none;
    outline: ${(props) => `2px solid ${props.theme.colors.sectionText}`};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
  gap: 0.5rem;

  @media (max-width: 1180px) {
    margin: 2rem 10px 0 10px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 855px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const MediaPosterContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: calc(225px + 15%);
  height: calc(337.5px + 15%);
  transition: 0.3s;
  border-radius: 23px;
  margin-bottom: 1.5rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  @media (max-width: 590px) {
    width: 191.25px;
    height: 286.87px;
  }

  @media (max-width: 420px) {
    width: calc(191.25px - 15%);
    height: calc(286.87px - 15%);
  }

  @media (max-width: 360px) {
    width: 225px;
    height: 337.5px;
  }
`;

export const MediaPoster = styled.img`
  border-radius: 23px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);
`;
