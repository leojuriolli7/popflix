import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import defaultPoster from "../../../assets/defaultposter.png";
import * as S from "./styles";
import { DetailsError } from "../DetailsError";
import tvIcon from "../../../assets/tvicon.svg";

interface EpisodesInterface {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  still_path: string;
}

interface SeasonDetailsInterface {
  id: number;
  air_date: number;
  episodes: EpisodesInterface[];
  name: string;
  poster_path: string;
  season_number: string;
}

interface ShowDetailsInterface {
  name: string;
}

export function SeasonDetails() {
  const { id } = useParams();
  const { number } = useParams();
  const [seasonDetails, setSeasonDetails] = useState<SeasonDetailsInterface>();
  const [showDetails, setShowDetails] = useState<ShowDetailsInterface>();
  const navigate = useNavigate();

  const episodeAirDate = (date: any) => new Date(date);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`tv/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`)
      .then((response) => setShowDetails(response.data));
    api
      .get(
        `tv/${id}/season/${number}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setSeasonDetails(response.data));
  }, [id, number]);

  return seasonDetails?.id ? (
    <S.Container>
      <S.ContainerWrap>
        <S.PageTitle>{`${showDetails?.name} Season ${number} Overview`}</S.PageTitle>
        <S.Content>
          <S.ArrowBackContainer onClick={() => navigate(`/show/${id}`)}>
            <S.WhiteArrowBack />
          </S.ArrowBackContainer>
          {seasonDetails?.episodes.map((episode) => (
            <S.EpisodeContainer key={episode?.id}>
              <S.PosterContainer>
                <S.PosterImage
                  src={
                    episode.still_path
                      ? `https://image.tmdb.org/t/p/w500/${episode.still_path}`
                      : defaultPoster
                  }
                />
                {!episode.still_path && (
                  <S.NoPosterContainer>
                    <S.NoPosterIcon src={tvIcon} />
                  </S.NoPosterContainer>
                )}
              </S.PosterContainer>
              <S.EpisodeTitle title={episode?.name}>
                {episode?.name}
              </S.EpisodeTitle>
              <S.EpisodeAirDate>{`${episodeAirDate(
                episode?.air_date
              ).getDate()}/${
                episodeAirDate(episode?.air_date).getMonth() + 1
              }/${episodeAirDate(
                episode?.air_date
              ).getFullYear()}`}</S.EpisodeAirDate>
            </S.EpisodeContainer>
          ))}
        </S.Content>
      </S.ContainerWrap>
    </S.Container>
  ) : (
    <DetailsError text="No Season Found" />
  );
}
