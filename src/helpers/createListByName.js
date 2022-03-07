export const createListByName = obj =>
  Object.values(obj).map(({ name }) => name);
