import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import defaultPoster from "../../../assets/defaultposter.png";
import * as S from "./styles";
import { DetailsError } from "../DetailsError";
import tvIcon from "../../../assets/tvicon.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { fetchSeasonDetails, fetchShowDetails } from "../../../utils/requests";
import { EpisodePosterSkeleton } from "../../Skeleton/SeasonDetailsSkeleton/EpisodePosterSkeleton";

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
  season_number: number;
}

interface ShowDetailsInterface {
  name: string;
  id: number;
}

export function SeasonDetails() {
  const { id } = useParams();
  const { number } = useParams();
  const { t }: { t: any } = useTranslation();
  const [seasonDetails, setSeasonDetails] = useState<SeasonDetailsInterface>();
  const [showDetails, setShowDetails] = useState<ShowDetailsInterface>();
  const [doesMediaExist, setDoesMediaExist] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    Promise.all([fetchSeasonDetails(id, number), fetchShowDetails(id)])
      .then((response) => {
        setSeasonDetails(response[0].data);
        setShowDetails(response[1].data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setDoesMediaExist(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    fetchData();
  }, [i18n.language]);

  const episodeAirDate = (date: any) => new Date(date);

  const currentDate = new Date();

  const diff = (date: any) =>
    Math.floor((Number(date) - Number(currentDate)) / (1000 * 60 * 60 * 24));

  return doesMediaExist ? (
    <S.Container>
      <S.ContainerWrap>
        <S.PageTitle>
          {loading
            ? "Overview"
            : seasonDetails?.season_number === 0
            ? `${showDetails?.name} Specials Overview`
            : `${showDetails?.name} ${t("season")} ${number} Overview`}
        </S.PageTitle>
        {
          <S.Content>
            <S.ArrowBackContainer onClick={() => navigate(`/show/${id}`)}>
              <S.WhiteArrowBack />
            </S.ArrowBackContainer>
            {loading
              ? [1, 2, 3, 4, 5, 6].map((item) => <EpisodePosterSkeleton />)
              : seasonDetails?.episodes.map((episode) => (
                  <S.EpisodeContainer
                    key={episode?.id}
                    onClick={() =>
                      navigate(
                        `/show/${showDetails?.id}/season/${seasonDetails.season_number}/episode/${episode.episode_number}`
                      )
                    }
                  >
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
                    <S.EpisodeAirDate
                      isReleased={
                        diff(episodeAirDate(episode?.air_date)) < 0
                          ? true
                          : false
                      }
                    >
                      {isNaN(diff(episodeAirDate(episode?.air_date)))
                        ? t("unknownAirDate")
                        : `${episodeAirDate(episode?.air_date).getDate()}/${
                            episodeAirDate(episode?.air_date).getMonth() + 1
                          }/${episodeAirDate(episode?.air_date).getFullYear()}`}
                    </S.EpisodeAirDate>
                  </S.EpisodeContainer>
                ))}
          </S.Content>
        }
      </S.ContainerWrap>
    </S.Container>
  ) : (
    <DetailsError text={t("noSeasonError")} />
  );
}
