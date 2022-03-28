import { darken } from "polished";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 80vh;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  color: ${(props) => props.theme.colors.sectionText};
`;

export const ShowInfoContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleTextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 0.5rem;
  margin-right: 2rem;
  margin-left: 2rem;
`;

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;

  @media (max-width: 845px) {
    font-size: 2.8rem;
  }
`;

export const ArrowBackContainer = styled.div`
  position: absolute;
  padding: 0.5rem;
  left: 35px;
  bottom: -85px;
  background: ${(props) => props.theme.colors.primary};
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

export const ShowGenresContainer = styled.div`
  margin: 0px 10px 5px 10px;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  text-align: center;

  @media (max-width: 845px) {
    margin: 30px 20px 5px 20px;
  }
`;

export const ShowGenres = styled.p`
  font-size: 1.1rem;
  line-height: 25px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }

  @media (max-width: 845px) {
    font-size: 1.3rem;
  }
`;

export const ShowCastContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

export const ShowCast = styled(ShowGenres)``;

export const NoReviewsContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const NoReviewsMessage = styled(TitleText)`
  color: ${(props) => props.theme.colors.sectionText};
`;

export const ReviewContainer = styled.div`
  margin: 2rem 1.5rem 4rem 1.5rem;
  border-radius: 23px;
  padding-bottom: 2rem;
  padding-top: 2rem;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 3rem 0 3rem;
  max-width: 25rem;
  transition: 0.3s;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.primary
      : props.theme.colors.background};

  &:hover {
    transform: scale(1.07);
    cursor: pointer;
  }
`;

export const Username = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 80px;
  padding: 5px 0 5px 5px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  span {
    color: #fdca40;
  }
`;

export const NoRatingMessage = styled.p`
  color: ${(props) => props.theme.colors.sectionText};
  font-weight: bold;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`;

export const RatingText = styled.p`
  font-size: 1.25rem;
  margin: 0;
`;

export const ReviewDatesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 413px) {
    gap: 0.6rem;
  }

  @media (max-width: 371px) {
    flex-direction: column;
  }
`;

export const ReviewDates = styled(NoRatingMessage)`
  font-weight: 400;
  font-size: 1.1rem;

  @media (max-width: 413px) {
    font-size: 1rem;
  }
`;

export const ReviewTextContainer = styled.div`
  margin-top: 0.5rem;
  width: 95%;
  padding: 1rem;
  border-radius: 20px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.background : "#fff"};
`;

export const ReviewText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: ${(props) => darken(0.1, props.theme.colors.sectionText)};

  @media (max-width: 890px) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
`;
