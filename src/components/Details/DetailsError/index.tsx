import * as S from "./styles";

export function DetailsError({ text }: any) {
  return (
    <S.ErrorMessageContainer>
      <S.ErrorMessage>{`Error: No ${text} with this id`}</S.ErrorMessage>
    </S.ErrorMessageContainer>
  );
}
