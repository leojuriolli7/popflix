import { useEffect, useMemo, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import debounce from "lodash.debounce";
import defaultPoster from "../../assets/defaultposter.png";
import defaultPersonPicture from "../../assets/default2.png";
import tvIcon from "../../assets/tvicon.svg";
import movieIcon from "../../assets/movieicon.svg";
import defaultCompanyPoster from "../../assets/defaultcompanyposter.png";

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

interface MediaInterface {
  id: number;
  original_title?: string;
  overview: string;
  title?: string;
  vote_average: number;
  poster_path: string;
  profile_path: string;
  logo_path: string;
  name?: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
}

interface MediaDataInterface {
  total_pages: number;
}

export function FullSearch() {
  const [searchType, setSearchType] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaDetails, setMediaDetails] = useState<MediaInterface[]>();
  const [mediaData, setMediaData] = useState<MediaDataInterface>();
  const [page, setPage] = useState(1);
  const { theme } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();

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
          text={"Complete Search"}
          subtext={"Search through Movies, TV Shows, People and Companies"}
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
                label="Movies"
              />
              <FormControlLabel
                value="tv"
                control={<Radio />}
                label="TV Shows"
              />
              <FormControlLabel
                value="person"
                control={<Radio />}
                label="People"
              />
              <FormControlLabel
                value="company"
                control={<Radio />}
                label="Companies"
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
              placeholder="Search on Popflix"
              type="search"
              onChange={debouncedResults}
            />
          </S.SearchInputContainer>
        </S.SearchInputAndIconContainer>
        <S.Content>
          {(searchType === "tv" || searchType === "movie") &&
            mediaDetails?.map((media) => (
              <S.MediaPosterContainer key={media.id}>
                <S.MediaPoster
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
                  <>
                    <S.IconContainer>
                      <S.Icon
                        src={searchType === "movie" ? movieIcon : tvIcon}
                      />
                    </S.IconContainer>
                    <S.MediaNameContainer>
                      <S.MediaName>{media.name || media.title}</S.MediaName>
                    </S.MediaNameContainer>
                  </>
                )}
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
