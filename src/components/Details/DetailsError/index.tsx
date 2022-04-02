import * as S from "./styles";

export function DetailsError({ text }: any) {
  return (
    <S.Container>
      {" "}
      <S.ErrorMessageContainer>
        <S.ErrorMessage>{text}</S.ErrorMessage>
        <S.Link href="/">Click to go back to Home</S.Link>
      </S.ErrorMessageContainer>
    </S.Container>
  );
}
