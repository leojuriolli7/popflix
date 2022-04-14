import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import * as S from "./styles";
import defaultPicture from "../../../assets/default2.png";
import { Rating } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import defaultPoster from "../../../assets/defaultposter.png";
import tvIcon from "../../../assets/tvicon.svg";
import { DetailsError } from "../DetailsError";
import { CompaniesPopover } from "../CompaniesPopover";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { LanguageSwitch } from "../../../utils/constants";
import { DetailsReturnArrow } from "../DetailsReturnArrow";
import { MediaPosterSkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaPosterSkeleton";
import { CastMemberSkeleton } from "../../Skeleton/MediaDetailsSkeletons/CastMemberSkeleton";
// import { useMutation } from "react-query";
// import { getMediaDetails } from "../../../utils/requests";

interface GenreInterface {
  name: string;
  id: number;
}

interface SpokenLanguagesInterface {
  english_name: string;
}

interface NetworkInterface {
  id: number;
  name: string;
}

interface ProductionCompaniesInterface {
  id: number;
  name: string;
}

interface SeasonsInterface {
  air_date: string;
  name: string;
  episode_count: string;
  id: string;
  poster_path: string;
  season_number: number;
}

interface MediaDetailsInterface {
  genres: GenreInterface[];
  id: number;
  overview: string;
  name: string;
  title: string;
  vote_average: number;
  poster_path: string;
  first_air_date: string;
  release_date: string;
  episode_run_time: [];
  number_of_episodes: number;
  number_of_seasons: number;
  spoken_languages: SpokenLanguagesInterface;
  status: string;
  networks: NetworkInterface[];
  seasons: SeasonsInterface[];
  runtime: string;
  production_companies: ProductionCompaniesInterface[];
}

interface CastInterface {
  name: string;
  character: string;
  profile_path: string;
  id: number;
}

interface MediaCreditsInterface {
  cast: CastInterface[];
}

interface MediaDetailsProps {
  mediaType: "tv" | "movie";
}

export function MediaDetails({ mediaType }: MediaDetailsProps) {
  const { id } = useParams();
  const { t }: { t: any } = useTranslation();
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface>();
  const [mediaCredits, setMediaCredits] = useState<MediaCreditsInterface>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchMediaDetailsAndCredits() {
    await api
      .get(
        `${mediaType}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=${LanguageSwitch()}`
      )
      .then((response) => setMediaDetails(response.data));

    await api
      .get(
        `${mediaType}/${id}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMediaCredits(response.data));

    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    fetchMediaDetailsAndCredits();
  }, [id, mediaType, i18n.language]);

  const date = new Date(
    mediaDetails?.first_air_date
      ? mediaDetails?.first_air_date
      : String(mediaDetails?.release_date)
  );

  const currentDate = new Date();

  const diff = Math.floor(
    (Number(date) - Number(currentDate)) / (1000 * 60 * 60 * 24)
  );

  const seasonDate = (date: any) => new Date(date);

  return mediaDetails?.id ? (
    <S.Container>
      <S.Content>
        <DetailsReturnArrow />
        {loading ? (
          <MediaPosterSkeleton />
        ) : (
          <S.Poster
            src={
              mediaDetails?.poster_path === null
                ? defaultPoster
                : `https://image.tmdb.org/t/p/w500/${mediaDetails?.poster_path}`
            }
          />
        )}
        <S.InfoContainer>
          <S.MediaTitle>
            {mediaDetails?.name || mediaDetails?.title}
          </S.MediaTitle>
          <S.MediaGenresContainer>
            {mediaDetails?.genres.map((genre: GenreInterface) => (
              <S.MediaGenres key={genre.id}>{genre.name} </S.MediaGenres>
            ))}
          </S.MediaGenresContainer>
          {diff < 0 && (
            <S.ReleasedContainer>
              <S.RatingContainer
                onClick={() =>
                  navigate(
                    `/${mediaType === "tv" ? "show" : "movie"}/${id}/reviews`
                  )
                }
              >
                <Rating
                  value={
                    mediaDetails?.vote_average
                      ? Number(mediaDetails.vote_average / 2)
                      : 0
                  }
                  precision={0.5}
                  readOnly
                  size="large"
                />
                <S.RatingText>
                  {`${
                    mediaDetails?.vote_average
                      ? Number(mediaDetails.vote_average / 2)
                      : 0
                  }
              ${t("stars")}`}
                </S.RatingText>
              </S.RatingContainer>
            </S.ReleasedContainer>
          )}
          <S.ReleaseAndRuntimeContainer>
            <S.MediaReleaseDate>
              {mediaDetails?.first_air_date || mediaDetails.release_date
                ? `${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()}`
                : "Unknown Date"}
            </S.MediaReleaseDate>
            <S.MediaRuntime>
              {mediaDetails.number_of_seasons
                ? mediaDetails?.number_of_seasons
                  ? `${mediaDetails?.number_of_seasons} ${
                      mediaDetails.number_of_seasons > 1
                        ? t("seasons")
                        : t("season")
                    }`
                  : t("unknownSeasons")
                : mediaDetails?.runtime
                ? `${mediaDetails?.runtime}min`
                : t("unknownRuntime")}
            </S.MediaRuntime>

            {mediaDetails?.networks && (
              <S.MediaNetwork>
                Network:{" "}
                <S.MediaNetworkSpan
                  onClick={() =>
                    navigate(`/network/${mediaDetails?.networks[0].id}`)
                  }
                >
                  {mediaDetails?.networks[0]?.name}
                </S.MediaNetworkSpan>
              </S.MediaNetwork>
            )}
          </S.ReleaseAndRuntimeContainer>
          <S.MediaProductionCompaniesContainer>
            {mediaDetails?.production_companies ? (
              <CompaniesPopover
                mediaType={mediaType}
                currentMedia={mediaDetails}
              />
            ) : (
              <S.MediaProductionCompany>
                {t("unknown")}
              </S.MediaProductionCompany>
            )}
          </S.MediaProductionCompaniesContainer>

          <S.MediaOverview>
            {mediaDetails?.overview ? mediaDetails?.overview : t("noOverview")}
          </S.MediaOverview>
          <S.CastContainer>
            <AliceCarousel
              animationDuration={200}
              disableButtonsControls
              responsive={{
                0: {
                  items: 2,
                },
                564: {
                  items: 3,
                },
                985: {
                  items: 4,
                },
              }}
              items={
                loading
                  ? [1, 2, 3, 4].map(() => <CastMemberSkeleton />)
                  : mediaCredits?.cast
                      .slice(0, 10)
                      .map((cast: CastInterface) => (
                        <S.CastMemberContainer key={cast.id}>
                          <S.CastMemberPicture
                            onClick={() => navigate(`/actor/${cast.id}`)}
                            src={
                              cast.profile_path === null
                                ? defaultPicture
                                : `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                            }
                          />
                          <S.CastMemberName>
                            {cast.character !== ""
                              ? `${cast.name} ${t("as")} ${cast.character}`
                              : `${cast.name}`}
                          </S.CastMemberName>
                        </S.CastMemberContainer>
                      ))
              }
            />
          </S.CastContainer>
          {(diff > 0 || isNaN(diff) === true) && (
            <S.UnreleasedText>
              {mediaDetails?.first_air_date || mediaDetails?.release_date
                ? `${t("releasesIn")} ${diff} ${t("days")}`
                : t("releaseDateTBA")}
            </S.UnreleasedText>
          )}
          <S.FullCreditsLinkContainer>
            <S.FullCreditsLink
              onClick={() =>
                navigate(
                  `/${mediaType === "tv" ? "show" : "movie"}/${
                    mediaDetails?.id
                  }/credits`
                )
              }
            >
              {t("viewFullCredits")}
            </S.FullCreditsLink>
          </S.FullCreditsLinkContainer>
        </S.InfoContainer>
      </S.Content>
      {mediaDetails?.seasons && (
        <S.SeasonContainerWrap>
          <S.SeasonSectionTitle>
            {t("seasonsOverviewTitle")}
          </S.SeasonSectionTitle>
          <S.SeasonListContainer numberOfItems={mediaDetails?.seasons.length}>
            {mediaDetails?.seasons.map((season) => (
              <S.SeasonContainer
                key={season.id}
                onClick={() => {
                  navigate(
                    `/show/${mediaDetails.id}/season/${season.season_number}`
                  );
                }}
              >
                <S.SeasonImageContainer>
                  <S.SeasonImage
                    src={
                      season.poster_path === null
                        ? defaultPoster
                        : `https://image.tmdb.org/t/p/w200/${season.poster_path}`
                    }
                  />
                  {season.poster_path === null && (
                    <>
                      <S.NoPosterIconContainer>
                        <S.NoPosterIcon src={tvIcon} />
                      </S.NoPosterIconContainer>
                    </>
                  )}
                </S.SeasonImageContainer>
                <S.SeasonTitle>{season.name}</S.SeasonTitle>
                <S.SeasonDetailsContainer>
                  <S.SeasonAirDate>
                    {t("airDate")}
                    {season.air_date === null
                      ? t("unknownAirDate")
                      : `${seasonDate(season.air_date).getDate()}/${
                          seasonDate(season.air_date).getMonth() + 1
                        }/${seasonDate(season.air_date).getFullYear()}`}
                  </S.SeasonAirDate>
                  <S.SeasonEpisodeCount>
                    {`${season.episode_count} ${t("episodes")}`}
                  </S.SeasonEpisodeCount>
                </S.SeasonDetailsContainer>
              </S.SeasonContainer>
            ))}
          </S.SeasonListContainer>
        </S.SeasonContainerWrap>
      )}
    </S.Container>
  ) : (
    <DetailsError
      text={`${t("errorNoMedia1")} ${
        mediaType === "tv" ? "Show" : t("movie")
      } ${t("errorNoMedia2")}`}
    />
  );
}
