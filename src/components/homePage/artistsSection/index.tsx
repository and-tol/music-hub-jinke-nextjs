import React, { FC, useState } from 'react';

import { useApiLoader } from '../../../api';
import { configMenu, fetchingData } from '../../../constants';

import { CardArtistComponent } from '../../../components';
import { SectionLayoutTemplate } from '../../../templates';
import {
  SectionContentWithPaginationView,
  SectionHeaderWithButtons,
} from '../../../views/section';
import { filtersByGenre } from '../../../helpers';
// Elements
import { SectionTitleElement } from '../../../elements';
import { ErrorShowElement, LoaderElement } from '../../../elements';

import {dataArtists as dataArtistsMook} from '../../../../data/dataArtists'
import {dataAlbums} from '../../../../data/dataAlbums'
import { IArtistCardData } from '../../../types/data';

type PropsType = {
  children?: never;
};

export const ArtistsSectionComponent: FC<PropsType> = () => {
  // TODO change filter to "Top 5"
  const [filter, setFilter] = useState<string>('all'); // initial "Top 5"
  const getCurrentButton = (filter: string): void => {
    setFilter(filter);
  };

  // const {
  //   data: dataArtists,
  //   isLoading: isLoadingArtistsSection,
  //   isError: isErrorArtistsSection,
  //   totalItemsCount,
  // } = useApiLoader({
  //   fetchName: fetchingData.artists.fetchName,
  //   fetchingType: fetchingData.artists.fetchingType.getByFilter,
  //   // fetchingType: fetchingData.artists.fetchingType.getPerPage,
  //   // parameter: fetchingData.artists.getPerPage,
  //   parameter: filter,
  // });

  // TODO
  // const [currentGenre, setCurrentGenre] = useState('');
  // const data = filtersByGenre(dataArtists, currentGenre?.toLowerCase());

  const isErrorArtistsSection = false;
  const isLoadingArtistsSection = false;
  const dataArtists: IArtistCardData[] = dataArtistsMook;
  const totalItemsCount = 15;

  // if (isErrorArtistsSection) {
  //   return <ErrorShowElement />;
  // }

  return (
    <SectionLayoutTemplate id='top-artists'>
      <SectionTitleElement title='Artists' />
      <SectionHeaderWithButtons
        id='top-artists-header'
        isCentered
        dataButtons={configMenu.homePage.topArtistsMenu}
        hasRightButton
        rightButtonText='View all Artists'
        goTo={configMenu.menu.toArtists}
        getCurrentButton={getCurrentButton}
      />
      {isErrorArtistsSection && <ErrorShowElement />}
      {isLoadingArtistsSection && <LoaderElement />}
      {dataArtists && (
        <SectionContentWithPaginationView
          cardsData={dataArtists}
          Component={(data: any) => (
            <CardArtistComponent key={data.id} cardData={data} />
          )}
          totalItemsCount={totalItemsCount}
          fetchName='home'
          page='artists'
          fetchingType='getPerPage'
          parameter={fetchingData.common.getPerPage}
        />
      )}
    </SectionLayoutTemplate>
  );
};
