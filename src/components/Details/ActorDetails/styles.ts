import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 900px;
  /* max-width: 1100px; */
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 80vh;
  margin-bottom: 2rem;

  @media (max-width: 845px) {
    margin-top: 2rem;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 23px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};

  @media (max-width: 910px) {
    margin: 0 1rem 0 1rem;
  }

  @media (max-width: 690px) {
    flex-direction: column;
  }
`;

export const PictureContainer = styled.div`
  /* width: clamp(8rem, 50%, 21rem); */
  width: clamp(8rem, 50%, 31rem);

  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const ActorPicture = styled.img`
  width: 100%;
  border-top-left-radius: 23px;
  border-bottom-left-radius: 23px;

  @media (max-width: 690px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 23px;
  }
`;

export const ActorDetails = styled.div`
  width: clamp(8rem, 50%, 60rem);
  padding: 1rem 0;
  text-align: center;
  color: ${(props) => props.theme.colors.sectionText};

  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const ActorName = styled.h1`
  font-size: 2.1rem;
  padding: 0 1rem;
  line-height: 40px;

  @media (max-width: 1080px) {
    font-size: 2.3rem;
  }
`;

export const ActorPlaceOfBirth = styled.p`
  font-size: 1.1rem;
  margin: 0;

  @media (max-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const ActorBirthdayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ActorBirthday = styled.p`
  font-size: 1.1rem;
  margin: 0;

  @media (max-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const ActorDeathday = styled(ActorBirthday)``;

export const ActorBiographyContainer = styled.div`
  margin: 0.8rem 1rem 0.8rem 1rem;
`;

export const ActorBiography = styled.p`
  font-size: 1rem;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 19;
  -webkit-box-orient: vertical;

  @media (max-width: 1080px) {
    font-size: 1.2rem;
    -webkit-line-clamp: 15;
  }

  @media (max-width: 800px) {
    -webkit-line-clamp: 10;
  }

  @media (max-width: 690px) {
    -webkit-line-clamp: 10;
  }
`;

export const FullBiographyLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FullBiographyLink = styled.p`
  font-size: 1.1rem;
  text-decoration: underline;
  margin: 0;

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }

  @media (max-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const ActorCreditsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 23px;
  flex-wrap: wrap;
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.sectionText};

  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};

  @media (max-width: 910px) {
    margin: 2rem 1rem 2rem 1rem;
  }
`;

export const ActorCreditsTitle = styled.h2`
  font-size: 2.1rem;
  margin: 0;
  padding: 0 1rem;
  line-height: 40px;
  margin-top: 2rem;
`;

export const ActorCreditContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 2rem 2rem;

  @media (max-width: 703px) {
    padding: 0 1rem 2rem;
  }

  @media (max-width: 505px) {
    grid-template-columns: 1fr;
  }
`;

export const MediaCreditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  transition: 0.3s;
  margin: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

export const MediaPosterContainer = styled.div`
  width: 300px;
  height: 200px;
  position: relative;

  @media (max-width: 703px) {
    width: 255px;
    height: 170px;
  }

  @media (max-width: 579px) {
    width: 216.75px;
    height: 144.5px;
  }
`;

export const MediaPoster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

export const NoPosterIconContainer = styled.div`
  position: absolute;
  top: 71px;
  left: 122px;
  width: 60px;
`;

export const NoPosterIcon = styled.img``;

export const MediaTitle = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 0;
  margin-top: 0.3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const MediaCharater = styled.p`
  text-align: center;
  margin: 0;
`;