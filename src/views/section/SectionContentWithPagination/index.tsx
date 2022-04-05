// Core
import cls from 'classnames';
import { FC, ReactElement, ReactNode } from 'react';
// import { useContentToPagination } from 'src/shared/hooks/useContentToPagination';
// import { Pagination, PaginationWithRoute } from '../Pagination';
import { IAlbumData, IArtistCardData } from '../../../types/data';

type PropsType = {
  cardsData: IAlbumData[] | IArtistCardData[];
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
  cardsData = [],
  Component,
  fetchName,
  page = null,
  totalItemsCount,
  isSubSection = false,
  hasRouting = true,
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

  const currentCards: any[] = [];

  return (
    <section className={cls('section', isSubSection && 'pt-0')}>
      <div className='cardContainer '>
        {cardsData &&
          hasRouting &&
          cardsData?.map(cardData => Component(cardData))}
        {cardsData &&
          !hasRouting &&
          currentCards?.map(cardData => Component(cardData))}

        {/* {hasRouting ? (
          <PaginationWithRouteComponent
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
