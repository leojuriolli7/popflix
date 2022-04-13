import { useSelector } from "react-redux";
import { RootState } from "../../store";
import DefaultPicture from "../../assets/default-user-image.png";
import * as S from "./styles";
import { DetailsMediaList } from "../Details/DetailsMediaList";

export function UserProfile() {
  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage
  );
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const lastName = useSelector((state: RootState) => state.user.lastName);
  const currentDate = new Date();
  const birthday = useSelector((state: RootState) => state.user.birthday);
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);
  const accountCreatedAt = useSelector(
    (state: RootState) => state.user.accountCreatedAt
  );

  const birthdayDate = new Date(birthday !== null ? birthday : "1969-02-02");

  const userAge =
    isUserLogged &&
    Math.abs(currentDate.getTime() - birthdayDate.getTime()) / 3.154e10;

  const accountCreationDate = new Date(
    accountCreatedAt !== null ? accountCreatedAt : "1969-01-01"
  );

  return (
    <S.Container>
      <S.Content>
        <S.UserNameAndPictureContainer>
          <S.UserPictureContainer>
            <S.UserPicture src={profileImage || DefaultPicture} />
          </S.UserPictureContainer>
          <S.UserName>{`${firstName} ${lastName}`}</S.UserName>
        </S.UserNameAndPictureContainer>
        <S.UserDatesContainer>
          <S.UserAge>{`${Number(userAge).toFixed(0)} Years old`}</S.UserAge>
          <S.AccountBirthday>
            {`Created in ${accountCreationDate.getDate()}/${
              accountCreationDate.getMonth() + 1
            }/${accountCreationDate.getFullYear()}`}
          </S.AccountBirthday>
        </S.UserDatesContainer>
        <S.UserDescriptionContainer>
          <S.UserDescription>...</S.UserDescription>
        </S.UserDescriptionContainer>
      </S.Content>
    </S.Container>
  );
}
