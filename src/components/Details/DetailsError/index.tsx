import * as S from "./styles";

export function DetailsError({ text }: any) {
  return (
    <S.Container>
      {" "}
      <S.ErrorMessageContainer>
        <S.ErrorMessage>{text}</S.ErrorMessage>
      </S.ErrorMessageContainer>
    </S.Container>
  );
}
