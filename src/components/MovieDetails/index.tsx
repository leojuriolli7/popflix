import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import * as S from "./styles";
import defaultPicture from "../../assets/default2.png";
import { Rating } from "@mui/material";
import AliceCarousel from "react-alice-carousel";

interface GenreInterface {
  name: string;
  id: number;
}

interface SpokenLanguagesInterface {
  english_name: string;
}

interface MovieDetailsInterface {
  genres: GenreInterface[];
  id: number;
  original_title: string;
  overview: string;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  spoken_languages: SpokenLanguagesInterface;
}

interface CastInterface {
  name: string;
  character: string;
  profile_path: string;
  id: number;
}

interface MovieCreditsInterface {
  cast: CastInterface[];
}

export function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsInterface>();
  const [movieCredits, setMovieCredits] = useState<MovieCreditsInterface>();

  useEffect(() => {
    api
      .get(
        `movie/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMovieDetails(response.data));
    api
      .get(
        `movie/${id}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMovieCredits(response.data));
  }, [id]);

  return (
    <S.Container>
      <S.Content>
        <S.Poster
          src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
        />
        <S.InfoContainer>
          <S.MovieTitle>{movieDetails?.title}</S.MovieTitle>
          <S.MovieGenresContainer>
            {movieDetails?.genres.map((genre: GenreInterface) => (
              <S.MovieGenres>{genre.name} </S.MovieGenres>
            ))}
          </S.MovieGenresContainer>
          <S.ReleaseAndRuntimeContainer>
            <S.MovieReleaseDate>
              {`${movieDetails?.release_date}`}
            </S.MovieReleaseDate>
            <S.MovieRuntime>{`${movieDetails?.runtime}min`}</S.MovieRuntime>
          </S.ReleaseAndRuntimeContainer>
          <S.MovieOverview>{movieDetails?.overview}</S.MovieOverview>
          <S.CastContainer>
            <AliceCarousel
              animationDuration={200}
              disableButtonsControls
              responsive={{
                0: {
                  items: 2,
                },
                510: {
                  items: 3,
                },
                985: {
                  items: 4,
                },
              }}
              items={movieCredits?.cast
                .slice(0, 10)
                .map((cast: CastInterface) => (
                  <S.CastMemberContainer>
                    <S.CastMemberPicture
                      src={
                        cast.profile_path === null
                          ? defaultPicture
                          : `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                      }
                    />
                    <S.CastMemberName>
                      {cast.name} as {cast.character}
                    </S.CastMemberName>
                  </S.CastMemberContainer>
                ))}
            />
          </S.CastContainer>
          <S.RatingContainer>
            <Rating
              value={
                movieDetails?.vote_average
                  ? Number(movieDetails.vote_average / 2)
                  : 5
              }
              precision={0.5}
              readOnly
              size="large"
            />
            <S.RatingText>
              {`${
                movieDetails?.vote_average
                  ? Number(movieDetails.vote_average / 2)
                  : 5
              }
              Stars`}
            </S.RatingText>
          </S.RatingContainer>
          <S.ReviewLink>Check out the Reviews</S.ReviewLink>
        </S.InfoContainer>
      </S.Content>
    </S.Container>
  );
}
