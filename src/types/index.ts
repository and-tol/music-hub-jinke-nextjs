export interface IPageTopMenuType {
  toHash: string;
  id: string;
  slug?: string;
  text: string;
}
export interface IPageMenuType extends IPageTopMenuType {
  to: string;
}

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
  HeaderMenu: IPageMenuType[];
  homePage: {
    topsOfTheTopsMenu: IPageTopMenuType[];
    topAlbumsMenu: {
      [key: string]: string;
    };
    topArtistsMenu: { [key: string]: string };
  };
  artistsPage: { topMenu: IPageTopMenuType[] };
  albumsPage: { topMenu: IPageTopMenuType[] };
  artistPage: { menu: Omit<IPageMenuType, 'id'>[] };
  generatePlaylistPage: { pageSize: number };
  playlists: { showItems: number };
  genres: { count: number };
  searchedPage: { maxCountOfTracks: number; pageSize: number };
};

type FetchingType = {
  fetchName: string;
  get?: string;
  getPerPage: number | string;
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
  fetchingType: FilterType;
};
type PartialFetchingType = Partial<FetchingType>;

type CommonFetchingType = {
  getPerPage: string | number;
  getPage: string | number;
  fetchingType: FilterType;
};

export type FetchingDataType = {
  common: CommonFetchingType;
  generatePlaylistPage: PartialFetchingType;
  genres: PartialFetchingType;
  artists: PartialFetchingType;
  albums: FetchingType;
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
