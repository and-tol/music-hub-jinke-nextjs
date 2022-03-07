/**
 * Function that add track / tracks into queue of playing
 * @param {object || array} data - info of track
 * @param {method} setter - add track / tracks into queue of playing
 */
export const addToQueue = (data, setter) => {
  let tracks = [data];

  if (Array.isArray(data?.playlisttracks)) {
    tracks = data?.playlisttracks;
  }

  // setParams(params => ({
  setter(params => ({
    ...params,
    clearPriorAudioLists: false,
    audioLists: [...params.audioLists, ...tracks],
  }));
};
