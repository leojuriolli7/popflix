import * as S from "./styles";

export function RatingCircle({ vote_average }: any) {
  return (
    <S.RatingContainer>
      <S.RatingStarContainer>
        <S.RatingStar />
        <S.RatingStarSmaller />
        {vote_average !== 0 ? (
          <S.RatingNumberContainer>
            <S.RatingNumber>
              {(Number(vote_average) / 2).toFixed(1)}
            </S.RatingNumber>
          </S.RatingNumberContainer>
        ) : (
          <S.UnreleasedRatingTextContainer>
            <S.UnreleasedRatingText>N/A</S.UnreleasedRatingText>
          </S.UnreleasedRatingTextContainer>
        )}
      </S.RatingStarContainer>
    </S.RatingContainer>
  );
}
