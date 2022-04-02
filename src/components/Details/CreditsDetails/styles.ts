import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 80vh;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.sectionText};

  @media (max-width: 845px) {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.sectionText};
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  margin: 1rem 0 3rem 0;
  padding-bottom: 2rem;
  border-radius: 23px;

  @media (max-width: 1150px) {
    margin: 2rem 2rem 0 2rem;
  }

  @media (max-width: 426px) {
    margin: 2rem 1rem 0 1rem;
  }
`;

export const ArrowBackContainer = styled.div`
  position: absolute;
  padding: 0.5rem;
  left: -5px;
  top: -10px;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.primary
      : props.theme.colors.background};
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const WhiteArrowBack = styled(IoMdArrowRoundBack).attrs({
  size: 25,
  color: "white",
})``;

export const CastListSectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 2.2rem 35px 0 35px;

  @media (max-width: 485px) {
    margin: 0 35px 0 35px;
  }
`;

export const CastListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

export const CastMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 24px;
  transition: 0.3s;
  padding: 0 1rem;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const CastMemberPhotoContainer = styled.div`
  height: 300px;
  width: 200px;

  @media (max-width: 500px) {
    height: 270px;
    width: 180px;
  }
`;

export const CastMemberPhoto = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const CastMemberName = styled.h2`
  margin: 0;
  margin-top: 16px;
  font-size: 2rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const CastMemberRole = styled.p`
  margin: 0;
  margin-top: 4px;
  font-size: 1.1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media (max-width: 470px) {
    font-size: 1.3rem;
  }
`;
