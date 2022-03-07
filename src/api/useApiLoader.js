import { useQuery } from 'react-query';
import { fetchData } from './fetchData';

/**
 * Hook helps do GET request to server
 * @param {string} fetchName - assign name of request method in client api
 * @param {object} fetchingType
 * @param {string} parameter - additional parameter og request
 * @returns {object}
 */
export const useApiLoader = ({
  fetchName,
  fetchingType = '',
  parameter,
}) => {
  const { data, isError, error, isLoading } = useQuery(
    [fetchName, [fetchingType, parameter]],
    () => fetchData(fetchName, fetchingType, parameter)
  );
  const totalItemsCount = data?.length ?? 0;

  return {
    data,
    isError,
    error,
    isLoading,
    totalItemsCount,
  };
};
