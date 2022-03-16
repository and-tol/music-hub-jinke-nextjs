import { FC, ReactElement } from 'react';
// Style
import styles from './errorShow.module.css'

type PropsType = {
  children?: never;
};

export const ErrorShowElement: FC<PropsType> = (): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.errorText}>
          Data not available
        </p>
      </div>
      <div className='container is-centered'>
        <p className='is-size-4 has-text-centered is-uppercase p-4 has-text-warning-dark has-background-warning-light'>
          Data not available
        </p>
      </div>
    </>
  );
};
