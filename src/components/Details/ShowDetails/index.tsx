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

interface SeasonsInterface {
  air_date: string;
  name: string;
  episode_count: string;
  id: string;
  poster_path: string;
}

interface ShowDetailsInterface {
  genres: GenreInterface[];
  id: number;
  original_name: string;
  overview: string;
  name: string;
  vote_average: number;
  poster_path: string;
  first_air_date: string;
  episode_run_time: [];
  number_of_episodes: number;
  number_of_seasons: number;
  status: string;
  spoken_languages: SpokenLanguagesInterface;
  networks: NetworkInterface[];
  seasons: SeasonsInterface[];
}

interface CastInterface {
  name: string;
  character: string;
  profile_path: string;
  id: number;
}

interface ShowCreditsInterface {
  cast: CastInterface[];
}

export function ShowDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState<ShowDetailsInterface>();
  const [showCredits, setShowCredits] = useState<ShowCreditsInterface>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`tv/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`)
      .then((response) => setShowDetails(response.data));
    api
      .get(
        `tv/${id}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setShowCredits(response.data));
  }, [id]);

  const date = new Date(
    showDetails?.first_air_date ? showDetails?.first_air_date : "1969-09-12"
  );

  const currentDate = new Date();

  const diff = Math.floor(
    (Number(date) - Number(currentDate)) / (1000 * 60 * 60 * 24)
  );

  const seasonDate = (date: any) => new Date(date);

  return showDetails?.id ? (
    <S.Container>
      <S.Content>
        <S.Poster
          src={
            showDetails?.poster_path === null
              ? defaultPoster
              : `https://image.tmdb.org/t/p/w500/${showDetails?.poster_path}`
          }
        />
        <S.InfoContainer>
          <S.ShowTitle>{showDetails?.name}</S.ShowTitle>
          <S.ShowGenresContainer>
            {showDetails?.genres.map((genre: GenreInterface) => (
              <S.ShowGenres key={genre.id}>{genre.name} </S.ShowGenres>
            ))}
          </S.ShowGenresContainer>
          {showDetails?.status !== "Unreleased" && (
            <S.ReleasedContainer>
              <S.RatingContainer
                onClick={() => navigate(`/show/${id}/reviews`)}
              >
                <Rating
                  value={
                    showDetails?.vote_average
                      ? Number(showDetails.vote_average / 2)
                      : 0
                  }
                  precision={0.5}
                  readOnly
                  size="large"
                />
                <S.RatingText>
                  {`${
                    showDetails?.vote_average
                      ? Number(showDetails.vote_average / 2)
                      : 0
                  }
              Stars`}
                </S.RatingText>
              </S.RatingContainer>
            </S.ReleasedContainer>
          )}
          <S.ReleaseAndRuntimeContainer>
            <S.ShowReleaseDate>
              {showDetails?.first_air_date
                ? `${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()}`
                : "Unknown Release Date"}
            </S.ShowReleaseDate>
            <S.ShowRuntime>
              {showDetails?.number_of_seasons
                ? `${showDetails?.number_of_seasons} ${
                    showDetails.number_of_seasons > 1 ? "Seasons" : "Season"
                  }`
                : "Unknown/No Seasons"}
            </S.ShowRuntime>
            <S.ShowProductionCompany>
              {showDetails?.networks[0].name}
            </S.ShowProductionCompany>
          </S.ReleaseAndRuntimeContainer>
          <S.ShowOverview>
            {showDetails?.overview ? showDetails?.overview : "No Overview"}
          </S.ShowOverview>
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
              items={showCredits?.cast
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
          {showDetails?.status === "Unreleased" && (
            <S.UnreleasedText>
              {showDetails?.first_air_date
                ? `Releases in ${diff} days`
                : "Release Date to be Announced"}
            </S.UnreleasedText>
          )}
        </S.InfoContainer>
      </S.Content>
      <S.SeasonsContent>
        <S.SeasonOverview>Seasons Overview</S.SeasonOverview>
        <S.SeasonsContainer>
          {showDetails?.seasons.map((season) => (
            <S.SeasonContainer key={season.id}>
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
                    <S.IconContainer>
                      <S.Icon src={tvIcon} />
                    </S.IconContainer>
                  </>
                )}
              </S.SeasonImageContainer>
              <S.SeasonTitle>{season.name}</S.SeasonTitle>
              <S.SeasonDetailsContainer>
                <S.SeasonAirDate>
                  Air Date:{" "}
                  {season.air_date === null
                    ? "?"
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
        </S.SeasonsContainer>
      </S.SeasonsContent>
    </S.Container>
  ) : (
    <DetailsError text="Error: No Show with this id" />
  );
}
