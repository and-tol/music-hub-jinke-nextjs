import { api } from './api'

/**
 * Function of GET fetching
 * @param {string} fetchName - assign name of request method in client api
 * @param {string} fetchingType - name of method in api
 * @param {string or number} parameter - parametr of request
 * @returns {object or array} data
 */
export async function fetchData(fetchName, fetchingType, parameter = '') {
  const data = await api[fetchName][fetchingType](parameter);
  return data;
}
