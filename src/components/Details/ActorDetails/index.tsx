import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import * as S from "./styles";

interface ActorDetailsInterface {
  name: string;
  gender: number;
  place_of_birth: string;
  biography: string;
  profile_path: string;
  birthday: string;
  deathday?: string;
}

export function ActorDetails() {
  const { id } = useParams();
  const [actorDetails, setActorDetails] = useState<ActorDetailsInterface>();

  useEffect(() => {
    api
      .get(
        `person/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setActorDetails(response.data));
  });

  return (
    <S.Container>
      <S.MainInfoContainer>
        <S.PictureContainer>
          <S.ActorPicture
            src={`https://image.tmdb.org/t/p/w500/${actorDetails?.profile_path}`}
          />
        </S.PictureContainer>
        <S.ActorDetails>
          <S.ActorName>{actorDetails?.name}</S.ActorName>
          <S.ActorPlaceOfBirth>
            {actorDetails?.place_of_birth}
          </S.ActorPlaceOfBirth>
          <S.ActorBirthdayContainer>
            <S.ActorBirthday>{actorDetails?.birthday}</S.ActorBirthday>
            {actorDetails?.deathday && (
              <S.ActorDeathday>{actorDetails?.deathday}</S.ActorDeathday>
            )}
          </S.ActorBirthdayContainer>
          <S.ActorBiographyContainer>
            <S.ActorBiography>{actorDetails?.biography}</S.ActorBiography>
          </S.ActorBiographyContainer>
          <S.FullBiographyLinkContainer>
            <S.FullBiographyLink>Read Full Biography</S.FullBiographyLink>
          </S.FullBiographyLinkContainer>
        </S.ActorDetails>
      </S.MainInfoContainer>
    </S.Container>
  );
}
