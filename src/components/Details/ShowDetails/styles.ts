import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 80vh;
  margin-bottom: 2rem;

  @media (max-width: 845px) {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 23px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};

  @media (max-width: 1150px) {
    margin: 0 2rem 0 2rem;
  }

  @media (max-width: 845px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 426px) {
    margin: 0 1rem 0 1rem;
  }
`;

export const Poster = styled.img`
  width: clamp(10rem, 37vw, 42%);
  object-fit: cover;
  height: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-width: 845px) {
    width: 100%;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
  }
`;

export const InfoContainer = styled.div`
  width: 60%;
  text-align: center;
  color: ${(props) => props.theme.colors.sectionText};

  .alice-carousel__dots {
    margin-top: 10px;
  }

  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: #df2935;
  }

  @media (max-width: 845px) {
    width: 100%;
  }
`;

export const ShowTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 0;
  margin: 2.2rem 30px 0 30px;
  line-height: 45px;
`;

export const ShowGenresContainer = styled.div`
  margin: 15px 10px 5px 10px;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 845px) {
    margin: 30px 20px 5px 20px;
  }
`;

export const ShowGenres = styled.p`
  font-size: 1.1rem;
  line-height: 25px;
  text-decoration: underline;
  margin: 0;

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }

  @media (max-width: 845px) {
    font-size: 1.5rem;
  }
`;

export const ReleaseAndRuntimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0.7rem 0.7rem 0 0.7rem;
  flex-wrap: wrap;

  @media (max-width: 845px) {
    margin-top: calc(0.7rem + 10px);
  }
`;

export const ShowReleaseDate = styled.p`
  font-size: 1.1rem;
  margin: 0;

  @media (max-width: 845px) {
    font-size: 1.3rem;
  }
`;

export const ShowRuntime = styled(ShowReleaseDate)``;

export const ShowProductionCompany = styled(ShowReleaseDate)``;

export const ShowOverview = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  margin: 15px 40px 20px 40px;

  @media (max-width: 985px) {
    font-size: 1.3rem;
    margin: 10px 15px 30px 15px;
  }
`;

export const CastContainer = styled.div`
  margin: 0 auto;
  width: 88%;
`;

export const CastMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const CastMemberPicture = styled.img`
  width: 115px;
  border-radius: 20px;
  box-shadow: 2px 4px 7px 0px rgb(0 0 0 / 20%);

  @media (max-width: 845px) {
    width: 140px;
  }

  @media (max-width: 361px) {
    width: 120px;
  }
`;

export const CastMemberName = styled.p`
  text-align: center;
  width: 135px;
  margin-top: 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 845px) {
    font-size: 1.2rem;
  }
`;

export const ReleasedContainer = styled.div``;

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
    // Rating stars
    color: #fdca40;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const RatingText = styled.p`
  font-size: 1.25rem;
  margin: 0;
  margin-left: 0.5rem;
`;

export const UnreleasedText = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 20px;
  color: #df2935;

  @media (max-width: 845px) {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
`;

export const SeasonsContent = styled(Content)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  margin-top: 3rem;
`;

export const SeasonOverview = styled.h2`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.sectionText};

  @media (max-width: 455px) {
    font-size: 2.6rem;
  }

  @media (max-width: 353px) {
    font-size: 2.1rem;
  }
`;

export const SeasonsContainer = styled.div`
  display: flex;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 23px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  flex-wrap: wrap;
  box-shadow: none;
  justify-content: center;
  gap: 2.5rem;
  padding: 2rem 0;

  @media (max-width: 1150px) {
    margin: 0 1.5rem 0 1.5rem;
  }

  @media (max-width: 426px) {
    margin: 0 1rem 0 1rem;
  }
`;

export const SeasonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SeasonImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
`;

export const SeasonImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 25px;
  width: 80%;
  text-align: center;
`;

export const Icon = styled.img`
  width: 45%;
`;

export const SeasonTitle = styled.h3`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.sectionText};
  font-size: 2.1rem;
`;

export const SeasonDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SeasonEpisodeCount = styled.p`
  margin-top: 0.25rem;
  color: ${(props) => props.theme.colors.sectionText};
  font-size: 1.2rem;

  @media (max-width: 720px) {
    font-size: 1.3rem;
  }
`;

export const SeasonAirDate = styled(SeasonEpisodeCount)`
  margin: 0rem;
`;
