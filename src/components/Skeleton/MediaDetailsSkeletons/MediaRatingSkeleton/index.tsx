import { Rating } from "@mui/material";
import * as S from "./styles";

export function MediaRatingSkeleton() {
  return (
    <S.MediaRatingSkeletonContainer>
      <Rating value={0} readOnly size="large" />
      <S.MediaRatingTextSkeleton />
    </S.MediaRatingSkeletonContainer>
  );
}
