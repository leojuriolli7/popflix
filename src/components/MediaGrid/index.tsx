import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import defaultPoster from "../../assets/defaultposter.png";
import tvIcon from "../../assets/tvicon.svg";
import movieIcon from "../../assets/movieicon.svg";
import * as S from "./styles";
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";

interface MediaInterface {
  genre_ids: [];
  id: number;
  original_title?: string;
  overview: string;
  title?: string;
  vote_average: number;
  poster_path: string;
  name?: string;
}

interface GenreInterface {
  id: number;
  name: string;
}

interface MediaDetailsProps {
  mediaType: "tv" | "movie";
}

export function MediaGrid({ mediaType }: MediaDetailsProps) {
  const [mediaDetails, setMediaDetails] = useState<MediaInterface[]>();
  const [selectedValue, setSelectedValue] = useState("popular");
  const [genres, setGenres] = useState<GenreInterface[]>();
  const [selectedGenre, setSelectedGenre] = useState();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setSelectedGenre(e.target.value);
    console.log(selectedGenre);
  };
  const handleChangeRadio = (e: any) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    if (isNaN(Number(selectedGenre)) === true) {
      api
        .get(
          `${mediaType}/${selectedValue}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1`
        )
        .then((response) => setMediaDetails(response.data.results));
    } else {
      api
        .get(
          `discover/${mediaType}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selectedGenre}`
        )
        .then((response) => setMediaDetails(response.data.results));
    }

    api
      .get(
        `genre/${mediaType}/list?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setGenres(response.data.genres));
  }, [mediaType, selectedValue, selectedGenre]);

  return (
    <S.Container>
      <S.MainHeadingContainer>
        <S.MainHeading>{`Complete ${
          mediaType === "movie" ? "Movie" : "TV Show"
        } List`}</S.MainHeading>
        <S.MainHeadingSubText>{`Search and filter through more than a million ${
          mediaType === "movie" ? "Movies" : "Shows"
        }. Find your favorite!`}</S.MainHeadingSubText>
      </S.MainHeadingContainer>

      <S.InputsContainer>
        {isNaN(Number(selectedGenre)) === true ? (
          <FormControl>
            <RadioGroup
              name="radio-buttons-group"
              onChange={handleChangeRadio}
              row
              defaultValue={selectedValue}
            >
              <FormControlLabel
                value="popular"
                control={<Radio />}
                label="Popular"
              />
              <FormControlLabel
                value="top_rated"
                control={<Radio />}
                label="Top Rated"
              />
              <FormControlLabel
                value={mediaType === "movie" ? "upcoming" : "airing_today"}
                control={<Radio />}
                label={mediaType === "movie" ? "Upcoming" : "Airing today"}
              />
              <FormControlLabel
                value={mediaType === "movie" ? "now_playing" : "on_the_air"}
                control={<Radio />}
                label={mediaType === "movie" ? "Now Playing" : "On the air"}
              />
            </RadioGroup>
          </FormControl>
        ) : (
          <S.SortText>Sorting by Genre</S.SortText>
        )}

        <S.Select onChange={handleChange}>
          <S.SelectOption>Filter by Genre</S.SelectOption>
          <S.SelectOption>All</S.SelectOption>
          {genres?.map((genre) => (
            <S.SelectOption value={genre.id} key={genre.id}>
              {genre.name}
            </S.SelectOption>
          ))}
        </S.Select>
      </S.InputsContainer>

      <S.Content>
        {mediaDetails?.map((media) => (
          <S.MediaPosterContainer
            title={media.name || media.title}
            key={media.id}
            onClick={() =>
              navigate(
                `/${mediaType === "movie" ? "movie" : "show"}/${media.id}`
              )
            }
          >
            <S.MediaPoster
              src={
                media.poster_path === null
                  ? defaultPoster
                  : `https://image.tmdb.org/t/p/w500/${media.poster_path}`
              }
            />
            {media.poster_path === null && (
              <>
                <S.IconContainer>
                  <S.Icon src={media.name ? tvIcon : movieIcon} />
                </S.IconContainer>
                <S.MediaNameContainer>
                  <S.MediaName>{media.name || media.title}</S.MediaName>
                </S.MediaNameContainer>
              </>
            )}
            <S.RatingContainer>
              <S.RatingStarContainer>
                <S.RatingStar />
                {media?.vote_average !== 0 ? (
                  <S.RatingNumberContainer>
                    <S.RatingNumber>
                      {(Number(media?.vote_average) / 2).toFixed(1)}
                    </S.RatingNumber>
                  </S.RatingNumberContainer>
                ) : (
                  <S.UnreleasedRatingTextContainer>
                    <S.UnreleasedRatingText>N/A</S.UnreleasedRatingText>
                  </S.UnreleasedRatingTextContainer>
                )}
              </S.RatingStarContainer>
            </S.RatingContainer>
          </S.MediaPosterContainer>
        ))}
      </S.Content>
    </S.Container>
  );
}
