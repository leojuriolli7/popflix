import * as S from "./styles";

export function MainHeading({ text, subtext }: any) {
  return (
    <S.MainHeadingContainer>
      <S.MainHeading>{text}</S.MainHeading>
      <S.MainHeadingSubText>{subtext}</S.MainHeadingSubText>
    </S.MainHeadingContainer>
  );
}
