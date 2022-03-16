import cls from 'classnames';
import { FC, ReactElement } from 'react';

import styles from './loaderElement.module.css';

type PropsType = {
  children?: never;
};

export const LoaderElement: FC<PropsType> = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles['svg-loader']}>
        <svg
          className={styles['svg-container']}
          height='100'
          width='100'
          viewBox='0 0 100 100'
        >
          <circle
            className={cls(styles['loader-svg'], styles.bg)}
            cx='50'
            cy='50'
            r='45'
          ></circle>
          <circle
            className={cls(styles['loader-svg'], styles.animate)}
            cx='50'
            cy='50'
            r='45'
          ></circle>
        </svg>
      </div>
    </div>
  );
};
