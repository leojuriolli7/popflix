import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  min-height: 90vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 715px) {
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 70vh;
  width: 90%;
  max-width: 456px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 2rem 2rem 2rem;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.3);
  border-radius: 23px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  color: ${(props) => props.theme.colors.sectionText};
`;

export const UserNameAndPictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const UserPictureContainer = styled.div`
  width: 200px;
  height: 200px;

  @media (max-width: 390px) {
    width: 170px;
    height: 170px;
  }
`;

export const UserPicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 23px;
`;

export const UserName = styled.h1`
  text-align: center;
`;

export const UserDatesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const UserAge = styled.p`
  margin: 0;
  font-size: 1.1rem;
  text-align: center;
  color: ${(props) =>
    props.theme.title === "dark"
      ? darken(0.3, props.theme.colors.sectionText)
      : lighten(0.3, props.theme.colors.sectionText)};
`;

export const AccountBirthday = styled(UserAge)``;

export const UserDescriptionContainer = styled.div``;

export const UserDescription = styled.p`
  text-align: justify;
  margin: 0;
  margin-top: 2rem;
`;
