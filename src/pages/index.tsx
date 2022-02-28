import type { NextPage } from 'next';
import { AppView } from '../views/app';

const HomePage: NextPage = () => {
  return (
    <>
      <AppView
        header={<div>Header</div>}
        content={<div>Content</div>}
      />
    </>
  );
};

export default HomePage;
