import { api } from "../../services/api";
import { apiJson } from "../../services/api";

export async function getMediaDetails(mediaType: any, id: any) {
  const { data: response } = await api.get(
    `${mediaType}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
  );
  return response;
}

export async function getMediaCredits({ mediaType, id }: any) {
  const { data: response } = await api.get(
    `${mediaType}/${id}/credits?api_key=24e0e0f71e0ac9cb9c5418459514eda9&language=en-US`
  );
  return response;
}

export async function userLogin(payload: any) {
  const { data: response } = await apiJson.post("/login", payload);
  return response;
}

export async function userSignUp(payload: any) {
  const { data: response } = await apiJson.post("/users", payload);
  return response;
}
