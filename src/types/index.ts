type PageMenuType = {
  toHash: string;
  to: string;
  id: string;
  slug?: string;
  text: string;
};

export type ConfigMenuType = {
  tops: { text: string; count: number; id: string };
  pageSize: number;
  scoreLimit: {
    artist: string;
    album: string;
    track: string;
    genre: string;
    playlist: string;
  };
  menu: {
    toArtists: string;
    toAlbums: string;
    toGenres: string;
  };
  HeaderMenu: PageMenuType[];
  homePage: { topsOfTheTopsMenu: Omit<PageMenuType, 'to'>[] };
  artistsPage: { topMenu: Omit<PageMenuType, 'to'>[] };
  albumsPage: { topMenu: Omit<PageMenuType, 'to'>[] };
  artistPage: { menu: PageMenuType[] };
  generatePlaylistPage: { pageSize: number };
  playlists: { showItems: number };
  genres: { count: number };
  searchedPage: { maxCountOfTracks: number; pageSize: number };
};

type FetchingType = {
  get?: string;
  getPerPage?: number;
  getPage?: number;
  pageSize?: number;
  add?: string;
  change?: string;
  delete?: string;
  addTrack?: string;
  deleteTrack?: string;
  getByFilter?: string;
  getById?: string;
  getLoved?: string;
  changeLoved?: string;
};
type PartialFetchingType = Partial<FetchingType>;
export type FetchingDataType = {
  common: PartialFetchingType;
  generatePlaylistPage: PartialFetchingType;
  genres: PartialFetchingType;
  artists: PartialFetchingType;
  albums: PartialFetchingType;
  genre: PartialFetchingType;
  artistPage: { tracksSection: PartialFetchingType };
  tracks: PartialFetchingType;
  playlists: PartialFetchingType;
};

export type FilterType = {
  [key: string]: string;
};
export type GenreDataType = {
  title: string;
  image: string;
  slug: string;
};
export type CardDataType = {
  id: string;
  img: string;
  faceImg: string;
  title: string;
  subtitle: string;
};
