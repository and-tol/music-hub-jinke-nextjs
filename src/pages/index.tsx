import type { NextPage } from 'next';
import { AppView } from '../views/app';

const HomePage: NextPage = () => {
  return (
    <>
      <AppView
        content={<div>Content</div>}
      />
    </>
  );
};

export default HomePage;
