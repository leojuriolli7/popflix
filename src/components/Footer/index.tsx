import * as S from "./styles";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Container>
      <S.Content>
        <S.FooterText>&copy; 2022</S.FooterText>
        <S.FooterText>Popflix Inc.</S.FooterText>
        <S.BackToTopButton
          title="Back to the top"
          onClick={() => scrollToTop()}
        />
      </S.Content>
    </S.Container>
  );
}
