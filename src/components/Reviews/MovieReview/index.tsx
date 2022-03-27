import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import * as S from "./styles";
import defaultProfileImage from "../../../assets/default.png";
import { Rating } from "@mui/material";

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

interface MovieDetailsInterface {
  genres: GenreInterface[];
  id: number;
  original_title: string;
  overview: string;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
}

export function MovieReview() {
  const { id } = useParams();
  const [reviews, setReviews] = useState<ReviewsInterface[]>();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsInterface>();

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(
        `movie/${id}/reviews?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US&page=1`
      )
      .then((response) => setReviews(response.data.results));

    api
      .get(
        `movie/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMovieDetails(response.data));
  }, [id]);

  return (
    <S.Container>
      <S.Content>
        <S.MovieInfoContainer>
          <S.TitleTextContainer>
            <S.TitleText onClick={() => navigate(`/movie/${id}`)}>
              <S.Span>{movieDetails?.title}</S.Span> Reviews
            </S.TitleText>
          </S.TitleTextContainer>
        </S.MovieInfoContainer>
        {reviews?.length === 0 ? (
          <S.NoReviewsContainer>
            <S.NoReviewsMessage>No Reviews Available</S.NoReviewsMessage>
          </S.NoReviewsContainer>
        ) : (
          reviews?.map((review) => (
            <S.ReviewContainer key={review.id}>
              <S.UserContainer>
                <S.UserImage
                  src={
                    review.author_details.avatar_path === null
                      ? defaultProfileImage
                      : String(review.author_details.avatar_path).substring(1)
                  }
                  alt="User"
                />
                <S.Username>{review.author}</S.Username>
              </S.UserContainer>
              <S.RatingContainer>
                {review.author_details.rating === null ? (
                  <S.NoRatingMessage>No Rating given</S.NoRatingMessage>
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
                    } Stars`}</S.RatingText>
                  </>
                )}
              </S.RatingContainer>
              <S.ReviewDatesContainer>
                <S.ReviewDates>{`Published at ${review.created_at.slice(
                  0,
                  10
                )}`}</S.ReviewDates>
                {review.created_at.slice(0, 10) !==
                review.updated_at.slice(0, 10) ? (
                  <S.ReviewDates>{`Updated at ${review.updated_at.slice(
                    0,
                    10
                  )}`}</S.ReviewDates>
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
