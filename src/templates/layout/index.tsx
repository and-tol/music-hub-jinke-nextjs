import { FC, ReactElement } from 'react';

type PropsType = { children: ReactElement[] };

export const LayoutTemplate: FC<PropsType> = ({ children }): ReactElement => {
  return (
    <div className='main-container is-relative h-100'>
      <div className='bg-spot bg-spot--purple'></div>
      <div className='bg-spot bg-spot--blue'></div>
      {children}
    </div>
  );
};
