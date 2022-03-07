export const filtersByGenre = (arrData = [], genre = null) => {
  return arrData?.filter(data =>
    data?.musicHub?.genres?.find(g => g?.slug === genre)
  );
};
