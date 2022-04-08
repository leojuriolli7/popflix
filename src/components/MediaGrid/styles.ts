import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

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
  }

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
  background-color: white;
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

export const MediaNameContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 24px;
  width: 80%;
  text-align: center;
`;

export const MediaName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 26px;
  width: 80%;
  text-align: center;
`;

export const Icon = styled.img`
  width: 60%;
`;

export const RatingContainer = styled.div`
  position: absolute;
  top: -5px;
  left: -10px;
  background: #df2935;
  border-radius: 50%;
`;

export const RatingStarContainer = styled.div`
  position: relative;
`;

export const RatingStar = styled(AiFillStar).attrs({
  size: 55,
  color: "#fff",
})`
  @media (max-width: 590px) {
    display: none;
  }
`;

export const RatingStarSmaller = styled(AiFillStar).attrs({
  size: 45,
  color: "#fff",
})`
  display: none;

  @media (max-width: 590px) {
    display: block;
  }
`;

export const RatingNumberContainer = styled.div`
  position: absolute;
  top: 17px;
  left: 16px;

  @media (max-width: 590px) {
    top: 13px;
    left: 13px;
  }
`;

export const RatingNumber = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;
  font-weight: bold;

  @media (max-width: 590px) {
    font-size: 14px;
  }
`;

export const UnreleasedRatingTextContainer = styled.div`
  position: absolute;
  top: 17px;
  left: 15px;
`;

export const UnreleasedRatingText = styled.p`
  font-size: 14px;
  color: black;
  margin: 0;
  font-weight: bold;
`;

export const PaginationContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root {
    color: ${(props) => (props.theme.title === "dark" ? "#fff" : "black")};
  }

  .css-1scal0h-MuiPaginationItem-root {
    color: ${(props) => (props.theme.title === "dark" ? "#fff" : "black")};
  }

  .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: rgba(223, 41, 53, 0.3);
  }

  .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover {
    background-color: rgba(223, 41, 53, 0.3);
  }
`;
