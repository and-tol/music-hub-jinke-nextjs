import { isObjEmpty } from './isObjEmpty';

/**
 * @param {Object} location of route
 * @returns {String} current location name
 */
export const getCurrentLocation = (location = {}) => {
  if (!isObjEmpty(location)) {
    const index = location.pathname.lastIndexOf('/') + 1;
    const currentLocation = location.pathname.slice(
      index,
      location.pathname.length
    );

    return currentLocation;
  } else {
    return '/';
  }
};
