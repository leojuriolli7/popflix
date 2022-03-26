import * as S from "./styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  color: string;
  textColor: string;
  borderColor: string;
}

export function Button({
  text,
  onClick,
  type,
  color,
  textColor,
  borderColor,
}: ButtonProps) {
  return (
    <S.Button
      borderColor={borderColor}
      textColor={textColor}
      onClick={onClick}
      type={type}
      color={color}
    >
      {text}
    </S.Button>
  );
}
