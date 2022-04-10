import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

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
