import { FC, ReactElement } from 'react';

type PropsType = {
  content: ReactElement;
  children?: never;
};

export const AppView: FC<PropsType> = ({ content }): ReactElement => {
  return <>{content}</>;
};
