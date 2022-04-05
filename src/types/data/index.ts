export interface IAlbumData {
  id: string;
  name: string;
  short_description: string;
  slug: string;
  musicHub: IMusicHub;
}

export interface IMusicHub {
  label: string;
  release: string;
  release_format: string;
  review: string;
  mood: string;
  style: string;
  loved: string;
  score: string;
  score_votes: string;
  speed: string;
  genre: IGenre[];
  images: IImages;
  type: string;
}

export interface IGenre {
  id: string;
  name: string;
  slug: string;
}

export interface IImages {
  thumb?: string | null;
  thumb_hq?: string | null;
  thumb_back?: string | null;
  album_cd_art?: string | null;
  album_case?: string | null;
  album_face?: string | null;
  album_flat?: string | null;
  faceImg?: string;
  artistImg?: string;
}

export interface IArtistCardData {
  id: string;
  name: string;
  short_description: string;
  // musicHub: IMusicHub;
  artistImg?: string;
}
