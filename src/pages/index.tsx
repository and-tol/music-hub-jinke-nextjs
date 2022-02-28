import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AppView } from '../views/app';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Music Hub</title>
        <meta name='description' content='Hub for your loved music' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <AppView
        header={<div>Header</div>}
        content={<div>Content</div>}
      />
    </>
  );
};

export default HomePage;
