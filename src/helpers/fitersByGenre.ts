import { IGenre } from '../types/data';

export const filtersByGenre = (
  arrData: any[] = [],
  genre: string | null
): string[] => {
  return arrData?.filter(data =>
    data?.musicHub?.genres?.find((g: IGenre) => g.slug === genre)
  );
};
