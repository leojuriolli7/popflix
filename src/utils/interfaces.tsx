interface ActorDetailsInterface {
  name: string;
  gender: number;
  place_of_birth: string;
  biography: string;
  profile_path: string;
  birthday: string;
  deathday?: string;
  known_for_department: string;
  id: number;
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

interface ProductionCompaniesInterface {
  id: number;
  name: string;
}

interface GenreInterface {
  name: string;
  id: number;
}

interface SpokenLanguagesInterface {
  english_name: string;
}

interface NetworkInterface {
  id: number;
  name: string;
}

interface ProductionCompaniesInterface {
  id: number;
  name: string;
}

interface SeasonsInterface {
  air_date: string;
  name: string;
  episode_count: string;
  id: string;
  poster_path: string;
  season_number: number;
}

interface MediaDetailsInterface {
  genres: GenreInterface[];
  id: number;
  overview: string;
  name: string;
  title: string;
  vote_average: number;
  poster_path: string;
  first_air_date: string;
  release_date: string;
  episode_run_time: [];
  number_of_episodes: number;
  number_of_seasons: number;
  spoken_languages: SpokenLanguagesInterface;
  status: string;
  networks: NetworkInterface[];
  seasons: SeasonsInterface[];
  runtime: string;
  production_companies: ProductionCompaniesInterface[];
  profile_path: string;
  logo_path: string;
  media_type: string;
}

interface MediaDetailsProps {
  mediaType: "tv" | "movie";
  currentMedia: MediaDetailsInterface;
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

interface EpisodesInterface {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  still_path: string;
}

interface SeasonDetailsInterface {
  id: number;
  air_date: number;
  episodes: EpisodesInterface[];
  name: string;
  poster_path: string;
  season_number: number;
}

interface ShowDetailsInterface {
  name: string;
  id: number;
}

interface MediaDataInterface {
  total_pages: number;
}

export type {
  ActorCastInterface,
  ActorCreditsInterface,
  ActorCrewInterface,
  ActorDetailsInterface,
  ProductionCompaniesInterface,
  MediaDetailsInterface,
  MediaDetailsProps,
  JobsInterface,
  CrewInterface,
  RolesInterface,
  CastInterface,
  MediaCreditsInterface,
  GenreInterface,
  SeasonDetailsInterface,
  EpisodesInterface,
  ShowDetailsInterface,
  MediaDataInterface,
};
