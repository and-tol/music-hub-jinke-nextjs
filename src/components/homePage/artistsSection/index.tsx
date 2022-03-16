import React, { useState } from 'react';

import { useApiLoader } from '../../../api';
import { configMenu, fetchingData } from '../../../constants/index';

import { CardArtist } from 'src/shared/components/Cards';
import { SectionLayout } from 'src/shared/components/Layouts';
import { Loader } from 'src/shared/components/Loader/Loader';
import {
  SectionContentWithPagination,
  SectionHeaderWithButtons,
  SectionTitle,
} from 'src/shared/components/Section';
import { filtersByGenre } from 'src/shared/helpers/fitersByGenre';
// Element
import {  ErrorShowElement } from '../../../elements/errorShow';
import { LoaderElement } from '../../../elements/loader';

export const ArtistsSection = () => {
  // TODO change filter to "Top 5"
  const [filter, setFilter] = useState('all'); // initial "Top 5"
  const getCurrentButton = filter => {
    setFilter(filter);
  };

  const {
    data: dataArtists,
    isLoading: isLoadingArtistsSection,
    isError: isErrorArtistsSection,
    totalItemsCount,
  } = useApiLoader({
    fetchName: fetchingData.artists.fetchName,
    fetchingType: fetchingData.artists.fetchingType.getByFilter,
    // fetchingType: fetchingData.artists.fetchingType.getPerPage,
    // parameter: fetchingData.artists.getPerPage,
    parameter: filter,
  });

  // TODO
  // const [currentGenre, setCurrentGenre] = useState('');
  // const data = filtersByGenre(dataArtists, currentGenre?.toLowerCase());

  if (isErrorArtistsSection) {
    return <ErrorShowElement />;
  }

  return (
    <SectionLayout id='top-artists'>
      <SectionTitle title='Artists' />
      <SectionHeaderWithButtons
        id='top-artists-header'
        isCentered
        dataButtons={configMenu.homePage.topArtistsMenu}
        hasRightButton
        rightButtonText='View all Artists'
        goTo={configMenu.menu.toArtists}
        getCurrentButton={getCurrentButton}
      />
      {isLoadingArtistsSection ? (
        <LoaderElement />
      ) : (
        <SectionContentWithPagination
          cardsData={dataArtists}
          Component={data => <CardArtist key={data.id} cardData={data} />}
          totalItemsCount={totalItemsCount}
          fetchName='home'
          page='artists'
          fetchingType='getPerPage'
          parameter={fetchingData.getPerPage}
        />
      )}
    </SectionLayout>
  );
};
