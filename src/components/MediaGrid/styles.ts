import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 3rem;

  @media (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 610px) {
    flex-direction: column;
  }

  label {
    color: ${(props) => props.theme.colors.sectionText};
    @media (max-width: 610px) {
      font-size: 1.25rem;
    }
  }

  .css-qfz70r-MuiFormGroup-root {
    justify-content: center;
  }

  .css-vqmohf-MuiButtonBase-root-MuiRadio-root {
    color: ${(props) => props.theme.title === "dark" && "white"};

    &:hover {
      background-color: rgba(223, 41, 53, 0.05);
    }
  }

  .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked {
    color: #df2935;
  }
`;

export const SortText = styled.p`
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-weight: 400;
  color: ${(props) => props.theme.colors.sectionText};
`;

export const Select = styled.select`
  border-radius: 10px;
  border: #ccc 1px solid;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.background
      : lighten(0.06, props.theme.colors.background)};
  color: ${(props) => props.theme.colors.sectionText};
  padding: 2px 5px 2px 5px;

  @media (max-width: 610px) {
    padding: 5px 8px 5px 8px;
    font-size: 1.1rem;
  }
`;

export const SelectOption = styled.option``;

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
  /* width: 225px; */
  /* height: 337.5px; */
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

export const PaginationContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .css-1qpp9n8 {
    color: ${(props) => (props.theme.title === "dark" ? "#fff" : "black")};
  }

  .css-ezc4fw {
    color: ${(props) => (props.theme.title === "dark" ? "#fff" : "black")};
  }

  .css-1qpp9n8.Mui-selected {
    background-color: rgba(223, 41, 53, 0.3);
  }

  .css-1qpp9n8:hover {
    background-color: rgba(223, 41, 53, 0.3);
  }
`;
