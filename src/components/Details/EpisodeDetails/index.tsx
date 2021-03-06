import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import defaultSquare from "../../../assets/defaultsquare.png";
import defaultPicture from "../../../assets/default2.png";
import * as S from "./styles";
import { Rating } from "@mui/material";
import { DetailsError } from "../DetailsError";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import {
  fetchEpisodeCredits,
  fetchEpisodeDetails,
  fetchShowDetails,
} from "../../../utils/requests";
import { EpisodeImageSkeleton } from "../../Skeleton/EpisodeDetailsSkeletons/EpisodeImageSkeleton";
import { EpisodeTitleSkeleton } from "../../Skeleton/EpisodeDetailsSkeletons/EpisodeTitleSkeleton";
import { MediaRatingSkeleton } from "../../Skeleton/MediaDetailsSkeletons/MediaRatingSkeleton";
import { EpisodeOverviewSkeleton } from "../../Skeleton/EpisodeDetailsSkeletons/EpisodeOverviewSkeleton";
import { EpisodeReleaseAndRuntimeSkeleton } from "../../Skeleton/EpisodeDetailsSkeletons/EpisodeReleaseAndRuntimeSkeleton";
import {
  EpisodeCreditsInterface,
  EpisodeDetailsInterface,
} from "../../../utils/interfaces";

interface ShowDetailsInterface {
  name: string;
  id: number;
}

export function EpisodeDetails() {
  const { id } = useParams();
  const { t }: { t: any } = useTranslation();
  const { number } = useParams();
  const { episodeNumber } = useParams();
  const [loading, setLoading] = useState(true);
  const [doesMediaExist, setDoesMediaExist] = useState(true);
  const [episodeDetails, setEpisodeDetails] =
    useState<EpisodeDetailsInterface>();
  const [showDetails, setShowDetails] = useState<ShowDetailsInterface>();
  const [episodeCredits, setEpisodeCredits] =
    useState<EpisodeCreditsInterface>();
  const navigate = useNavigate();

  const fetchData = () => {
    Promise.all([
      fetchEpisodeCredits(id, number, episodeNumber),
      fetchShowDetails(id),
      fetchEpisodeDetails(id, number, episodeNumber),
    ])
      .then((response) => {
        setEpisodeCredits(response[0].data);
        setShowDetails(response[1].data);
        setEpisodeDetails(response[2].data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setDoesMediaExist(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    fetchData();
  }, [i18n.language]);

  const airDate = new Date(
    episodeDetails?.air_date ? episodeDetails?.air_date : "1969-09-12"
  );

  const currentDate = new Date();

  const diff = Math.floor(
    (Number(airDate) - Number(currentDate)) / (1000 * 60 * 60 * 24)
  );

  return doesMediaExist ? (
    <S.Container>
      <S.Content>
        <S.ArrowBackContainer
          onClick={() => navigate(`/show/${id}/season/${number}`)}
        >
          <S.WhiteArrowBack />
        </S.ArrowBackContainer>
        {loading ? (
          <EpisodeImageSkeleton />
        ) : (
          <S.EpisodeImage
            src={
              episodeDetails?.still_path
                ? `https://image.tmdb.org/t/p/w500/${episodeDetails?.still_path}`
                : defaultSquare
            }
          />
        )}
        {loading ? (
          <EpisodeTitleSkeleton />
        ) : (
          <S.EpisodeTitle>{episodeDetails?.name}</S.EpisodeTitle>
        )}
        {loading ? (
          <EpisodeReleaseAndRuntimeSkeleton />
        ) : (
          <S.EpisodeInfoContainer>
            <S.EpisodeInfo>{`${showDetails?.name} S${episodeDetails?.season_number}E${episodeNumber}`}</S.EpisodeInfo>
            <S.EpisodeAirDate isReleased={diff < 0 ? true : false}>
              {episodeDetails?.air_date
                ? `${airDate.getDate()}/${
                    airDate.getMonth() + 1
                  }/${airDate.getFullYear()}`
                : t("unknownAirDate")}
            </S.EpisodeAirDate>
          </S.EpisodeInfoContainer>
        )}
        {diff <= 0 && loading === false && (
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
                ? `${Number(episodeDetails.vote_average / 2)} ${t("stars")}`
                : t("noReviewsError")}
            </S.RatingText>
          </S.RatingContainer>
        )}

        {loading === true && <MediaRatingSkeleton />}
        {episodeDetails?.overview && loading === false && (
          <S.EpisodeOverview>{episodeDetails?.overview}</S.EpisodeOverview>
        )}
        {loading === true && <EpisodeOverviewSkeleton />}
        {diff >= 0 && (
          <S.UnreleasedMessage>{`${t("releasesIn")} ${diff} ${t(
            "days"
          )}`}</S.UnreleasedMessage>
        )}
      </S.Content>
      <S.CastListWrapper>
        <S.CastListSectionTitle>
          {t("episodeCreditsTitle", {
            name: showDetails?.name,
            seasonAndEpisodeNumber: `S${number}E${episodeNumber}`,
          })}
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
