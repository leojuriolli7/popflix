import { useEffect, useMemo, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import debounce from "lodash.debounce";

import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { MainHeading } from "../Details/MainHeading";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface MediaInterface {
  id: number;
  original_title?: string;
  overview: string;
  title?: string;
  vote_average: number;
  poster_path: string;
  name?: string;
}

export function FullSearch() {
  const [searchType, setSearchType] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaDetails, setMediaDetails] = useState<MediaInterface[]>();
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleChangeRadio = (e: any) => {
    setSearchType(e.target.value);
  };

  const handleChangeSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChangeSearch, 300);
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      api
        .get(
          `/search/${searchType}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&query=${searchTerm}&page=1&include_adult=false`
        )
        .then((response) => setMediaDetails(response.data.results));
    }
  }, [searchType, searchTerm]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
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
            <FormControlLabel value="tv" control={<Radio />} label="TV Shows" />
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
            {theme === "light" ? <S.SearchIconBlack /> : <S.SearchIconWhite />}
          </S.SearchIconContainer>
          <S.SearchInput
            placeholder="Search on Popflix"
            type="search"
            onChange={debouncedResults}
          />
        </S.SearchInputContainer>
      </S.SearchInputAndIconContainer>
      <S.Content>
        {mediaDetails?.map((media) => (
          <S.MediaPosterContainer>
            <S.MediaPoster
              src={`https://image.tmdb.org/t/p/w500/${media?.poster_path}`}
            />
          </S.MediaPosterContainer>
        ))}
      </S.Content>
    </S.Container>
  );
}
