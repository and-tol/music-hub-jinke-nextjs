import { GetStaticProps, NextPage } from 'next';
import { ReactElement } from 'react';
import { HeaderComponent } from '../components/common/header';
import { AppView } from '../views/app';

type PropsType = {
  children?: never;
};

const GenresPage: NextPage<PropsType> = (): ReactElement => {
  return (
    <>
      <AppView header={<HeaderComponent />} content={<div>Genres Page</div>} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {
      data: null,
    },
  };
};

export default GenresPage;
