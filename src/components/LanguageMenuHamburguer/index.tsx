import * as S from "./styles";
import FlagBrazil from "../../assets/flag-brazil.svg";
import FlagUsa from "../../assets/flag-usa.svg";
import i18n from "../../i18n";
import { useState } from "react";

export function LanguageMenuHamburguer() {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [type, setType] = useState(i18n.language);

  return (
    <S.Container>
      <S.ImageContainer onClick={() => setType("pt")} isActive={type === "pt"}>
        <S.FlagImage src={FlagBrazil} onClick={() => changeLanguage("pt")} />
      </S.ImageContainer>
      <S.ImageContainer onClick={() => setType("en")} isActive={type === "en"}>
        <S.FlagImage src={FlagUsa} onClick={() => changeLanguage("en")} />
      </S.ImageContainer>
    </S.Container>
  );
}
