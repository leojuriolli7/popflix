import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import defaultPicture from "../../../assets/default2.png";
import * as S from "./styles";
import { ActorBiographyModal } from "../../Modal/ActorBiographyModal";

interface ActorDetailsInterface {
  name: string;
  gender: number;
  place_of_birth: string;
  biography: string;
  profile_path: string;
  birthday: string;
  deathday?: string;
}

// interface ActorCreditsInterface {
//   adult: boolean;
//   backdrop_path: string;
//   original_title: string;
//   vote_average: number;
//   title: string;
//   character: string;
// }

export function ActorDetails() {
  const { id } = useParams();
  const [actorDetails, setActorDetails] = useState<ActorDetailsInterface>();
  // const [actorCredits, setActorCredits] = useState<ActorCreditsInterface[]>();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

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
            src={
              actorDetails?.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actorDetails?.profile_path}`
                : defaultPicture
            }
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
          {actorDetails?.biography && (
            <S.FullBiographyLinkContainer>
              <S.FullBiographyLink onClick={() => setShow(true)}>
                Read Full Biography
              </S.FullBiographyLink>
            </S.FullBiographyLinkContainer>
          )}
        </S.ActorDetails>
      </S.MainInfoContainer>
      <ActorBiographyModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        actorDetails={actorDetails}
      />
    </S.Container>
  );
}
