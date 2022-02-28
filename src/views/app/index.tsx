import { FC, ReactElement } from 'react';

type PropsType = {
  header: ReactElement;
  content: ReactElement;
  children?: never;
};

export const AppView: FC<PropsType> = ({ header, content }): ReactElement => {
  return (
    <>
      {header}
      {content}
    </>
  );
};
