import { api } from "../../services/api";

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
