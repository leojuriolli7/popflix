import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import * as S from "./styles";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { MediaPosterSkeleton } from "../../Skeleton/MediaPosterSkeleton";
import defaultPoster from "../../../assets/defaultposter.png";
import tvIcon from "../../../assets/tvicon.svg";
import movieIcon from "../../../assets/movieicon.svg";
import { useNavigate } from "react-router-dom";

interface MediaListProps {
  apiEndpoint: any;
  title: string;
}

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

export function MediaList({ apiEndpoint, title }: MediaListProps) {
  const [media, setMedia] = useState<MediaInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`${apiEndpoint}`).then((response) => {
      setMedia(response.data.results);
      setIsLoading(false);
    });
  }, [apiEndpoint]);

  return (
    <S.Container>
      <S.Content>
        <S.SectionTitle>{title}</S.SectionTitle>
        <AliceCarousel
          infinite
          animationDuration={200}
          disableDotsControls
          responsive={{
            0: {
              items: 2,
            },
            580: {
              items: 3,
            },
            860: {
              items: 4,
            },
            1200: {
              items: 5,
            },
          }}
          paddingRight={10}
          items={
            isLoading
              ? [1, 2, 3, 4, 5].map(() => <MediaPosterSkeleton />)
              : media.map((item) => (
                  <S.MediaPosterContainer>
                    <S.MediaPoster
                      key={item.id}
                      src={
                        item.poster_path === null
                          ? defaultPoster
                          : `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      }
                      alt={`${item.title} Poster`}
                      onClick={() =>
                        navigate(`/${item.title ? "movie" : "show"}/${item.id}`)
                      }
                    />
                    {item.poster_path === null && (
                      <>
                        <S.IconContainer>
                          <S.Icon src={item.name ? tvIcon : movieIcon} />
                        </S.IconContainer>
                        <S.MediaNameContainer>
                          <S.MediaName>
                            {item?.name || item?.original_title}
                          </S.MediaName>
                        </S.MediaNameContainer>
                      </>
                    )}
                  </S.MediaPosterContainer>
                ))
          }
        />
      </S.Content>
    </S.Container>
  );
}
