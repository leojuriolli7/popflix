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

interface MediaDetailsProps {
  mediaType: "tv" | "movie";
}

export function MediaGrid({ mediaType }: MediaDetailsProps) {
  const [mediaDetails, setMediaDetails] = useState<MediaInterface[]>();
  const [selectedValue, setSelectedValue] = useState("popular");
  const navigate = useNavigate();

  const handleChange = () => {};

  useEffect(() => {
    api
      .get(
        `${mediaType}/${selectedValue}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1`
      )
      .then((response) => setMediaDetails(response.data.results));
  }, [mediaType, selectedValue]);

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
        <FormControl>
          <RadioGroup
            name="radio-buttons-group"
            onChange={handleChange}
            row
            defaultValue={"popular"}
          >
            <FormControlLabel
              value="popular"
              control={<Radio onChange={() => setSelectedValue("popular")} />}
              label="Popular"
            />
            <FormControlLabel
              value="top_rated"
              control={<Radio onChange={() => setSelectedValue("top_rated")} />}
              label="Top Rated"
            />
            <FormControlLabel
              value="upcoming"
              control={
                <Radio
                  onChange={() =>
                    setSelectedValue(
                      mediaType === "movie" ? "upcoming" : "airing_today"
                    )
                  }
                />
              }
              label={mediaType === "movie" ? "Upcoming" : "Airing today"}
            />
            <FormControlLabel
              value="now_playing"
              control={
                <Radio
                  onChange={() =>
                    setSelectedValue(
                      mediaType === "movie" ? "now_playing" : "on_the_air"
                    )
                  }
                />
              }
              label={mediaType === "movie" ? "Now Playing" : "On the air"}
            />
          </RadioGroup>
        </FormControl>
      </S.InputsContainer>
      <S.Content>
        {mediaDetails?.map((media) => (
          <S.MediaPosterContainer
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
                    <S.UnreleasedRatingText>TBA</S.UnreleasedRatingText>
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
