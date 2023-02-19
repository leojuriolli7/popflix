import i18n from "../../../i18n";
import {
  ProviderObjectInterface,
  VideosInterface,
} from "../../../utils/interfaces";

export const getYoutubeTrailersAndTeasers = (
  videosArray: VideosInterface[]
) => {
  if (videosArray?.length) {
    const filteredVideos = videosArray?.filter(
      (video) =>
        video.type.toLowerCase() === "trailer" &&
        video.site.toLowerCase() === "youtube"
    );

    return filteredVideos;
  }

  return [];
};

const getIsoLocale = () => {
  switch (i18n.language) {
    case "pt":
      return "BR";
    case "en":
      return "US";
    default:
      return "BR";
  }
};

export const filterProviderByCountry = (providers: ProviderObjectInterface) => {
  const isoLocale = getIsoLocale();

  const filteredProvider = providers?.[isoLocale];

  return filteredProvider || undefined;
};
