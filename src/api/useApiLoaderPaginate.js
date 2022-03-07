import { useQuery } from 'react-query';
import { fetchData } from './fetchData';

/**
 * Hook helps do GET request to server page by page
 * @param {object} param0
 * @param {string} fetchName - assign name of request method in client api
 * @param {string} parameter - additional parameter og request
 * @returns {object}
 */
export const useApiLoaderPaginate = ({
  fetchName,
  fetchingType = '',
  parameter = '',
}) => {
  const { data, isError, error, isLoading } = useQuery(
    [`${fetchName}: paginated`, [fetchingType, parameter]],
    () => fetchData(fetchName, fetchingType, parameter),
    {
      keepPreviousData: true,
    }
  );

  return {
    data: data?.result,
    isError,
    error,
    isLoading,
    totalItemsCount: data?.totalItemsCount,
  };
};
