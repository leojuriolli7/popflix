import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import defaultPicture from "../../../assets/default2.png";
import * as S from "./styles";
import { DetailsError } from "../DetailsError";
import { useTranslation } from "react-i18next";
import {
  fetchMediaCredits,
  fetchMediaDetails,
  fetchTVAggregateCredits,
} from "../../../utils/requests";
import { ActorPictureSkeleton } from "../../Skeleton/CreditsDetailsSkeletons/ActorPictureSkeleton";
import {
  MediaCreditsInterface,
  MediaDetailsInterface,
} from "../../../utils/interfaces";

interface CreditsDetailsProps {
  mediaType: "tv" | "movie";
}

export function CreditsDetails({ mediaType }: CreditsDetailsProps) {
  const { id } = useParams();
  const { t }: { t: any } = useTranslation();
  const [mediaCredits, setMediaCredits] = useState<MediaCreditsInterface>();
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface>();
  const [loading, setLoading] = useState(true);
  const [doesMediaExist, setDoesMediaExist] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    Promise.all([
      fetchMediaDetails(mediaType, id),
      mediaType === "movie"
        ? fetchMediaCredits(mediaType, id)
        : fetchTVAggregateCredits(mediaType, id),
    ])
      .then((response) => {
        setMediaDetails(response[0].data);
        setMediaCredits(response[1].data);
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
  }, []);

  return doesMediaExist ? (
    <S.Container>
      <S.CastListSectionTitle>
        {t("mediaCreditsPageTitle", {
          name: mediaDetails?.name,
          title: mediaDetails?.title,
        })}
      </S.CastListSectionTitle>
      <S.Content>
        <S.ArrowBackContainer
          onClick={() =>
            navigate(`/${mediaType === "tv" ? "show" : "movie"}/${id}`)
          }
        >
          <S.WhiteArrowBack />
        </S.ArrowBackContainer>
        <S.CastListContainer>
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <S.CastMemberContainer>
                  <ActorPictureSkeleton />
                </S.CastMemberContainer>
              ))
            : mediaCredits?.cast.map((castMember) => (
                <S.CastMemberContainer
                  key={castMember?.id}
                  onClick={() => navigate(`/actor/${castMember?.id}`)}
                >
                  <S.CastMemberPhotoContainer>
                    <S.CastMemberPhoto
                      src={
                        castMember?.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${castMember?.profile_path}`
                          : defaultPicture
                      }
                    />
                  </S.CastMemberPhotoContainer>

                  <S.CastMemberName>{castMember?.name}</S.CastMemberName>
                  <S.CastMemberRole>{`${t("as")} ${
                    castMember?.roles
                      ? castMember.roles[0].character
                      : castMember?.character
                  }`}</S.CastMemberRole>
                </S.CastMemberContainer>
              ))}
          {mediaCredits?.crew.map((crewMember) => (
            <S.CastMemberContainer
              key={crewMember?.id}
              onClick={() => navigate(`/actor/${crewMember?.id}`)}
            >
              <S.CastMemberPhotoContainer>
                <S.CastMemberPhoto
                  src={
                    crewMember?.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${crewMember?.profile_path}`
                      : defaultPicture
                  }
                />
              </S.CastMemberPhotoContainer>
              <S.CastMemberName>{crewMember?.name}</S.CastMemberName>
              <S.CastMemberRole>
                {crewMember?.jobs ? crewMember?.jobs[0].job : crewMember?.job}
              </S.CastMemberRole>
            </S.CastMemberContainer>
          ))}
        </S.CastListContainer>
      </S.Content>
    </S.Container>
  ) : (
    <DetailsError text={t("noCreditsError")} />
  );
}
