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
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface>();
  const [mediaCredits, setMediaCredits] = useState<MediaCreditsInterface>();
  const navigate = useNavigate();

  // const { mutate } = useMutation(getMediaDetails(mediaType, id), {
  //   onSuccess: (data) => {
  //     setMediaDetails(data);
  //   },
  //   onError: () => {},
  // });

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(
        `${mediaType}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMediaDetails(response.data));
    api
      .get(
        `${mediaType}/${id}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMediaCredits(response.data));
  }, [id, mediaType]);

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
        <S.Poster
          src={
            mediaDetails?.poster_path === null
              ? defaultPoster
              : `https://image.tmdb.org/t/p/w500/${mediaDetails?.poster_path}`
          }
        />
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
              Stars`}
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
                      mediaDetails.number_of_seasons > 1 ? "Seasons" : "Season"
                    }`
                  : "Unknown/No Seasons"
                : mediaDetails?.runtime
                ? `${mediaDetails?.runtime}min`
                : "Unknown Runtime"}
            </S.MediaRuntime>
          </S.ReleaseAndRuntimeContainer>
          <S.MediaProductionCompaniesContainer>
            {mediaDetails?.production_companies ? (
              mediaDetails?.production_companies.map((company) => (
                <S.MediaProductionCompany
                  key={company.id}
                  onClick={() => navigate(`/company/${company.id}`)}
                >
                  {company?.name}
                </S.MediaProductionCompany>
              ))
            ) : (
              <S.MediaProductionCompany>Unknown</S.MediaProductionCompany>
            )}
          </S.MediaProductionCompaniesContainer>
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
          <S.MediaOverview>
            {mediaDetails?.overview ? mediaDetails?.overview : "No Overview"}
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
              items={mediaCredits?.cast
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
                        ? `${cast.name} as ${cast.character}`
                        : `${cast.name}`}
                    </S.CastMemberName>
                  </S.CastMemberContainer>
                ))}
            />
          </S.CastContainer>
          {(diff > 0 || isNaN(diff) === true) && (
            <S.UnreleasedText>
              {mediaDetails?.first_air_date || mediaDetails?.release_date
                ? `Releases in ${diff} days`
                : "Release Date to be Announced"}
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
              View Full Credits
            </S.FullCreditsLink>
          </S.FullCreditsLinkContainer>
        </S.InfoContainer>
      </S.Content>
      {mediaDetails?.seasons && (
        <S.SeasonContainerWrap>
          <S.SeasonSectionTitle>Seasons Overview</S.SeasonSectionTitle>
          <S.SeasonListContainer>
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
                    Air Date:{" "}
                    {season.air_date === null
                      ? "Unknown"
                      : `${seasonDate(season.air_date).getDate()}/${
                          seasonDate(season.air_date).getMonth() + 1
                        }/${seasonDate(season.air_date).getFullYear()}`}
                  </S.SeasonAirDate>
                  <S.SeasonEpisodeCount>
                    {season.episode_count} Episodes
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
      text={`Error: No ${mediaType === "tv" ? "Show" : "Movie"} with this id`}
    />
  );
}
