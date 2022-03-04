import { GetStaticProps, NextPage } from 'next';
import { ReactElement } from 'react';
import SEOComponent from '../components/common/seo';
import { AppView } from '../views/app';

type PropsType = {
  children?: never;
};

const ArtistsPage: NextPage<PropsType> = (): ReactElement => {
  return (
    <>
      <SEOComponent pageTitle='Artists' />
      <AppView content={<div>Artists Page</div>} />
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

export default ArtistsPage;
