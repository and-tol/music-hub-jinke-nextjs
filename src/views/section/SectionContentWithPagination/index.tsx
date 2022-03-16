// Core
import cls from 'classnames';
import { FC, ReactElement, ReactNode } from 'react';

import { configMenu } from '../../../constants';

// import { useContentToPagination } from 'src/shared/hooks/useContentToPagination';
// import { Pagination, PaginationWithRoute } from '../Pagination';

import { IAlbumData } from '../../../types/data';

type PropsType = {
  cardsData: IAlbumData[];
  Component: (cardData: IAlbumData) => ReactNode;
  hasRouting?: boolean;
  fetchName: string;
  page: string | number;
  totalItemsCount: string | number;
  isSubSection?: boolean;
  fetchingType: string;
  parameter: string | number;
};

export const SectionContentWithPaginationView: FC<PropsType> = ({
  hasRouting=false,
  cardsData = [],
  Component,
  fetchName,
  page = null,
  totalItemsCount,
  isSubSection = false,
  // setCurrentPage,// !
}): ReactElement => {
  // const {
  //   setCurrentPage,
  //   totalPages,
  //   currentData: currentCards,
  // } = useContentToPagination({
  //   totalItemsCount: totalItemsCount,
  //   contentData: cardsData,
  //   pageSize: configMenu.pageSize,
  // });

  const currentCards: any[]=[];
  // const isSubSection = false;

  return (
    <section className={cls('section', isSubSection && 'pt-0')}>
      <div className='container'>
        <div className='columns is-multiline'>
          {
            cardsData &&
            hasRouting &&
            cardsData?.map(cardData => Component(cardData))
          }
          {cardsData &&
            !hasRouting &&
            currentCards?.map(cardData => Component(cardData))}
        </div>
        {/* {hasRouting ? (
          <PaginationWithRoute
            fetchName={fetchName}
            page={typeof page === 'number' ? page : Number(page)}
            totalItemsCount={totalItemsCount}
          />
        ) : (
          <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
        )} */}
      </div>
    </section>
  );
};
