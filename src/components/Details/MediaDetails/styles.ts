import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 845px) {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  position: relative;
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

  .alice-carousel__dots-item:not(.__custom) {
    background: ${(props) =>
      props.theme.title === "dark" ? "#e0e4fb" : "grey"};
  }

  @media (max-width: 845px) {
    width: 100%;
  }
`;

export const MediaTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 0;
  margin: 2.2rem 35px 0 35px;
  line-height: 45px;

  @media (max-width: 845px) {
    margin: 1.8rem 20px 0 20px;
  }
`;

export const MediaGenresContainer = styled.div`
  margin: 15px 35px 5px 35px;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 845px) {
    margin: 15px 20px 5px 20px;
  }
`;

export const MediaGenres = styled.p`
  font-size: 1.1rem;
  line-height: 25px;
  margin: 0;
  font-weight: 500;

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
    margin-top: calc(0.7rem + 5px);
  }
`;

export const MediaReleaseDate = styled.p`
  font-size: 1.1rem;
  margin: 0;

  @media (max-width: 845px) {
    font-size: 1.3rem;
  }
`;

export const MediaRuntime = styled(MediaReleaseDate)``;

export const MediaProductionCompaniesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
`;

export const MediaProductionCompany = styled(MediaReleaseDate)`
  text-decoration: underline;
  margin: 0 0.5rem;

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
`;

export const MediaNetwork = styled(MediaReleaseDate)``;

export const MediaNetworkSpan = styled.span`
  text-decoration: underline;
  font-size: 1.1rem;
  margin: 0;

  @media (max-width: 845px) {
    font-size: 1.3rem;
  }

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
`;

export const MediaOverview = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  margin: 10px 40px 20px 40px;

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
    margin-top: 10px;
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
  font-weight: 600;
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

export const FullCreditsLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 845px) {
    padding-bottom: 1rem;
  }
`;

export const FullCreditsLink = styled.p`
  text-decoration: underline;
  font-size: 1.2rem;
  margin: 0;
  padding-bottom: 1rem;

  @media (max-width: 845px) {
    font-size: 1.4rem;
  }

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
`;

export const SeasonContainerWrap = styled(Content)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  margin-top: 3rem;
`;

export const SeasonSectionTitle = styled.h2`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.sectionText};
  text-align: center;

  @media (max-width: 455px) {
    font-size: 2.6rem;
  }

  @media (max-width: 353px) {
    font-size: 2.1rem;
  }
`;

interface SeasonListContainerProps {
  numberOfItems: number;
}

export const SeasonListContainer = styled.div<SeasonListContainerProps>`
  ${(props) => (props.numberOfItems === 1 ? "display: flex" : "display: grid")};
  ${(props) => props.numberOfItems === 1 && "align-items: center"};
  ${(props) => props.numberOfItems === 1 && "justify-content: center"};
  ${(props) =>
    props.numberOfItems > 1 && "grid-template-columns: repeat(2, 1fr)"};
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 23px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  box-shadow: none;
  gap: 2.5rem;
  padding: 2rem 0;

  @media (max-width: 1150px) {
    margin: 0 1.5rem 0 1.5rem;
  }

  @media (max-width: 573px) {
    grid-template-columns: 1fr;
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
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
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

export const NoPosterIconContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 25px;
  width: 80%;
  text-align: center;
`;

export const NoPosterIcon = styled.img`
  width: 45%;
`;

export const SeasonTitle = styled.h3`
  text-align: center;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.sectionText};
  font-size: 2.1rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media (max-width: 573px) {
    -webkit-line-clamp: 10;
  }
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

export const TrailerHeader = styled.h2`
  font-size: 2.1rem;
  color: ${(props) => props.theme.colors.sectionText};

  @media (max-width: 1150px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const TrailerAndImagesContainer = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  width: 100%;
  max-width: 1050px;
`;

export const TrailerAndProviders = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1150px) {
    margin: 0 2rem 0 2rem;
  }

  @media (max-width: 555px) {
    flex-direction: column;
  }
`;

export const TrailerContainer = styled.div`
  flex: 85%;
  height: fit-content;

  * {
    border-radius: 20px;
  }
`;

export const ProvidersContainer = styled.div<{ height: number | undefined }>`
  flex: 15%;
  height: ${({ height }) => (height ? `${height}px` : `300px`)};
  overflow-y: auto;
  box-shadow: 1px 5px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  ::-webkit-scrollbar {
    background-color: white;
    color: red;
    width: 10px;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e3e3e3;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bdbdbd;
  }

  @media (max-width: 555px) {
    height: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ProvidersList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding-bottom: 20px;

  @media (max-width: 555px) {
    flex-direction: row;
    padding: 10px;
  }
`;

export const Provider = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 1px 5px 5px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ProviderContainer = styled.div`
  position: relative;
  width: 75%;
  height: 75%;
  border-radius: 10px;

  @media (max-width: 555px) {
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
  }
`;

export const ProviderType = styled.div<{ type: "buy" | "flatrate" }>`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 10px 0 10px;
  background: ${({ type }) => (type === "buy" ? "green" : "#1F51FF")};
  box-shadow: 1px 2px 5px 4px rgba(0, 0, 0, 0.2);
  padding: 3px;
  font-size: 12px;
  color: white;

  @media (max-width: 555px) {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 10px;
    top: -10px;
    width: fit-content;
  }
`;
