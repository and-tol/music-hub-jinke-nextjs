export const filterBykey = (arrData = [], key = '', param = 0) => {
  return arrData?.filter(data => data?.musicHub[key] > param);
};
