import { FC, ReactElement, useState } from 'react';

import { useApiLoader } from '../../api';
import { configMenu, fetchingData } from '../../constants';

// import { CardAlbum } from 'src/shared/components/Cards';
import { ErrorShow } from 'src/shared/components/ErrorShow';
import { SectionLayout } from 'src/shared/components/Layouts';
// import { Loader } from 'src/shared/components/Loader';
import { SectionHeaderWithTabs, SectionTitleElement } from '../../elements';
import { SectionLayoutTemplate } from '../../templates/sectionLayout';
// import {
//   SectionContentWithPagination,
//   SectionHeaderWithTabs,
// } from 'src/shared/components/Section';

type PropsType = {
  children?: never;
}

export const TopsSectionComponent: FC<PropsType> = (): ReactElement=> {
  // const {
  //   data: dataAlbums,
  //   isLoading,
  //   isError,
  //   totalItemsCount,
  // } = useApiLoader({
  //   fetchName: fetchingData.albums.fetchName,
  //   fetchingType: fetchingData.albums.fetchingType.getPerPage,
  //   parameter: fetchingData.getPerPage,
  // });

  // TODO filter on the server
  const [filter, setFilter] = useState('all');

  // const {
  //   data: dataAlbums,
  //   isLoading,
  //   isError,
  //   totalItemsCount,
  // } = useApiLoader({
  //   fetchName: fetchingData.albums.fetchName,
  //   fetchingType: fetchingData.albums.fetchingType.getByFilter,
  //   parameter: filter,
  // });

  //------

  // if (isError) {
  //   return <ErrorShow />;
  // }

  return (
    <SectionLayoutTemplate id='tops'>
      <SectionTitleElement title='Top of the tops' />

      <SectionHeaderWithTabs
        menu={configMenu.homePage.topsOfTheTopsMenu}
        isRightTab={true}
        active='all'
        setFilter={setFilter}
      />

      {/* {isLoading ? (
        <Loader />
      ) : (
        <SectionContentWithPagination
          cardsData={dataAlbums ?? []}
          Component={data => <CardAlbum key={data.id} cardData={data} />}
          totalItemsCount={totalItemsCount}
          fetchName='home'
          page='albums'
          fetchingType='getPerPage'
          parameter={fetchingData.getPerPage}
        />
      )} */}
    </SectionLayoutTemplate>
  );
};
