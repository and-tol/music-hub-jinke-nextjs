export const fromObjectToString = (obj: any): string | null => {
  if (Array.isArray(obj)) {
    if (obj.length > 1) {
      return obj
        ?.reduce((prev, curr) => (prev += `${curr?.name}, `), '')
        .trim()
        .slice(0, -1);
    } else if (obj.length === 1) {
      return obj[0];
    } else {
      return null;
    }
  }

  if (typeof obj === 'object' && obj !== null) {
    let arr: string[] | null = Object.values(obj);
    return (
      arr
        // ?.reduce((prev, curr) => (prev += `${curr?.name}, `), '')
        ?.reduce((prev, curr) => (prev += `${curr}, `), '')
        .trim()
        .slice(0, -1)
    );
  }

  return null;
};

export const fromObjectToLinks = (obj: any): string => {
  if (Array.isArray(obj)) {
    return obj
      ?.reduce((prev, curr) => (prev += `${curr?.name}, `), '')
      .trim()
      .slice(0, -1);
  }

  if (typeof obj === 'object' && obj !== null) {
    const arr: string[] = Object.values(obj);
    return arr
      ?.reduce((prev, curr) => (prev += `${curr}, `), '')
      .trim()
      .slice(0, -1);
  }

  return '/';
};
