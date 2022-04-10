import { MediaList } from "../MediaList";
import * as S from "./styles";
import "animate.css";
import { useTranslation } from "react-i18next";

export function HomepageWrapper() {
  const { t }: { t: any } = useTranslation();

  return (
    <S.PageWrapper>
      <MediaList
        title={t("popularMoviesTitle")}
        apiEndpoint={
          "movie/popular?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title={t("highestRatedMoviesTitle")}
        apiEndpoint={
          "movie/top_rated?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title={t("upcomingMoviesTitle")}
        apiEndpoint={
          "movie/upcoming?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title={t("currentPopularShowsTitle")}
        apiEndpoint={
          "tv/popular?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title={t("highestRatedShowsTitle")}
        apiEndpoint={
          "tv/top_rated?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
    </S.PageWrapper>
  );
}
