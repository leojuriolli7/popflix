import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 80vh;
  margin-bottom: 2rem;

  @media (max-width: 845px) {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  padding-bottom: 2rem;
  margin-top: 2rem;
  border-radius: 23px;
  color: ${(props) => props.theme.colors.sectionText};
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};

  @media (max-width: 1150px) {
    margin: 0 2rem 0 2rem;
  }

  @media (max-width: 426px) {
    margin: 0 1rem 0 1rem;
  }
`;

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

export const EpisodeImage = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
`;

export const EpisodeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
  margin: 2.2rem 35px 0 35px;
  line-height: 50px;
  text-align: center;

  @media (max-width: 485px) {
    font-size: 2.8rem;
    margin: 1rem 35px 0 35px;
  }
`;

export const EpisodeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const EpisodeInfo = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 1.1rem;
  text-align: center;

  @media (max-width: 1080px) {
    font-size: 1.3rem;
  }
`;

interface EpisodeAirDateProps {
  isReleased: boolean;
}

export const EpisodeAirDate = styled(EpisodeInfo)<EpisodeAirDateProps>`
  color: ${(props) => !props.isReleased && "#DF2935"};
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin-top: 0.7rem;

  @media (max-width: 845px) {
    margin-top: 1rem;
  }

  span {
    color: #fdca40;
  }
`;

export const RatingText = styled.p`
  font-size: 1.25rem;
  margin: 0;
  margin-left: 0.5rem;
`;

export const EpisodeOverview = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 1.1rem;
  margin: 10px 40px 0 40px;

  @media (max-width: 985px) {
    font-size: 1.2rem;
    margin: 10px 15px 0 15px;
  }
`;

export const UnreleasedMessage = styled(EpisodeInfo)`
  color: #df2935;
  font-weight: bold;
`;

export const CastListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.sectionText};
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  margin: 3rem 0 3rem 0;
  padding: 2rem 0 2rem 0;
  border-radius: 23px;

  @media (max-width: 1150px) {
    margin: 2rem 2rem 0 2rem;
  }

  @media (max-width: 426px) {
    margin: 2rem 1rem 0 1rem;
  }
`;

export const CastListSectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 2.2rem 35px 0 35px;

  @media (max-width: 485px) {
    margin: 0 35px 0 35px;
  }
`;

export const CastListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

export const CastMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 24px;
  transition: 0.3s;
  padding: 0 1rem;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const CastMemberPhotoContainer = styled.div`
  height: 300px;
  width: 200px;

  @media (max-width: 500px) {
    height: 270px;
    width: 180px;
  }
`;

export const CastMemberPhoto = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const CastMemberName = styled.h2`
  margin: 0;
  margin-top: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const CastMemberRole = styled.p`
  margin: 0;
  margin-top: 4px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
