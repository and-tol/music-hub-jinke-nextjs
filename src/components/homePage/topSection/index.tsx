// Core
import { FC, ReactElement, useState } from 'react';
// Other
import { useApiLoader } from '../../../api';
import { configMenu, fetchingData } from '../../../constants';
// Elements
import {
  ErrorShowElement,
  LoaderElement,
  SectionHeaderWithTabs,
  SectionTitleElement,
} from '../../../elements';
// Components
import { SectionLayoutTemplate } from '../../../templates/sectionLayout';
import { CardAlbumComponent } from '../../common/cards/cardAlbum';
// Views
import { SectionContentWithPaginationView } from '../../../views/section/SectionContentWithPagination';

import { dataAlbums } from '../../../../data/dataAlbums';
import { IAlbumData } from '../../../types/data';

type PropsType = {
  children?: never;
};

export const TopsSectionComponent: FC<PropsType> = (): ReactElement => {
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

  const isLoading = false;
  const totalItemsCount = 3;

  //------

  // if (isError) {
  //   return <ErrorShowElement />;
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

      {isLoading ? (
        <LoaderElement />
      ) : (
        <SectionContentWithPaginationView
          cardsData={dataAlbums}
          Component={(data: IAlbumData) => (
            <CardAlbumComponent key={data.id} cardData={data} />
          )}
          totalItemsCount={totalItemsCount}
          fetchName='home'
          page='albums'
          fetchingType='getPerPage'
          parameter={fetchingData.common.getPerPage}
        />
      )}
    </SectionLayoutTemplate>
  );
};
