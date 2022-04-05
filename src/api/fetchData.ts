import { api } from './api';

type PropsType = {
  fetchName: string; // assign name of request method in client api
  fetchingType: string; // name of method in api
  parameter?: string | number; // parametr of request
};

/**
 * Function of GET fetching
 * @returns {object or array} data
 */
export const fetchData = async ({
  fetchName,
  fetchingType,
  parameter = '',
}: PropsType): Promise<any> => {
  return api[fetchName][fetchingType](parameter);
};
