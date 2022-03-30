import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import defaultPicture from "../../../assets/default2.png";
import defaultPoster from "../../../assets/defaultposter.png";
import * as S from "./styles";
import { ActorBiographyModal } from "../../Modal/ActorBiographyModal";
import tvIcon from "../../../assets/tvicon.svg";
import movieIcon from "../../../assets/movieicon.svg";
import { DetailsError } from "../DetailsError";

interface ActorDetailsInterface {
  name: string;
  gender: number;
  place_of_birth: string;
  biography: string;
  profile_path: string;
  birthday: string;
  deathday?: string;
}

interface ActorCreditsInterface {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  name?: string;
  vote_average: number;
  title?: string;
  character: string;
  media_type: string;
  id: number;
}

export function ActorDetails() {
  const { id } = useParams();
  const [actorDetails, setActorDetails] = useState<ActorDetailsInterface>();
  const [actorCredits, setActorCredits] = useState<ActorCreditsInterface[]>();

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(
        `person/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setActorDetails(response.data));
    api
      .get(
        `person/${id}/combined_credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setActorCredits(response.data.cast));
  }, [id]);

  return (
    <S.Container>
      {actorDetails?.name !== undefined ? (
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
      ) : (
        <DetailsError text="Actor" />
      )}
      {actorDetails?.name && (
        <S.ActorCreditsContainer>
          <S.ActorCreditsTitle>{`${actorDetails?.name}'s Credits`}</S.ActorCreditsTitle>
          <S.ActorCreditContainer>
            {actorCredits?.map((credit) => (
              <S.MediaCreditContainer
                key={credit.id}
                onClick={() =>
                  navigate(
                    credit.media_type === "tv"
                      ? `/show/${credit.id}`
                      : `/movie/${credit.id}`
                  )
                }
              >
                <S.MediaPosterContainer>
                  <S.MediaPoster
                    src={
                      credit.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500/${credit.backdrop_path}`
                        : defaultPoster
                    }
                  />
                  {credit.backdrop_path === null && (
                    <S.NoPosterIconContainer>
                      <S.NoPosterIcon
                        src={credit.media_type === "tv" ? tvIcon : movieIcon}
                      />
                    </S.NoPosterIconContainer>
                  )}
                </S.MediaPosterContainer>
                <S.MediaTitle>{credit.title || credit.name}</S.MediaTitle>
                <S.MediaCharacter>{`as ${
                  credit.character ? credit.character : "Unknown Character/Self"
                }`}</S.MediaCharacter>
              </S.MediaCreditContainer>
            ))}
          </S.ActorCreditContainer>
        </S.ActorCreditsContainer>
      )}
      <ActorBiographyModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        actorDetails={actorDetails}
      />
    </S.Container>
  );
}
