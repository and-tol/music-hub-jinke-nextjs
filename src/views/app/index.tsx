import { FC, ReactElement } from 'react';
import { HeaderComponent } from '../../components/common/header';

type PropsType = {
  content: ReactElement;
  children?: never;
};

export const AppView: FC<PropsType> = ({ content }): ReactElement => {
  return (
    <div className='main-container is-relative h-100'>
      <div className='bg-spot bg-spot--purple'></div>
      <div className='bg-spot bg-spot--blue'></div>
      <HeaderComponent />
      {content}
    </div>
  );
};
