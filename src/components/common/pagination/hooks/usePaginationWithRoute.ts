import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

type ReturnedType = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  arrOfCurrentButtons: (string | number)[];
  numberOfPages: number[];
  totalPages: number;
};

type PropsType = {
  page: number;
  totalItemsCount: number | string;
};

export const usePaginationWithRoute = ({
  page = 1,
  totalItemsCount,
}: PropsType): ReturnedType => {
  const [currentPage, setCurrentPage] = useState<number>(Number(page));
  const [pageSize] = useState<number>(10);
  const [arrOfCurrentButtons, setArrOfCurrentButtons] = useState<
    (string | number)[]
  >([]);
  const [total] = useState<number>(Number(totalItemsCount));

  const totalPages = Math.ceil(total / pageSize);

  let numberOfPages = useMemo((): number[] => {
    let numberOfPages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      // for (let i = 1; i <= 6; i++) {
      numberOfPages.push(i);
    }
    return numberOfPages;
  }, [totalPages]);

  useEffect(() => {
    let tempNumberOfPages: (string | number)[] = [];
    [...numberOfPages];

    let dotsInitial: string = '...';
    let dotsLeft: string = '... ';
    let dotsRight: string = ' ...';

    if (numberOfPages.length < 6) {
      tempNumberOfPages = [...numberOfPages];
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentPage === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {
      // from 5 to 8 -> 10-2
      const sliced1 = numberOfPages.slice(currentPage - 2, currentPage); // sliced1 (5-2) -> [4,5]
      const sliced2 = numberOfPages.slice(currentPage, currentPage + 1); // sliced2 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1,...,4,5,6,'...',10]
    } else if (currentPage > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsRight, ...sliced];

      /**
       * actions to click on dots
       */
    } else if (String(currentPage) === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentPage(
        // arrOfCurrentButtons =>
        //   arrOfCurrentButtons[arrOfCurrentButtons.length - 3] + 1
        Number(arrOfCurrentButtons[arrOfCurrentButtons.length - 3]) + 1
      );
    } else if (String(currentPage) === dotsRight) {
      // setCurrentPage(() => Number(arrOfCurrentButtons[2]) + 2);
      setCurrentPage(Number(arrOfCurrentButtons[2]) + 2);
    } else if (String(currentPage) === dotsLeft) {
      setCurrentPage(Number(arrOfCurrentButtons[3]) - 2);
    }
    setArrOfCurrentButtons(tempNumberOfPages);
    setCurrentPage(currentPage);
  }, [currentPage, numberOfPages]);

  return {
    currentPage,
    setCurrentPage,
    arrOfCurrentButtons,
    numberOfPages,
    totalPages,
  };
};
