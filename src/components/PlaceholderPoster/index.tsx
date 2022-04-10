import * as S from "./styles";
import tvIcon from "../../assets/tvicon.svg";
import movieIcon from "../../assets/movieicon.svg";

export function PlaceholderPoster({ title, name }: any) {
  return (
    <>
      <S.IconContainer>
        <S.Icon src={title ? movieIcon : tvIcon} />
      </S.IconContainer>
      <S.MediaNameContainer>
        <S.MediaName>{name || title}</S.MediaName>
      </S.MediaNameContainer>
    </>
  );
}
