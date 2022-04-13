import * as S from "./styles";

interface InputValidationMessageProps {
  text: string;
}

export function InputValidationMessage({ text }: InputValidationMessageProps) {
  return (
    <S.Container>
      <S.MessageText>{text}</S.MessageText>
    </S.Container>
  );
}
