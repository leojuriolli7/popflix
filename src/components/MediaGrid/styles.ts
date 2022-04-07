import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const MainHeadingContainer = styled.div`
  color: ${(props) => props.theme.colors.sectionText};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainHeading = styled.h1`
  text-align: center;
  margin: 0;

  @media (max-width: 405px) {
    font-size: 2.5rem;
    margin: 0 20px 0 20px;
  }
`;

export const MainHeadingSubText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 10px 20px 0 20px;
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
`;

export const SelectOption = styled.option``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
  gap: 0.5rem;

  @media (max-width: 1000px) {
    margin: 2rem 10px 0 10px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 345px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const MediaPosterContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 225px;
  height: 337.5px;
  transition: 0.3s;
  border-radius: 23px;
  margin-bottom: 1.5rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  @media (max-width: 512px) {
    width: 191.25px;
    height: 286.87px;
  }

  @media (max-width: 435px) {
    width: calc(191.25px - 25%);
    height: calc(286.87px - 25%);
  }

  @media (max-width: 345px) {
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
  left: 26px;
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
  bottom: -5px;
  right: -10px;
`;

export const RatingStarContainer = styled.div`
  position: relative;
`;
export const RatingStar = styled(AiFillStar).attrs({
  size: 55,
  color: "#fdca40",
})``;

export const RatingNumberContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const RatingNumber = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;
  font-weight: bold;
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
