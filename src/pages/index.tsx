import type { NextPage } from 'next';
import { HeaderComponent } from '../components/common/header';
import { AppView } from '../views/app';

const HomePage: NextPage = () => {
  return (
    <>
      <AppView
        header={<HeaderComponent />}
        content={<div>Content</div>}
      />
    </>
  );
};

export default HomePage;
