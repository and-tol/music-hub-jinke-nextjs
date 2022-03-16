import type { NextPage } from 'next';
import { ReactElement } from 'react';
import { AppView } from '../views/app';
// Components
import { TopsSectionComponent } from '../components/homePage/topSection';
// import {
  // ArtistsSection,
  // TopAlbumsSection,
  // SearchSection,
  // GenresAndPlaylistsSection,
// } from './components';

type PropsType = {
  children?: never;
};

const HomePage: NextPage<PropsType> = (): ReactElement => {
  return (
    <>
      <AppView content={<TopsSectionComponent />} />
    </>
  );
};

export default HomePage;

// <ArtistsSection />
// <TopAlbumsSection />
// <SearchSection />
// <GenresAndPlaylistsSection />}
