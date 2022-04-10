import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import * as S from "./styles";
import defaultProfileImage from "../../assets/default.png";
import { Rating } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

interface AuthorDetailsInterface {
  name: string;
  username: string;
  avatar_path: string;
  rating: number | null;
}

interface ReviewsInterface {
  author: string;
  author_details: AuthorDetailsInterface;
  content: string;
  created_at: string;
  updated_at: string;
  id: string;
}

interface GenreInterface {
  name: string;
  id: number;
}

interface MediaDetailsInterface {
  genres: GenreInterface[];
  id: number;
  original_title?: string;
  overview: string;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
}

interface ReviewProps {
  mediaType: "tv" | "movie";
}

export function Review({ mediaType }: ReviewProps) {
  const { id } = useParams();
  const [reviews, setReviews] = useState<ReviewsInterface[]>();
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface>();
  const { t }: { t: any } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(
        `${mediaType}/${id}/reviews?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1`
      )
      .then((response) => setReviews(response.data.results));

    api
      .get(
        `${mediaType}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMediaDetails(response.data));
  }, [id, mediaType]);

  const reviewDate = (date: any) => new Date(date);

  return (
    <S.Container>
      <S.Content>
        <S.MediaInfoContainer>
          {reviews?.length !== 0 && (
            <S.ArrowBackContainer
              onClick={() =>
                navigate(`/${mediaType === "tv" ? "show" : "movie"}/${id}`)
              }
              title={t("goBack")}
            >
              <S.WhiteArrowBack />
            </S.ArrowBackContainer>
          )}
          <S.TitleTextContainer>
            <S.TitleText>
              {i18n.language === "pt"
                ? `Reviews de ${mediaDetails?.name || mediaDetails?.title}`
                : `${mediaDetails?.name || mediaDetails?.title} Reviews`}
            </S.TitleText>
          </S.TitleTextContainer>
        </S.MediaInfoContainer>
        {reviews?.length === 0 ? (
          <S.NoReviewsContainer>
            <S.NoReviewsArrowContainer
              onClick={() =>
                navigate(`/${mediaType === "tv" ? "show" : "movie"}/${id}`)
              }
              title={t("goBack")}
            >
              <S.WhiteArrowBack />
            </S.NoReviewsArrowContainer>
            <S.NoReviewsMessageContainer>
              <S.NoReviewsMessage>{t("noReviewsError")}</S.NoReviewsMessage>
            </S.NoReviewsMessageContainer>
          </S.NoReviewsContainer>
        ) : (
          reviews?.map((review) => (
            <S.ReviewContainer key={review.id}>
              <S.UserContainer>
                <S.UserImage
                  src={
                    String(review.author_details.avatar_path)
                      .substring(1)
                      .startsWith("http")
                      ? String(review.author_details.avatar_path).substring(1)
                      : defaultProfileImage
                  }
                  alt={t("altUser")}
                />
                <S.Username>{review.author}</S.Username>
              </S.UserContainer>
              <S.RatingContainer>
                {review.author_details.rating === null ? (
                  <S.NoRatingMessage>{t("noRatingMessage")}</S.NoRatingMessage>
                ) : (
                  <>
                    <Rating
                      value={
                        review.author_details.rating
                          ? Number(review.author_details.rating / 2)
                          : 0
                      }
                      precision={0.5}
                      readOnly
                      size="large"
                    />
                    <S.RatingText>{`${
                      review.author_details.rating
                        ? Number(review.author_details.rating / 2)
                        : 0
                    } ${t("stars")}`}</S.RatingText>
                  </>
                )}
              </S.RatingContainer>
              <S.ReviewDatesContainer>
                <S.ReviewDates>{`${t("publishedAt")} ${reviewDate(
                  review.created_at
                ).getDate()}/${
                  reviewDate(review.created_at).getMonth() + 1
                }/${reviewDate(
                  review.created_at
                ).getFullYear()}`}</S.ReviewDates>
                {review.created_at.slice(0, 10) !==
                review.updated_at.slice(0, 10) ? (
                  <S.ReviewDates>{`${t("updatedAt")} ${reviewDate(
                    review.updated_at
                  ).getDate()}/${
                    reviewDate(review.updated_at).getMonth() + 1
                  }/${reviewDate(
                    review.updated_at
                  ).getFullYear()}`}</S.ReviewDates>
                ) : null}
              </S.ReviewDatesContainer>
              <S.ReviewTextContainer>
                <S.ReviewText>"{review.content}"</S.ReviewText>
              </S.ReviewTextContainer>
            </S.ReviewContainer>
          ))
        )}
      </S.Content>
    </S.Container>
  );
}
