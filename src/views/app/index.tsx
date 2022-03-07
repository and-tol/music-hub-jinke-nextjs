import { FC, ReactElement, ReactNode } from 'react';
import { HeaderComponent } from '../../components/common/header';

type PropsType = {
  content: ReactNode;
  children?: never;
};

export const AppView: FC<PropsType> = ({ content }): ReactElement => {
  return (
    <div className='main-container is-relative h-100'>
      <div className='bg-spot bg-spot--purple'></div>
      <div className='bg-spot bg-spot--blue'></div>
      <HeaderComponent />
      <main className='main'>{content}</main>
    </div>
  );
};
