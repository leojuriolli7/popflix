import * as S from "./styles";

export function DetailsReturnArrow() {
  return (
    <S.ArrowBackContainer onClick={() => window.history.back()}>
      <S.WhiteArrowBack />
    </S.ArrowBackContainer>
  );
}
