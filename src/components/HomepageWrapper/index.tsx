import { MediaList } from "../Lists/MediaList";
import * as S from "./styles";
import "animate.css";

export function HomepageWrapper() {
  return (
    <S.PageWrapper>
      <MediaList
        title="Current Popular Movies"
        apiEndpoint={
          "movie/popular?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title="Highest Rated Movies"
        apiEndpoint={
          "movie/top_rated?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title="Upcoming Movies"
        apiEndpoint={
          "movie/upcoming?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title="Current Popular TV Shows"
        apiEndpoint={
          "tv/popular?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
      <MediaList
        title="Highest Rated TV Shows"
        apiEndpoint={
          "tv/top_rated?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1"
        }
      />
    </S.PageWrapper>
  );
}
