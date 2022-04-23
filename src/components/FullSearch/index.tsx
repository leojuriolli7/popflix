import { useEffect, useMemo, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import debounce from "lodash.debounce";
import defaultPoster from "../../assets/defaultposter.png";
import defaultPersonPicture from "../../assets/default2.png";
import defaultCompanyPoster from "../../assets/defaultcompanyposter.png";
import { NoResults } from "../NoResults";

import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Pagination,
} from "@mui/material";
import { MainHeading } from "../Details/MainHeading";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { RatingCircle } from "../RatingCircle";
import { PlaceholderPoster } from "../PlaceholderPoster";
import { useTranslation } from "react-i18next";
import {
  MediaDataInterface,
  MediaDetailsInterface,
} from "../../utils/interfaces";

export function FullSearch() {
  const [searchType, setSearchType] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface[]>();
  const [mediaData, setMediaData] = useState<MediaDataInterface>();
  const [page, setPage] = useState(1);
  const { theme } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();

  const handleChangeRadio = (e: any) => {
    setSearchType(e.target.value);
    setMediaDetails(undefined);
    setSearchTerm("");
    (document.getElementById("search-input") as HTMLInputElement).value = "";
    navigate(`/search`);
    setPage(1);
  };

  const handleChangeSearch = (e: any) => {
    setSearchTerm(e.target.value);
    navigate(`?query=${e.target.value}`);

    if (
      (document.getElementById("search-input") as HTMLInputElement).value === ""
    ) {
      setMediaDetails(undefined);
      setMediaData(undefined);
      navigate(`/search`);
    }
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChangeSearch, 300);
  }, []);

  async function fetchSearch(value: any) {
    await api
      .get(
        `/search/${searchType}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&query=${searchTerm}&page=${value}&include_adult=false`
      )
      .then((response) => setMediaDetails(response.data.results));
  }

  async function fetchSearchData(value: any) {
    await api
      .get(
        `/search/${searchType}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&query=${searchTerm}&page=${value}&include_adult=false`
      )
      .then((response) => setMediaData(response.data));
  }

  useEffect(() => {
    if (searchTerm !== "") {
      fetchSearch(page);
      fetchSearchData(page);
    }
  }, [searchType, searchTerm]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  function handlePaginationChange(e: any, value: any) {
    setPage(value);
    navigate(`?page=${value}`);
    fetchSearch(value);
  }

  return (
    <>
      <S.Container>
        <MainHeading
          text={t("completeSearch")}
          subtext={t("completeSearchSubtext")}
        />
        <S.RadioInputContainer>
          <FormControl>
            <RadioGroup
              name="searchtype-radio-group"
              onChange={handleChangeRadio}
              row
              defaultValue="movie"
            >
              <FormControlLabel
                value="movie"
                control={<Radio />}
                label={t("movies")}
              />
              <FormControlLabel
                value="tv"
                control={<Radio />}
                label={t("tvShows")}
              />
              <FormControlLabel
                value="person"
                control={<Radio />}
                label={t("people")}
              />
              <FormControlLabel
                value="company"
                control={<Radio />}
                label={t("companies")}
              />
            </RadioGroup>
          </FormControl>
        </S.RadioInputContainer>
        <S.SearchInputAndIconContainer>
          <S.SearchInputContainer>
            {" "}
            <S.SearchIconContainer>
              {theme === "light" ? (
                <S.SearchIconBlack />
              ) : (
                <S.SearchIconWhite />
              )}
            </S.SearchIconContainer>
            <S.SearchInput
              id="search-input"
              placeholder={t("searchInputPlaceholder")}
              type="search"
              onChange={debouncedResults}
            />
          </S.SearchInputContainer>
        </S.SearchInputAndIconContainer>
        {mediaDetails?.length === 0 ? (
          <NoResults />
        ) : (
          <S.Content>
            {(searchType === "tv" || searchType === "movie") &&
              mediaDetails?.map((media) => (
                <S.MediaPosterContainer key={media.id}>
                  <S.MediaPoster
                    title={media.title || media.name}
                    onClick={() =>
                      navigate(
                        `/${searchType === "tv" ? "show" : "movie"}/${media.id}`
                      )
                    }
                    src={
                      media.poster_path !== null
                        ? `https://image.tmdb.org/t/p/w500/${media?.poster_path}`
                        : defaultPoster
                    }
                  />
                  {media.poster_path === null && (
                    <PlaceholderPoster name={media.name} title={media.title} />
                  )}
                  <RatingCircle vote_average={media!.vote_average} />
                </S.MediaPosterContainer>
              ))}

            {searchType === "company" &&
              mediaDetails?.map((media) => (
                <S.CompanyPosterContainer key={media.id}>
                  {" "}
                  <S.CompanyPoster
                    onClick={() => navigate(`/company/${media.id}`)}
                    src={
                      media.logo_path !== null
                        ? `https://image.tmdb.org/t/p/w500/${media?.logo_path}`
                        : defaultCompanyPoster
                    }
                  />
                  {media.logo_path === null && (
                    <S.CompanyNameContainer>
                      <S.CompanyName>{media.name}</S.CompanyName>
                    </S.CompanyNameContainer>
                  )}
                </S.CompanyPosterContainer>
              ))}

            {searchType === "person" &&
              mediaDetails?.map((media) => (
                <S.ActorPosterContainer key={media.id}>
                  {" "}
                  <S.MediaPoster
                    onClick={() => navigate(`/actor/${media.id}`)}
                    src={
                      media.profile_path !== null
                        ? `https://image.tmdb.org/t/p/w500/${media?.profile_path}`
                        : defaultPersonPicture
                    }
                  />
                  <S.ActorNameContainer>
                    <S.ActorName>{media.name}</S.ActorName>
                  </S.ActorNameContainer>
                </S.ActorPosterContainer>
              ))}
          </S.Content>
        )}
      </S.Container>

      {mediaDetails !== undefined && (
        <S.PaginationContainer>
          <Pagination
            count={mediaData?.total_pages}
            color="standard"
            page={page}
            size="large"
            onChange={handlePaginationChange}
          />
        </S.PaginationContainer>
      )}
    </>
  );
}
