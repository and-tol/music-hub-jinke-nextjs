import { isObjEmpty } from './isObjEmpty';

/**
 * Get number fo page location for request to server per page number.
 * Used with getLocation of ReactRouter (const location = useLocation();)
 * @param {Object} location of route
 * @returns {Number} current location page number
 */
export const getCurrentLocationForFetch = (location = {}) => {
  if (!isObjEmpty(location)) {
    const index = location.pathname.lastIndexOf('/') + 1;
    const currentLocation = Number(
      location.pathname.slice(index, location.pathname.length)
    );

    if (isNaN(currentLocation)) {
      return 1;
    } else {
      return currentLocation;
    }
  } else {
    return 1;
  }
};
