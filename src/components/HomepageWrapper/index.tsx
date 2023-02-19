import { MediaList } from "../MediaList";
import * as S from "./styles";
import "animate.css";
import { useTranslation } from "react-i18next";

export function HomepageWrapper() {
  const { t }: { t: any } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <S.PageWrapper>
      <MediaList
        title={t("popularMoviesTitle")}
        apiEndpoint={`movie/popular?api_key=${apiKey}&language=en-US&page=1`}
      />
      <MediaList
        title={t("highestRatedMoviesTitle")}
        apiEndpoint={`movie/top_rated?api_key=${apiKey}&language=en-US&page=1`}
      />
      <MediaList
        title={t("upcomingMoviesTitle")}
        apiEndpoint={`movie/upcoming?api_key=${apiKey}&language=en-US&page=1`}
      />
      <MediaList
        title={t("currentPopularShowsTitle")}
        apiEndpoint={`tv/popular?api_key=${apiKey}&language=en-US&page=1`}
      />
      <MediaList
        title={t("highestRatedShowsTitle")}
        apiEndpoint={`tv/top_rated?api_key=${apiKey}&language=en-US&page=1`}
      />
    </S.PageWrapper>
  );
}
