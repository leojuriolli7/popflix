import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import defaultSquare from "../../../assets/defaultsquare.png";
import defaultPicture from "../../../assets/default2.png";
import * as S from "./styles";
import { Rating } from "@mui/material";
import { DetailsError } from "../DetailsError";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

interface ShowDetailsInterface {
  name: string;
  id: number;
}

interface CrewInterface {
  id: number;
  name: string;
  department: string;
  job: string;
  profile_path: string;
}

interface GuestStarsInterface {
  name: string;
  id: number;
  character: string;
  profile_path: string;
}

interface CastInterface {
  name: string;
  id: number;
  character: string;
  profile_path: string;
}

interface EpisodeCreditsInterface {
  cast: CastInterface[];
  crew: CrewInterface[];
  guest_stars: GuestStarsInterface[];
}

interface EpisodeDetailsInterface {
  air_date: string;
  name: string;
  overview: string;
  id: number;
  season_number: number;
  still_path: string;
  vote_average: number;
}

export function EpisodeDetails() {
  const { id } = useParams();
  const { t }: { t: any } = useTranslation();
  const { number } = useParams();
  const { episodeNumber } = useParams();
  const [episodeDetails, setEpisodeDetails] =
    useState<EpisodeDetailsInterface>();
  const [showDetails, setShowDetails] = useState<ShowDetailsInterface>();
  const [episodeCredits, setEpisodeCredits] =
    useState<EpisodeCreditsInterface>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(
        `tv/${id}/season/${number}/episode/${episodeNumber}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setEpisodeDetails(response.data));
    api
      .get(`tv/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`)
      .then((response) => setShowDetails(response.data));

    api
      .get(
        `tv/${id}/season/${number}/episode/${episodeNumber}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setEpisodeCredits(response.data));
  }, [id, number, episodeNumber]);

  const airDate = new Date(
    episodeDetails?.air_date ? episodeDetails?.air_date : "1969-09-12"
  );

  const currentDate = new Date();

  const diff = Math.floor(
    (Number(airDate) - Number(currentDate)) / (1000 * 60 * 60 * 24)
  );

  return episodeDetails?.id ? (
    <S.Container>
      <S.Content>
        <S.ArrowBackContainer
          onClick={() => navigate(`/show/${id}/season/${number}`)}
        >
          <S.WhiteArrowBack />
        </S.ArrowBackContainer>
        <S.EpisodeImage
          src={
            episodeDetails?.still_path
              ? `https://image.tmdb.org/t/p/w500/${episodeDetails?.still_path}`
              : defaultSquare
          }
        />
        <S.EpisodeTitle>{episodeDetails?.name}</S.EpisodeTitle>
        <S.EpisodeInfoContainer>
          <S.EpisodeInfo>{`${showDetails?.name} S${episodeDetails?.season_number}E${episodeNumber}`}</S.EpisodeInfo>
          <S.EpisodeAirDate isReleased={diff < 0 ? true : false}>
            {episodeDetails.air_date
              ? `${airDate.getDate()}/${
                  airDate.getMonth() + 1
                }/${airDate.getFullYear()}`
              : t("unknownAirDate")}
          </S.EpisodeAirDate>
        </S.EpisodeInfoContainer>
        {diff <= 0 && (
          <S.RatingContainer>
            <Rating
              value={
                episodeDetails?.vote_average
                  ? Number(episodeDetails.vote_average / 2)
                  : 0
              }
              precision={0.5}
              readOnly
              size="large"
            />
            <S.RatingText>
              {episodeDetails?.vote_average
                ? Number(episodeDetails.vote_average / 2) + " Stars"
                : "No Reviews yet"}
            </S.RatingText>
          </S.RatingContainer>
        )}
        {episodeDetails?.overview && (
          <S.EpisodeOverview>{episodeDetails?.overview}</S.EpisodeOverview>
        )}
        {diff >= 0 && (
          <S.UnreleasedMessage>{`Releases in ${diff} days`}</S.UnreleasedMessage>
        )}
      </S.Content>
      <S.CastListWrapper>
        <S.CastListSectionTitle>{`${showDetails?.name} S${number}E${episodeNumber} Credits`}</S.CastListSectionTitle>
        <S.CastListSectionTitle>
          {i18n.language === "pt"
            ? `Créditos de ${showDetails?.name} S${number}E${episodeNumber}`
            : `${showDetails?.name} S${number}E${episodeNumber} Credits`}
        </S.CastListSectionTitle>
        <S.CastListContainer>
          {episodeCredits?.cast.map((castMember) => (
            <S.CastMemberContainer
              key={castMember?.id}
              onClick={() => navigate(`/actor/${castMember?.id}`)}
            >
              <S.CastMemberPhotoContainer>
                {" "}
                <S.CastMemberPhoto
                  src={
                    castMember.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}`
                      : defaultPicture
                  }
                />
              </S.CastMemberPhotoContainer>
              <S.CastMemberName>{castMember?.name}</S.CastMemberName>
              <S.CastMemberRole>{`${t("as")} ${
                castMember?.character || t("unknownCharacter")
              }`}</S.CastMemberRole>
            </S.CastMemberContainer>
          ))}
          {episodeCredits?.crew.map((crewMember) => (
            <S.CastMemberContainer
              key={crewMember?.id}
              onClick={() => navigate(`/actor/${crewMember?.id}`)}
            >
              <S.CastMemberPhotoContainer>
                {" "}
                <S.CastMemberPhoto
                  src={
                    crewMember.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${crewMember.profile_path}`
                      : defaultPicture
                  }
                />
              </S.CastMemberPhotoContainer>
              <S.CastMemberName>{crewMember?.name}</S.CastMemberName>
              <S.CastMemberRole>
                {crewMember?.job || t("unknownCrewJob")}
              </S.CastMemberRole>
            </S.CastMemberContainer>
          ))}
          {episodeCredits?.guest_stars.map((guest) => (
            <S.CastMemberContainer
              key={guest?.id}
              onClick={() => navigate(`/actor/${guest?.id}`)}
            >
              <S.CastMemberPhotoContainer>
                <S.CastMemberPhoto
                  src={
                    guest.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${guest.profile_path}`
                      : defaultPicture
                  }
                />
              </S.CastMemberPhotoContainer>
              <S.CastMemberName>{guest?.name}</S.CastMemberName>
              <S.CastMemberRole>{`as ${
                guest?.character || t("unknownCharacter")
              }`}</S.CastMemberRole>
            </S.CastMemberContainer>
          ))}
        </S.CastListContainer>
      </S.CastListWrapper>
    </S.Container>
  ) : (
    <DetailsError text={t("noEpisodeError")} />
  );
}
