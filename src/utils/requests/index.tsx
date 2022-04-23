import { api } from "../../services/api";
import { apiJson } from "../../services/api";
import { LanguageSwitch } from "../constants";

export const fetchSeasonDetails = (
  id: string | undefined,
  number: string | undefined
) =>
  api.get(
    `tv/${id}/season/${number}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=${LanguageSwitch()}`
  );

export const fetchEpisodeDetails = (
  id: string | undefined,
  number: string | undefined,
  episodeNumber: string | undefined
) =>
  api.get(
    `tv/${id}/season/${number}/episode/${episodeNumber}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=${LanguageSwitch()}`
  );

export const fetchShowDetails = (id: string | undefined) =>
  api.get(`tv/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`);

export const fetchEpisodeCredits = (
  id: string | undefined,
  number: string | undefined,
  episodeNumber: string | undefined
) =>
  api.get(
    `tv/${id}/season/${number}/episode/${episodeNumber}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
  );

export const fetchCompanyDetails = (
  type: "network" | "company",
  id: string | undefined
) => api.get(`${type}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9`);

export const fetchActorDetails = (id: string | undefined) =>
  api.get(
    `person/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=${LanguageSwitch()}`
  );

export const fetchActorCredits = (id: string | undefined) =>
  api.get(
    `person/${id}/combined_credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
  );

export const fetchMediaDetails = (
  mediaType: "tv" | "movie",
  id: string | undefined
) =>
  api.get(
    `${mediaType}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=${LanguageSwitch()}`
  );

export const fetchMediaCredits = (
  mediaType: "tv" | "movie",
  id: string | undefined
) =>
  api.get(
    `${mediaType}/${id}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
  );

export const fetchTVAggregateCredits = (
  mediaType: "tv" | "movie",
  id: string | undefined
) =>
  api.get(
    `${mediaType}/${id}/aggregate_credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
  );

export async function userLogin(payload: any) {
  const { data: response } = await apiJson.post("/login", payload);
  return response;
}

export async function userSignUp(payload: any) {
  const { data: response } = await apiJson.post("/users", payload);
  return response;
}
