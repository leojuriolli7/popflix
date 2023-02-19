import { api } from "../../services/api";
import { apiJson } from "../../services/api";
import { LanguageSwitch } from "../constants";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchSeasonDetails = (
  id: string | undefined,
  number: string | undefined
) =>
  api.get(
    `tv/${id}/season/${number}?api_key=${apiKey}&language=${LanguageSwitch()}`
  );

export const fetchEpisodeDetails = (
  id: string | undefined,
  number: string | undefined,
  episodeNumber: string | undefined
) =>
  api.get(
    `tv/${id}/season/${number}/episode/${episodeNumber}?api_key=${apiKey}&language=${LanguageSwitch()}`
  );

export const fetchShowDetails = (id: string | undefined) =>
  api.get(`tv/${id}?api_key=${apiKey}&language=en-US`);

export const fetchEpisodeCredits = (
  id: string | undefined,
  number: string | undefined,
  episodeNumber: string | undefined
) =>
  api.get(
    `tv/${id}/season/${number}/episode/${episodeNumber}/credits?api_key=${apiKey}&language=en-US`
  );

export const fetchCompanyDetails = (
  type: "network" | "company",
  id: string | undefined
) => api.get(`${type}/${id}?api_key=${apiKey}`);

export const fetchActorDetails = (id: string | undefined) =>
  api.get(`person/${id}?api_key=${apiKey}&language=${LanguageSwitch()}`);

export const fetchActorCredits = (id: string | undefined) =>
  api.get(`person/${id}/combined_credits?api_key=${apiKey}&language=en-US`);

export const fetchMediaDetails = (
  mediaType: "tv" | "movie",
  id: string | undefined
) =>
  api.get(`${mediaType}/${id}?api_key=${apiKey}&language=${LanguageSwitch()}`);

export const fetchMediaVideos = (
  mediaType: "tv" | "movie",
  id: string | undefined
) =>
  api.get(
    `${mediaType}/${id}/videos?api_key=${apiKey}&language=${LanguageSwitch()}`
  );

export const fetchMediaProviders = (
  mediaType: "tv" | "movie",
  id: string | undefined
) =>
  api.get(
    `${mediaType}/${id}/watch/providers?api_key=${apiKey}&language=${LanguageSwitch()}`
  );

export const fetchMediaCredits = (
  mediaType: "tv" | "movie",
  id: string | undefined
) => api.get(`${mediaType}/${id}/credits?api_key=${apiKey}&language=en-US`);

export const fetchTVAggregateCredits = (
  mediaType: "tv" | "movie",
  id: string | undefined
) =>
  api.get(
    `${mediaType}/${id}/aggregate_credits?api_key=${apiKey}&language=en-US`
  );

export async function userLogin(payload: any) {
  const { data: response } = await apiJson.post("/login", payload);
  return response;
}

export async function userSignUp(payload: any) {
  const { data: response } = await apiJson.post("/users", payload);
  return response;
}
