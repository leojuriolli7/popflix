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

export const MovieTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 0;
  margin: 2.2rem 30px 0 30px;
  line-height: 45px;
`;

export const MovieGenresContainer = styled.div`
  margin: 15px 10px 5px 10px;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 845px) {
    margin: 30px 20px 5px 20px;
  }
`;

export const MovieGenres = styled.p`
  font-size: 1.1rem;
  line-height: 25px;
  text-decoration: underline;

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
  margin: 0 1rem;
  flex-wrap: wrap;
`;

export const MovieReleaseDate = styled.p`
  font-size: 1.1rem;

  @media (max-width: 845px) {
    font-size: 1.3rem;
    margin-top: 10px;
  }
`;

export const MovieRuntime = styled(MovieReleaseDate)``;

export const MovieProductionCompany = styled(MovieReleaseDate)``;

export const MovieOverview = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  margin: 5px 40px 20px 40px;

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
  margin-top: 20px;

  span {
    // Rating stars
    color: #fdca40;
  }
`;

export const RatingText = styled.p`
  font-size: 1.25rem;
  margin: 0;
  margin-left: 0.5rem;
`;

export const ReviewLink = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 20px;
  text-decoration: underline;

  @media (max-width: 845px) {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
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
