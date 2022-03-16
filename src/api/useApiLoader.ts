import { useQuery } from 'react-query';
import { fetchData } from './fetchData';

type ReturnedType = {
  data?: object;
  isError: boolean;
  error: unknown;
  isLoading: boolean;
  // FIXME
  // totalItemsCount: number;
};

type PropsType = {
  fetchName: string;
  fetchingType: string;
  parameter?: string;
};

/**
 * Hook helps do GET request to server
 * @param {string} fetchName - assign name of request method in client api
 * @param {string} fetchingType
 * @param {string} parameter - additional parameter og request
 * @returns {object}
 */
export const useApiLoader = ({
  fetchName,
  fetchingType = '',
  parameter,
}: PropsType): ReturnedType => {
  const { data, isError, error, isLoading } = useQuery(
    [fetchName, [fetchingType, parameter]],
    () => fetchData(fetchName, fetchingType, parameter)
  );

  // const totalItemsCount = data?.length ?? 0;

  return {
    data,
    isError,
    error,
    isLoading,
    // totalItemsCount,
  };
};
