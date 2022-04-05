import { FC, ReactElement } from 'react';
import Link from 'next/link';

import styles from './CardArtistComponent.module.css';

import { IArtistCardData } from '../../../../types/data';

type PropsType = {
  children?: never;
  cardData: IArtistCardData;
};

export const CardArtistComponent: FC<PropsType> = ({
  cardData,
}): ReactElement => {
  const { id, name, short_description, artistImg } = cardData;

  return (
    <Link href={`/artist/${id}/home`}>
      <div className={styles.card}>
        <figure>
          <img
            className={styles.image}
            src={
              artistImg !== undefined
                ? `/images/${artistImg}`
                : '/images/dummi.png'
            }
            alt={name}
          />
        </figure>

        <div className={styles.cardContent}>
          {/* <div className='media-content'> */}
            <p className={styles.title}>{name}</p>
            <p className={styles.subtitle}>{short_description}</p>
          {/* </div> */}
        </div>
      </div>
    </Link>
  );
};
