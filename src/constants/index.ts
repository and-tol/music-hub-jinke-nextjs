import {
  CardDataType,
  ConfigMenuType,
  FetchingDataType,
  FilterType,
  GenreDataType,
} from '../types';

export const configMenu: ConfigMenuType = Object.freeze({
  tops: { text: 'Top 5', count: 5, id: 'Top 5' },
  pageSize: 10,
  scoreLimit: {
    artist: '8',
    album: '7',
    track: '7',
    genre: '7',
    playlist: '7',
  },
  menu: {
    toArtists: 'artists',
    toAlbums: 'albums',
    toGenres: 'genres',
  },
  HeaderMenu: [
    {
      toHash: '',
      to: '/',
      id: '/',
      text: '',
    },
    {
      toHash: 'tops-top',
      to: 'tops-top',
      id: 'nav-tops',
      text: 'Tops',
    },
    {
      toHash: '',
      to: 'artists',
      id: 'nav-artists',
      text: 'Artists',
    },
    {
      toHash: '',
      to: 'albums',
      id: 'nav-albums',
      text: 'Albums',
    },
    {
      toHash: '',
      to: 'genres',
      id: 'nav-genres',
      text: 'Genres',
    },
    {
      toHash: 'day-playlist',
      to: '',
      id: 'nav-playlist',
      text: 'Day playlist',
    },
  ],
  homePage: {
    topsOfTheTopsMenu: [
      {
        toHash: '',
        id: 'all',
        text: 'All',
      },
      {
        toHash: '',
        id: 'new-releases',
        text: 'New Releases',
      },
      {
        toHash: '',
        id: 'chart',
        text: 'Chart',
      },
      {
        toHash: '',
        id: 'moods-and-genres',
        text: 'Moods and Genres',
      },
    ],
    topAlbumsMenu: {
      tops: 'Top 5',
      electronic: 'Electronic',
      house: 'House',
      'hip-hop': 'Hip Hop',
      jazz: 'Jazz',
      pop: 'Pop',
      rock: 'Rock',
      'heavy-metal': 'Heavy metal',
      'punk-rock': 'Punk rock',
    },
    topArtistsMenu: {
      tops: 'Top 5',
      electronic: 'Electronic',
      house: 'House',
      'hip-hop': 'Hip Hop',
      jazz: 'Jazz',
      pop: 'Pop',
      rock: 'Rock',
      'heavy-metal': 'Heavy metal',
      'punk-rock': 'Punk rock',
    },
  },
  artistsPage: {
    topMenu: [
      {
        toHash: '',
        id: 'all',
        text: 'All',
      },
      {
        toHash: '',
        id: 'new-releases',
        text: 'New Releases',
      },
      {
        toHash: '',
        id: 'chart',
        text: 'Chart',
      },
      {
        toHash: '',
        id: 'moods-and-genres',
        text: 'Moods and Genres',
      },
    ],
  },
  albumsPage: {
    topMenu: [
      {
        toHash: '',
        id: 'new',
        text: 'New',
      },
      {
        toHash: '',
        id: 'popular',
        text: 'Popular',
      },
    ],
  },
  artistPage: {
    menu: [
      {
        toHash: '',
        to: 'home',
        slug: 'home',
        text: 'Home',
      },
      {
        toHash: '',
        to: 'tracks',
        slug: 'tracks',
        text: 'Tracks',
      },
      {
        toHash: '',
        to: 'albums',
        slug: 'albums',
        text: 'Albums',
      },
      {
        toHash: '',
        to: 'info',
        slug: 'info',
        text: 'Info',
      },
    ],
    tracksSection: {
      perPage: 20,
    },
  },
  generatePlaylistPage: {
    pageSize: 4,
  },
  playlists: {
    showItems: 5,
  },
  genres: {
    count: 30,
  },
  searchedPage: {
    maxCountOfTracks: 6,
    pageSize: 10,
  },
});

/**
 * getPerPage - parameter show how many objects in array of response
 * getPage - parameter for fetching pay page
 */
export const fetchingData: FetchingDataType = Object.freeze({
  common: {
    getPerPage: 100,
    getPage: 10,
    fetchingType: {
      getPerPage: 'getPerPage',
      getPage: 'getPage',
      get: 'get',
    },
  },
  generatePlaylistPage: {
    pageSize: 4,
  },
  genres: {
    fetchName: 'genres',
    getPerPage: 100,
    pageSize: 10,
    fetchingType: {
      getPerPage: 'getPerPage',
      getPage: 'getPage',
    },
  },
  artists: {
    fetchName: 'artists',
    getPerPage: 100,
    pageSize: 10,
    fetchingType: {
      getPerPage: 'getPerPage',
      getPage: 'getPage',
      getByFilter: 'getByFilter',
    },
  },
  albums: {
    fetchName: 'albums',
    getPerPage: 100,
    pageSize: 10,
    fetchingType: {
      getPerPage: 'getPerPage',
      getPage: 'getPage',
      getById: 'getById',
      getByFilter: 'getByFilter',
    },
  },
  genre: {
    pageSize: 10,
  },
  artistPage: {
    tracksSection: {
      pageSize: 20,
    },
  },
  tracks: {
    fetchName: 'tracks',
    getPerPage: 100,
    pageSize: 10,
    fetchingType: {
      get: 'get',
      getPerPage: 'getPerPage',
      getPage: 'getPage',
      getLoved: 'getLoved',
      changeLoved: 'changeLoved',
      getByFilter: 'getByFilter',
    },
  },
  playlists: {
    fetchName: 'playlists',
    getPerPage: 100,
    pageSize: 10,
    fetchingType: {
      getPerPage: 'getPerPage',
      getPage: 'getPage',
      add: 'add',
      change: 'change',
      delete: 'delete',
      addTrack: 'addTrack',
      deleteTrack: 'deleteTrack',
    },
  },
});

export const filters: FilterType = {
  new: 'new',
  popular: 'popular',
};

export const genresData: GenreDataType[] = [
  {
    title: '😉 Under the mood',
    image: 'g-img01.png',
    slug: 'under-the-mood',
  },
  {
    title: 'For classes',
    image: 'g-img02.png',
    slug: 'for-classes',
  },
  {
    title: 'Pop',
    image: 'g-img03.png',
    slug: 'pop',
  },
  {
    title: 'Rock',
    image: 'g-img04.png',
    slug: 'rock',
  },
  {
    title: 'Indie Metal',
    image: 'g-img05.png',
    slug: 'indie-metal',
  },
  {
    title: 'Alternative',
    image: 'g-img06.png',
    slug: 'alternative',
  },
  {
    title: 'Electronics',
    image: 'g-img07.png',
    slug: 'electronics',
  },
  {
    title: 'Dance',
    image: 'g-img08.png',
    slug: 'dance',
  },
  {
    title: 'Rap and hip-hop',
    image: 'g-img09.png',
    slug: 'rap-and-hip-hop',
  },
  {
    title: 'R&B',
    image: 'g-img10.png',
    slug: 'r&b',
  },
  {
    title: 'Jazz',
    image: 'g-img11.png',
    slug: 'jazz',
  },
  {
    title: 'Blues',
    image: 'g-img12.png',
    slug: 'blues',
  },
  {
    title: 'Reggae',
    image: 'g-img01.png',
    slug: 'reggae',
  },
  {
    title: 'Ska',
    image: 'g-img02.png',
    slug: 'ska',
  },
  {
    title: 'Punk',
    image: 'g-img03.png',
    slug: 'punk',
  },
  {
    title: 'Classic',
    image: 'g-img04.png',
    slug: 'classic',
  },
  {
    title: 'Estrada',
    image: 'g-img05.png',
    slug: 'estrada',
  },
  {
    title: 'Chanson',
    image: 'g-img06.png',
    slug: 'chanson',
  },
  {
    title: 'Country',
    image: 'g-img07.png',
    slug: 'country',
  },
  {
    title: "Author's track",
    image: 'g-img08.png',
    slug: 'author-s-track',
  },
  {
    title: 'Light music',
    image: 'g-img09.png',
    slug: 'light-music',
  },
  {
    title: '🎬 Soundtracks',
    image: 'g-img10.png',
    slug: 'soundtracks',
  },
  {
    title: 'Music of the World',
    image: 'g-img11.png',
    slug: 'music-of-the-world',
  },
  {
    title: 'Childish',
    image: 'g-img12.png',
    slug: 'childish',
  },
  {
    title: 'The sounds of nature and the noise of the city',
    image: 'g-img01.png',
    slug: 'sounds-of-nature',
  },
  {
    title: 'House',
    image: 'g-img02.png',
    slug: 'house',
  },
  {
    title: 'Heavy metal',
    image: 'g-img03.png',
    slug: 'heavy-metal',
  },
  {
    title: 'Relax',
    image: 'g-img04.png',
    slug: 'relax',
  },
  {
    title: 'Study',
    image: 'g-img05.png',
    slug: 'study',
  },
  {
    title: 'Cristmas',
    image: 'g-img06.png',
    slug: 'cristmas',
  },
  {
    title: 'Car music',
    image: 'g-img07.png',
    slug: 'car-music',
  },
];

export const cardsData: CardDataType[] = [
  {
    id: '01',
    img: 'img01.png',
    faceImg: 'face1.png',
    title: 'K BAND live record',
    subtitle: '1999 Amsterdam',
  },
  {
    id: '02',
    img: 'img02.png',
    faceImg: 'face2.png',
    title: 'Vocal Chillout for the Soul',
    subtitle: 'Various artists',
  },
  {
    id: '03',
    img: 'img03.png',
    faceImg: 'face3.png',
    title: '90`s HITS',
    subtitle: 'Drive music, dinamic nostalgie',
  },
  {
    id: '04',
    img: 'img04.png',
    faceImg: 'face4.png',
    title: 'Sweet Escape',
    subtitle: 'Meditation Relax music',
  },
  {
    id: '05',
    img: 'img05.png',
    faceImg: 'face5.png',
    title: 'Sweet Escape',
    subtitle: 'Meditation Relax music',
  },
  {
    id: '06',
    img: 'img05.png',
    faceImg: null,
    title: 'China town beats',
    subtitle: 'Alternative Tehno',
  },
  {
    id: '07',
    img: 'img05.png',
    faceImg: null,
    title: 'China town beats',
    subtitle: 'Alternative Tehno',
  },
];
