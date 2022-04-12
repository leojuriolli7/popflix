import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import defaultPicture from "../../../assets/default2.png";
import defaultPoster from "../../../assets/defaultposter.png";
import * as S from "./styles";
import { ActorBiographyModal } from "../../Modals/ActorBiographyModal";
import tvIcon from "../../../assets/tvicon.svg";
import movieIcon from "../../../assets/movieicon.svg";
import { DetailsError } from "../DetailsError";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { LanguageSwitch } from "../../../utils/constants";

interface ActorDetailsInterface {
  name: string;
  gender: number;
  place_of_birth: string;
  biography: string;
  profile_path: string;
  birthday: string;
  deathday?: string;
  known_for_department: string;
}

interface ActorCastInterface {
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

interface ActorCrewInterface {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
  job: string;
  media_type: string;
}

interface ActorCreditsInterface {
  cast: ActorCastInterface[];
  crew: ActorCrewInterface[];
}

export function ActorDetails() {
  const { id } = useParams();
  const [actorDetails, setActorDetails] = useState<ActorDetailsInterface>();
  const [actorCredits, setActorCredits] = useState<ActorCreditsInterface>();
  const { t }: { t: any } = useTranslation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(
        `person/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=${LanguageSwitch()}`
      )
      .then((response) => setActorDetails(response.data));
    api
      .get(
        `person/${id}/combined_credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setActorCredits(response.data));
  }, [id, i18n.language]);

  const birthdayDate = new Date(
    actorDetails?.birthday ? actorDetails?.birthday : "1969-09-12"
  );

  const deathdayDate = new Date(
    actorDetails?.deathday ? actorDetails?.deathday : "1969-09-12"
  );

  const currentDate = new Date();

  const actorAge = actorDetails?.deathday
    ? Math.abs(deathdayDate.getTime() - birthdayDate.getTime()) / 3.154e10
    : Math.abs(currentDate.getTime() - birthdayDate.getTime()) / 3.154e10;
  return actorDetails?.name !== undefined ? (
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
            <S.ActorBirthday>{`${birthdayDate.getDate()}/${
              birthdayDate.getMonth() + 1
            }/${birthdayDate.getFullYear()}`}</S.ActorBirthday>
            {actorDetails?.deathday && (
              <S.ActorDeathday>{`${deathdayDate.getDate()}/${
                deathdayDate.getMonth() + 1
              }/${deathdayDate.getFullYear()}`}</S.ActorDeathday>
            )}
            <S.ActorBirthday>{`(${Math.floor(
              actorAge
            )} Years old)`}</S.ActorBirthday>
          </S.ActorBirthdayContainer>
          {actorDetails?.known_for_department && (
            <S.KnownFor>{`${t("knownFor")} ${
              actorDetails?.known_for_department
            }`}</S.KnownFor>
          )}
          <S.ActorBiographyContainer>
            <S.ActorBiography>{actorDetails?.biography}</S.ActorBiography>
          </S.ActorBiographyContainer>
          {actorDetails?.biography && (
            <S.FullBiographyLinkContainer>
              <S.FullBiographyLink onClick={() => setShow(true)}>
                {t("readFullBiographyMessage")}
              </S.FullBiographyLink>
            </S.FullBiographyLinkContainer>
          )}
        </S.ActorDetails>
      </S.MainInfoContainer>
      <S.CreditsListContainer>
        <S.CreditsSectionTitle>
          {t("actorCreditsTitle", { name: actorDetails.name })}
        </S.CreditsSectionTitle>
        <S.CreditContainer>
          {actorCredits?.cast?.map((credit) => (
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
              <S.MediaCharacter>{`${t("as")} ${
                credit.character ? credit.character : "Unknown Character/Self"
              }`}</S.MediaCharacter>
            </S.MediaCreditContainer>
          ))}

          {actorCredits?.crew?.map((credit) => (
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
              <S.MediaCharacter>
                {credit.job ? credit.job : t("unknown")}
              </S.MediaCharacter>
            </S.MediaCreditContainer>
          ))}
        </S.CreditContainer>
      </S.CreditsListContainer>
      <ActorBiographyModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        actorDetails={actorDetails}
      />
    </S.Container>
  ) : (
    <DetailsError text={t("noActorError")} />
  );
}
