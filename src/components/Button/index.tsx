import * as S from "./styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  color: string;
  textColor: string;
  borderColor: string;
  dataCy?: string;
}

export function Button({
  text,
  onClick,
  type,
  color,
  textColor,
  borderColor,
  dataCy,
}: ButtonProps) {
  return (
    <S.Button
      borderColor={borderColor}
      textColor={textColor}
      onClick={onClick}
      type={type}
      color={color}
      data-cy={dataCy}
    >
      {text}
    </S.Button>
  );
}
