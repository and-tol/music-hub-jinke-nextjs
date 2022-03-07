export const filtersById = (arrData, id) => {
  if (!arrData) {
    console.error('No data in filtersById');
  }
  if (!id) {
    console.log('No id in filtersById');
  }
  return arrData?.filter(data => String(data?.id) === id)[0];
};
