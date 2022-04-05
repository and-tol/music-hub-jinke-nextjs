import type { GetServerSideProps, NextPage } from 'next';
import { ReactElement } from 'react';
import { AppView } from '../views/app';
// Components
import { TopsSectionComponent } from '../components/homePage/topSection';
import { api } from '../api';
import { IAlbumData } from '../types/data';
import { ArtistsSectionComponent } from '../components';
// import {
// ArtistsSection,
// TopAlbumsSection,
// SearchSection,
// GenresAndPlaylistsSection,
// } from './components';

type PropsType = {
  children?: never;
  topSectionData: IAlbumData[];
  topSectionStatus: number;
};

const HomePage: NextPage<PropsType> = ({
  topSectionData,
  topSectionStatus,
}): ReactElement => {
  return (
    <>
      <AppView>
        <TopsSectionComponent dataAlbums={topSectionData} />
        <ArtistsSectionComponent />
      </AppView>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { data: topSectionData, status: topSectionStatus } =
    await api.albums.getPerPage();

  return {
    props: { topSectionData, topSectionStatus },
  };
};

export default HomePage;

// <ArtistsSection />
// <TopAlbumsSection />
// <SearchSection />
// <GenresAndPlaylistsSection />}
