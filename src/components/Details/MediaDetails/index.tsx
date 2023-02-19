import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { DetailsReturnArrow } from "../DetailsReturnArrow";
import { MediaPosterSkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaPosterSkeleton";
import { CastMemberSkeleton } from "../../Skeleton/MediaDetailsSkeletons/CastMemberSkeleton";
import {
  fetchMediaCredits,
  fetchMediaDetails,
  fetchMediaProviders,
  fetchMediaVideos,
} from "../../../utils/requests";
import {
  CastInterface,
  GenreInterface,
  MediaCreditsInterface,
  MediaDetailsInterface,
  ProviderInterface,
  VideosInterface,
} from "../../../utils/interfaces";
import { MediaTitleSkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaTitleSkeleton";
import { MediaGenresSkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaGenresSkeleton";
import { MediaRatingSkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaRatingSkeleton";
import { MediaReleaseAndRuntimeSkeleton } from "../../Skeleton/MediaReleaseAndRuntimeSkeleton";
import { MediaProductionCompanySkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaProductionCompanySkeleton";
import { MediaOverviewSkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaOverviewSkeleton";
import { FullCreditsSkeleton } from "../../Skeleton/MediaDetailsSkeletons/FullCreditsSkeleton";
import { filterProviderByCountry, getYoutubeTrailersAndTeasers } from "./utils";
import ReactPlayer from "react-player";
import useWindowSize from "./useWindowSize";

interface MediaDetailsProps {
  mediaType: "tv" | "movie";
}

export function MediaDetails({ mediaType }: MediaDetailsProps) {
  const { id } = useParams();
  const { t }: { t: any } = useTranslation();
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface>();
  const [mediaCredits, setMediaCredits] = useState<MediaCreditsInterface>();
  const [mediaTrailer, setMediaTrailer] = useState<VideosInterface>();
  const [mediaProviders, setMediaProviders] = useState<ProviderInterface>();
  const [loading, setLoading] = useState(true);
  const [doesMediaExist, setDoesMediaExist] = useState(true);
  const navigate = useNavigate();

  const size = useWindowSize();

  const trailerRef = useRef<HTMLDivElement>(null);
  const videoHeight = useMemo(
    () => trailerRef?.current?.offsetHeight,
    [size, trailerRef?.current?.offsetHeight]
  );

  const fetchData = () => {
    Promise.all([
      fetchMediaDetails(mediaType, id),
      fetchMediaCredits(mediaType, id),
      fetchMediaVideos(mediaType, id),
      fetchMediaProviders(mediaType, id),
    ])
      .then((response) => {
        setMediaDetails(response[0].data);
        setMediaCredits(response[1].data);

        const videos = getYoutubeTrailersAndTeasers(response[2].data.results);
        setMediaTrailer(videos?.[0]);

        const filteredProvider = filterProviderByCountry(
          response[3].data.results
        );
        setMediaProviders(filteredProvider);

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
  }, [i18n.language, id]);

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

  return doesMediaExist ? (
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
          {loading ? (
            <MediaTitleSkeleton />
          ) : (
            <S.MediaTitle>
              {mediaDetails?.name || mediaDetails?.title}
            </S.MediaTitle>
          )}
          <S.MediaGenresContainer>
            {loading ? (
              <>
                <MediaGenresSkeleton />
                <MediaGenresSkeleton />
              </>
            ) : (
              mediaDetails?.genres.map((genre: GenreInterface) => (
                <S.MediaGenres key={genre.id}>{genre.name} </S.MediaGenres>
              ))
            )}
          </S.MediaGenresContainer>
          {diff < 0 && (
            <S.ReleasedContainer>
              {loading ? (
                <MediaRatingSkeleton />
              ) : (
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
              )}
            </S.ReleasedContainer>
          )}
          <S.ReleaseAndRuntimeContainer>
            {loading ? (
              <MediaReleaseAndRuntimeSkeleton />
            ) : (
              <>
                <S.MediaReleaseDate>
                  {mediaDetails?.first_air_date || mediaDetails?.release_date
                    ? `${date.getDate()}/${
                        date.getMonth() + 1
                      }/${date.getFullYear()}`
                    : t("unknownDate")}
                </S.MediaReleaseDate>
                <S.MediaRuntime>
                  {mediaDetails?.number_of_seasons
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
              </>
            )}
          </S.ReleaseAndRuntimeContainer>
          <S.MediaProductionCompaniesContainer>
            {loading ? (
              <MediaProductionCompanySkeleton />
            ) : mediaDetails?.production_companies ? (
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

          {loading ? (
            <MediaOverviewSkeleton />
          ) : (
            <S.MediaOverview>
              {mediaDetails?.overview
                ? mediaDetails?.overview
                : t("noOverview")}
            </S.MediaOverview>
          )}
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
          {loading ? (
            <FullCreditsSkeleton />
          ) : (
            <S.FullCreditsLinkContainer>
              <S.FullCreditsLink
                onClick={() =>
                  navigate(
                    `/${mediaType === "tv" ? "show" : "movie"}/${id}/credits`
                  )
                }
              >
                {t("viewFullCredits")}
              </S.FullCreditsLink>
            </S.FullCreditsLinkContainer>
          )}
        </S.InfoContainer>
      </S.Content>
      <S.TrailerAndImagesContainer>
        {mediaTrailer?.id && (
          <>
            <S.TrailerHeader>
              {mediaProviders ? t("trailersAndProviders") : "Trailer"}
            </S.TrailerHeader>
            <S.TrailerAndProviders>
              <S.TrailerContainer ref={trailerRef}>
                <ReactPlayer
                  width="100%"
                  height="auto"
                  style={{
                    aspectRatio: "16/9",
                  }}
                  url={`https://www.youtube.com/watch?v=${mediaTrailer?.key}`}
                  controls
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1, controls: 1 },
                    },
                  }}
                />
              </S.TrailerContainer>

              {mediaProviders && (
                <S.ProvidersContainer height={videoHeight}>
                  <S.ProvidersList>
                    {mediaProviders?.flatrate?.map((provider) => (
                      <S.ProviderContainer>
                        <a
                          href={mediaProviders.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <S.Provider
                            key={provider.provider_id}
                            src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`}
                            alt={provider.provider_name}
                          />
                        </a>
                        <S.ProviderType type="flatrate">
                          {t("flatRate")}
                        </S.ProviderType>
                      </S.ProviderContainer>
                    ))}

                    {mediaProviders?.buy?.map((provider) => (
                      <S.ProviderContainer>
                        <a
                          href={mediaProviders.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <S.Provider
                            key={provider.provider_id}
                            src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`}
                            alt={provider.provider_name}
                          />
                        </a>
                        <S.ProviderType type="buy">{t("buy")}</S.ProviderType>
                      </S.ProviderContainer>
                    ))}
                  </S.ProvidersList>
                </S.ProvidersContainer>
              )}
            </S.TrailerAndProviders>
          </>
        )}
      </S.TrailerAndImagesContainer>
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
