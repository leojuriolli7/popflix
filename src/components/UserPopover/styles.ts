import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div``;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-right: 16px;
  border-radius: 40px;
  transition: 0.3s;

  @media (max-width: 842px) {
    padding: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.title === "dark"
        ? darken(0.9, "#fff")
        : lighten(0.9, "#000")};
  }
`;

export const UserPictureContainer = styled.div`
  width: 60px;

  @media (max-width: 842px) {
    display: none;
  }
`;

export const UserPicture = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserName = styled.p`
  color: ${(props) => props.theme.colors.sectionText};
  margin: 0;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 842px) {
    font-size: 1.4rem;
  }
`;

export const ProfileLink = styled.p`
  text-decoration: none;
  margin: 0;
  color: ${(props) =>
    props.theme.title === "dark"
      ? darken(0.3, props.theme.colors.sectionText)
      : lighten(0.3, props.theme.colors.sectionText)};

  @media (max-width: 842px) {
    font-size: 1.2rem;
  }
`;

export const UnorganizedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 1rem;

  @media (max-width: 842px) {
    gap: 3rem;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem 0.5rem;

  @media (max-width: 842px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;

  @media (max-width: 842px) {
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ProfileContainer = styled.img`
  border-radius: 50%;
  width: 46px;
  height: 46px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: 0.3s;

  @media (max-width: 842px) {
    width: 86px;
    height: 86px;
  }

  &:hover {
    cursor: pointer;
  }
`;
