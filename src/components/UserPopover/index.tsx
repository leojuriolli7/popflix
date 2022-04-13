import { useSelector } from "react-redux";
import { RootState } from "../../store/";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/User.store";
import DefaultUserImage from "../../assets/default-user-image.png";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export function UserPopover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t }: { t: any } = useTranslation();

  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage
  );

  const firstName = useSelector((state: RootState) => state.user.firstName);

  const lastName = useSelector((state: RootState) => state.user.lastName);

  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <S.Container>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover>
            <Popover.Body>
              <S.UserContainer onClick={() => navigate("/profile")}>
                <S.UserPictureContainer>
                  <S.UserPicture src={profileImage || DefaultUserImage} />
                </S.UserPictureContainer>
                <S.UserNameContainer>
                  <S.UserName>{`${firstName} ${lastName}`}</S.UserName>
                  <S.ProfileLink>{t("goToProfile")}</S.ProfileLink>
                </S.UserNameContainer>
              </S.UserContainer>
              <S.UnorganizedList>
                <S.ListItem>
                  <S.MenuLink onClick={() => handleClick()}>
                    {t("logout")}
                  </S.MenuLink>
                </S.ListItem>
              </S.UnorganizedList>
            </Popover.Body>
          </Popover>
        }
      >
        <S.ProfileContainer src={profileImage || DefaultUserImage} />
      </OverlayTrigger>
    </S.Container>
  );
}
