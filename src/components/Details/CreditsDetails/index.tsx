import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import defaultPicture from "../../../assets/default2.png";
import * as S from "./styles";
import { DetailsError } from "../DetailsError";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

interface CreditsDetailsProps {
  mediaType: "tv" | "movie";
}

interface JobsInterface {
  job: string;
}

interface CrewInterface {
  id: number;
  name: string;
  department: string;
  job?: string;
  jobs: JobsInterface[];
  profile_path: string;
}

interface RolesInterface {
  character: string;
  episode_count: number;
  total_episode_count: number;
}

interface CastInterface {
  name: string;
  id: number;
  character?: string;
  roles: RolesInterface[];
  profile_path: string;
}

interface MediaCreditsInterface {
  cast: CastInterface[];
  crew: CrewInterface[];
}

interface MediaDetailsInterface {
  name?: string;
  title?: string;
  id?: number;
}

export function CreditsDetails({ mediaType }: CreditsDetailsProps) {
  const { id } = useParams();
  const { t }: { t: any } = useTranslation();
  const [mediaCredits, setMediaCredits] = useState<MediaCreditsInterface>();
  const [mediaDetails, setMediaDetails] = useState<MediaDetailsInterface>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(
        `${mediaType}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
      )
      .then((response) => setMediaDetails(response.data));

    if (mediaType === "movie") {
      api
        .get(
          `${mediaType}/${id}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
        )
        .then((response) => setMediaCredits(response.data));
    } else if (mediaType === "tv") {
      api
        .get(
          `${mediaType}/${id}/aggregate_credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
        )
        .then((response) => setMediaCredits(response.data));
    }
  }, [mediaType, id]);

  return mediaDetails?.id ? (
    <S.Container>
      <S.CastListSectionTitle>
        {i18n.language === "pt"
          ? `Créditos de ${mediaDetails.name || mediaDetails.title}`
          : `${mediaDetails.name || mediaDetails.title} Full Credits`}
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
          {mediaCredits?.cast.map((castMember) => (
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
