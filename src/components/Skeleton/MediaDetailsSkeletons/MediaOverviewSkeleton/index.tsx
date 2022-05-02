import * as S from "./styles";

export function MediaOverviewSkeleton() {
  return (
    <S.MediaOverviewSkeletonContainer>
      <S.MediaOverviewTextSkeleton />
      <S.MediaOverviewTextSkeleton />
      <S.MediaOverviewTextSkeleton />
    </S.MediaOverviewSkeletonContainer>
  );
}
