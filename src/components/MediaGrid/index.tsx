import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import defaultPoster from "../../assets/defaultposter.png";
import * as S from "./styles";
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Pagination,
} from "@mui/material";
import { MainHeading } from "../Details/MainHeading";
import { RatingCircle } from "../RatingCircle";
import { PlaceholderPoster } from "../PlaceholderPoster";
import { useTranslation } from "react-i18next";
import { NoResults } from "../NoResults";
import i18n from "../../i18n";
import { LanguageSwitch } from "../../utils/constants";
import { MediaPosterSkeleton } from "../Skeleton/MediaGridSkeleton/MediaPosterSkeleton";
import {
  GenreInterface,
  MediaDataInterface,
  MediaDetailsInterface,
} from "../../utils/interfaces";

interface MediaDetailsProps {
  mediaType: "tv" | "movie";
}

export function MediaGrid({ mediaType }: MediaDetailsProps) {
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface[]>();
  const [mediaDetailsData, setMediaDetailsData] =
    useState<MediaDataInterface>();
  const [selectedValue, setSelectedValue] = useState("popular");
  const [selectedSortBy, setSelectedSortby] = useState("popularity.desc");
  const [genres, setGenres] = useState<GenreInterface[]>();
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedType, setSelectedType] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleChange = (e: any) => {
    setLoading(true);
    setSelectedGenre(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  };

  const handleTypeChange = (e: any) => {
    setLoading(true);
    setSelectedType(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  };

  const handleChangeRadio = (e: any) => {
    setLoading(true);
    setSelectedValue(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  };

  const handleChangeDiscover = (e: any) => {
    setLoading(true);
    setSelectedSortby(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  };

  async function fetchMediaWithoutGenres(value: number) {
    await api
      .get(
        `${mediaType}/${selectedValue}?api_key=${apiKey}&language=en-US&page=${value}`
      )
      .then((response) => setMediaDetails(response.data.results));

    await api
      .get(
        `${mediaType}/${selectedValue}?api_key=${apiKey}&language=en-US&page=${value}`
      )
      .then((response) => setMediaDetailsData(response.data));
    setLoading(false);
  }

  async function fetchMediaWithGenres(value: number) {
    await api
      .get(
        `discover/${mediaType}?api_key=${apiKey}&language=en-US&sort_by=${selectedSortBy}&include_adult=false&include_video=false&page=${value}&with_genres=${selectedGenre}${
          selectedType !== String && `&with_type=${selectedType}`
        }`
      )
      .then((response) => setMediaDetails(response.data.results));

    await api
      .get(
        `discover/${mediaType}?api_key=${apiKey}&language=en-US&sort_by=${selectedSortBy}&include_adult=false&include_video=false&page=${value}&with_genres=${selectedGenre}${
          selectedType !== String && `&with_type=${selectedType}`
        }`
      )
      .then((response) => setMediaDetailsData(response.data));

    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    if (isNaN(Number(selectedGenre)) === true) {
      fetchMediaWithoutGenres(page);
      navigate(`?page=${page}`);
    } else {
      fetchMediaWithGenres(page);
      navigate(`?page=${page}`);
    }

    api
      .get(
        `genre/${mediaType}/list?api_key=${apiKey}&language=${LanguageSwitch()}`
      )
      .then((response) => setGenres(response.data.genres));
  }, [
    mediaType,
    selectedValue,
    selectedGenre,
    selectedSortBy,
    selectedType,
    i18n.language,
  ]);

  function handlePaginationChange(e: any, value: any) {
    setLoading(true);
    setPage(value);
    if (isNaN(Number(selectedGenre)) === true) {
      navigate(`?page=${value}`);
      fetchMediaWithoutGenres(value);
    } else {
      navigate(`?page=${value}`);
      fetchMediaWithGenres(value);
    }
  }

  return (
    <S.Container>
      <MainHeading
        text={
          mediaType === "movie"
            ? t("completeMoviesList")
            : t("completeShowsList")
        }
        subtext={
          mediaType === "movie"
            ? t("completeMoviesListSubtext")
            : t("completeShowsListSubtext")
        }
      />

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
                label={t("inputRadioPopularLabel")}
              />
              <FormControlLabel
                value="top_rated"
                control={<Radio />}
                label={t("inputRadioTopRatedLabel")}
              />
              <FormControlLabel
                value={mediaType === "movie" ? "upcoming" : "airing_today"}
                control={<Radio />}
                label={
                  mediaType === "movie"
                    ? t("inputRadioUpcomingLabel")
                    : t("inputRadioAiringTodayLabel")
                }
              />
              <FormControlLabel
                value={mediaType === "movie" ? "now_playing" : "on_the_air"}
                control={<Radio />}
                label={
                  mediaType === "movie"
                    ? t("inputRadioNowPlayingLabel")
                    : t("inputRadioOnTheAirLabel")
                }
              />
            </RadioGroup>
          </FormControl>
        ) : (
          <>
            <FormControl>
              <RadioGroup
                name="radio-buttons-discover"
                onChange={handleChangeDiscover}
                row
                defaultValue={selectedSortBy}
              >
                <FormControlLabel
                  value="popularity.desc"
                  control={<Radio />}
                  label={t("inputRadioPopularLabel")}
                />
                <FormControlLabel
                  value="vote_average.desc"
                  control={<Radio />}
                  label={t("inputRadioTopRatedLabel")}
                />
              </RadioGroup>
            </FormControl>

            {mediaType === "tv" && (
              <S.Select onChange={handleTypeChange}>
                <S.SelectOption>{t("filterByType")}</S.SelectOption>
                <S.SelectOption>{t("all")}</S.SelectOption>
                <S.SelectOption value={0}>{t("type0")}</S.SelectOption>
                <S.SelectOption value={1}>{t("type1")}</S.SelectOption>
                <S.SelectOption value={2}>{t("type2")}</S.SelectOption>
                <S.SelectOption value={3}>{t("type3")}</S.SelectOption>
                <S.SelectOption value={4}>{t("type4")}</S.SelectOption>
                <S.SelectOption value={5}>{t("type5")}</S.SelectOption>
                <S.SelectOption value={6}>{t("type6")}</S.SelectOption>
              </S.Select>
            )}
          </>
        )}

        <S.Select onChange={handleChange}>
          <S.SelectOption>{t("filterByGenre")}</S.SelectOption>
          <S.SelectOption>{t("all")}</S.SelectOption>
          {genres?.map((genre) => (
            <S.SelectOption value={genre.id} key={genre.id}>
              {genre.name}
            </S.SelectOption>
          ))}
        </S.Select>
      </S.InputsContainer>

      <S.Content>
        {loading
          ? [0, 1, 2, 3, 4, 5, 6, 7].map(() => <MediaPosterSkeleton />)
          : mediaDetails?.map((media) => (
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
                  <PlaceholderPoster name={media.name} title={media.title} />
                )}
                <RatingCircle vote_average={media!.vote_average} />
              </S.MediaPosterContainer>
            ))}
      </S.Content>
      {mediaDetails?.length === 0 && <NoResults />}
      {mediaDetails?.length !== 0 && (
        <S.PaginationContainer>
          <Pagination
            count={mediaDetailsData?.total_pages}
            color="standard"
            page={page}
            size="large"
            onChange={handlePaginationChange}
          />
        </S.PaginationContainer>
      )}
    </S.Container>
  );
}
