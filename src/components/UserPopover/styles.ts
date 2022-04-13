import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div``;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-right: 12px;
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
  font-size: 1.1rem;

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

interface UnorganizedListProps {
  type: "mobile" | "desktop";
}

export const UnorganizedList = styled.ul<UnorganizedListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  ${(props) => props.type === "mobile" && "gap: 3rem;"}
  ${(props) => props.type === "desktop" && "gap: 1rem;"}
`;

interface ListItemProps {
  type: "mobile" | "desktop";
}

export const ListItem = styled.li<ListItemProps>`
  list-style: none;
  ${(props) =>
    props.type === "mobile" && "padding-left: 1rem; padding-right: 1rem;"}
  ${(props) =>
    props.type === "desktop" && "padding-left: .5rem; padding-right: .5rem;"}

    padding-top: 1rem;
  padding-bottom: 1rem;
`;

interface MenuLinkProps {
  type: "mobile" | "desktop";
}

export const MenuLink = styled.a<MenuLinkProps>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.sectionText};
  ${(props) => props.type === "mobile" && "font-size: 1.5rem;"}
  ${(props) => props.type === "desktop" && "font-size: 1.2rem;"}


  &:hover {
    background: ${(props) => props.theme.colors.background};
    cursor: pointer;
  }
`;

interface ProfileContainerProps {
  type: "mobile" | "desktop";
}

export const ProfileContainer = styled.img<ProfileContainerProps>`
  border-radius: 50%;
  ${(props) => props.type === "mobile" && "width: 86px; height: 86px;"}
  ${(props) => props.type === "desktop" && "width: 46px; height: 46px;"}
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;
