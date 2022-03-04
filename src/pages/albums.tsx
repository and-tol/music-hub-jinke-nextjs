import { GetStaticProps, NextPage } from 'next';
import { ReactElement } from 'react';
import SEOComponent from '../components/common/seo';
import { AppView } from '../views/app';

type PropsType = {
  children?: never;
};

const AlbumsPage: NextPage<PropsType> = (): ReactElement => {
  return (
    <>
      <SEOComponent pageTitle='Albums' />
      <AppView content={<div>Albums Page</div>} />
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

export default AlbumsPage;
