import { fromObjectToString } from '../helpers/fromObjectToString';
import { FAKEAPI, MUSIC_HUB_REST_URL, WP } from './config';

/*
const totalItemsCount = await Number(response.headers.get('x-wp-total'));
*/
export const api = Object.freeze({
  genres: {
    getPerPage: async (per_page: number) => {
      const resp = await fetch(`${WP}/genres?per_page=${per_page}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error(
          'Something want wrong fetching genres: '
          // resp.json().message
        );
      }

      const result = await resp.json();

      return result;
    },
    getPage: async (page: string) => {
      const resp = await fetch(`${WP}/genres?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching genres');
      }

      const totalItemsCount = await resp.headers.get('X-total-count');
      const result = await resp.json();
      return result;
    },
    getByFilter: async ({
      filter,
      param,
    }: {
      filter: string;
      param: string;
    }) => {
      const resp = await fetch(`${WP}/genres?${filter}=${param}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching genres');
      }

      const result = await resp.json();
      return result;
    },
  },
  albums: {
    getPerPage: async (per_page = 1) => {
      const resp = await fetch(`${WP}/albums?per_page=${per_page}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching albums');
      }

      const result = await resp.json();

      return result;
    },
    getPage: async (page: string) => {
      const resp = await fetch(`${WP}/albums?page=${page}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching albums');
      }

      // const totalItemsCount = await resp.headers.get('X-total-count');
      const totalItemsCount = await resp.headers.get('x-wp-total');
      const result = await resp.json();

      return { result, totalItemsCount };
    },
    getById: async (albumId: string) => {
      // const resp = await fetch(`${WP}/albums/${id}`, {
      const resp = await fetch(`${FAKEAPI}/albums/${albumId}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching albums');
      }

      const result = await resp.json();

      return result;
    },
    getByFilter: async (param: string) => {
      //  const resp = await fetch(`${WP}/albums?filter=${filter}`, {
      const resp = await fetch(`${FAKEAPI}/albums?filter=${param}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching albums');
      }

      const result = await resp.json();

      return result;
    },
  },
  artists: {
    getPerPage: async (per_page: number = 1) => {
      const resp = await fetch(`${WP}/artists?per_page=${per_page}`, {
        // const resp = await fetch(`${MockAPI}/artists`, {
        method: 'GET',
      });
      if (!resp.ok) {
        throw new Error('Something want wrong fetching artists');
      }

      const result = await resp.json();

      return result;
    },
    getPage: async (page: number) => {
      const resp = await fetch(`${WP}/artists?page=${page}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching artists');
      }

      const result = await resp.json();

      return result;
    },
    getByFilter: async (param: string) => {
      // const resp = await fetch(`${WP}/artists?page=${filter}`, {
      const resp = await fetch(`${FAKEAPI}/artists?filter=${param}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching artists');
      }

      const result = await resp.json();

      return result;
    },
  },
  tracks: {
    getPerPage: async () => {
      const resp = await fetch(`${MUSIC_HUB_REST_URL}/tracks`, {
        // const resp = await fetch(`${FAKEAPI}/tracks`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching tracks');
      }

      const result = await resp.json();

      return result;
    },

    getPage: async (page: number = 0, pageSize: number = 10) => {
      // return fetch(`${MUSICHUB}/tracks/${page}`, {
      const resp = await fetch(
        `${MUSIC_HUB_REST_URL}/tracks?per_page=${page}`,
        {
          method: 'GET',
        }
      );

      if (!resp.ok) {
        throw new Error('Something want wrong fetching tracks');
      }

      const totalItemsCount = await resp.headers.get('X-total-count');
      const result = await resp.json();

      return { result, totalItemsCount };
    },
    getLoved: async () => {
      const resp = await fetch(`${MUSIC_HUB_REST_URL}/tracks/loved`, {
        method: 'GET',
      });
      const result = await resp.json();

      return result;
    },
    changeLoved: async ({
      trackId = '',
      payload,
    }: {
      trackId: string;
      payload: any;
    }) => {
      const resp = await fetch(`${FAKEAPI}/tracks/${trackId}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        throw new Error('Something want wrong change loved tracks');
      }

      const result = await resp.json();

      return result;
    },
    getByFilter: async (param: string) => {
      // return fetch(`${MUSICHUB}/tracks/${page}`, {
      const resp = await fetch(`${MUSIC_HUB_REST_URL}/tracks?filter=${param}`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong fetching track by filter');
      }

      const totalItemsCount = await resp.headers.get('x-wp-total');
      const result = await resp.json();

      return { result, totalItemsCount };
    },
  },
  playlists: {
    // FIXME
    // getPerPage: async per_page => {
    //   const resp = await fetch(`${WP}/genres?per_page=${per_page}`, {
    getPerPage: async () => {
      return null;
      const resp = await fetch(`${FAKEAPI}/playlists`, {
        method: 'GET',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong');
      }

      const result = await resp.json();

      return result;
    },
    getPage: async (playlistId: number) => {
      return null;
      const resp = await fetch(`${FAKEAPI}/playlists?id=${playlistId}`, {
        method: 'GET',
      });
      if (!resp.ok) {
        throw new Error('Something want wrong');
      }
      const result = await resp.json();

      return result;
    },
    add: async (playlist: string) => {
      return null;
      const resp = await fetch(`${FAKEAPI}/playlists`, {
        method: 'POST',
        body: JSON.stringify({
          // name: playlist.name,
          playlisttracks: [],
          // description: playlist.description,
        }),
      });

      if (!resp.ok) {
        throw new Error('Something want wrong');
      }

      const result = await resp.json();

      return result;
    },
    change: async ({
      playlistId,
      playlist,
    }: {
      playlistId: string;
      playlist: string;
    }) => {
      return null;
      const resp = await fetch(`${FAKEAPI}/playlists/${playlistId}`, {
        method: 'PUT',
        body: JSON.stringify(playlist),
      });

      console.log('change', resp);

      if (!resp.ok) {
        throw new Error('Something want wrong');
      }

      const result = await resp.json();

      return result;
    },
    deleteAll: async () => {
      return null;
      const resp = await fetch(`${FAKEAPI}/playlists`, {
        method: 'DELETE',
        // headers: { 'Content-type': 'application/json' },
        // 'Access-Control-Allow-Origin': '*',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong');
      }
      const result = await resp.json();

      return result;
    },
    delete: async (playlistId: number) => {
      return null;
      const resp = await fetch(`${FAKEAPI}/playlists/${playlistId}`, {
        method: 'DELETE',
        // headers: { 'Content-type': 'application/json' },
        // 'Access-Control-Allow-Origin': '*',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong');
      }
      const result = await resp.json();

      return result;
    },

    getTrack: async ({
      playlistId,
      trackId,
    }: {
      playlistId: string;
      trackId: string;
    }) => {
      return null;
      // return fetch(`${FAKEAPI}/playlists?name=${playlist}?tracks=${trackId}`, {
      const resp = await fetch(
        `${FAKEAPI}/playlists/${playlistId}/${trackId}`,
        {
          method: 'GET',
          // headers: {
          //   'Content-type': 'application/json',
          //   'Access-Control-Allow-Origin': '*',
          // },
        }
      );

      if (!resp.ok) {
        throw new Error('Something want wrong');
      }

      const result = await resp.json();

      return result;
    },
    addTrack: async ({
      playlistId,
      track,
    }: {
      playlistId: string;
      track: { artists: string };
    }) => {
      // return fetch(`${FAKEAPI}/playlists?name=${playlist}?tracks=${trackId}`, {

      console.log('playlistId, track >>>>', playlistId, track);

      const resp = await fetch(
        `${FAKEAPI}/playlists/${playlistId}/playlisttracks`,
        {
          method: 'POST',
          // headers: {
          //   'Content-type': 'application/json',
          //   'Access-Control-Allow-Origin': '*',
          // },
          body: JSON.stringify({
            ...track,
            singer: fromObjectToString(track?.artists),
          }),
        }
      );
      if (!resp.ok) {
        throw new Error('Something want wrong adding track');
      }

      const result = await resp.json();

      return result;
    },

    deleteTrack: async ({
      playlistId,
      trackId,
    }: {
      playlistId: string;
      trackId: string;
    }) => {
      const resp = await fetch(`${FAKEAPI}playlists/${playlistId}/${trackId}`, {
        method: 'DELETE',
        // headers: { 'Content-type': 'application/json' },
        // 'Access-Control-Allow-Origin': '*',
      });

      if (!resp.ok) {
        throw new Error('Something want wrong delete track');
      }
      const result = await resp.json();

      return result;
    },
  },
  // search only by tracks
  search: {
    get: async (payload: string) => {
      const resp = await fetch(`${MUSIC_HUB_REST_URL}/tracks?q=${payload}`, {
        method: 'GET',
        // headers: {
        //   'Content-type': 'application/json',
        //   'Access-Control-Allow-Origin': '*',
        // },
      });

      if (!resp.ok) {
        throw new Error('Something want wrong with search');
      }

      const result = await resp.json();

      return result;
    },
  },
});
