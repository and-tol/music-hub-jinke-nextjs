import { FC, ReactElement, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// FIXME
// import { useAlbumContext } from 'src/context/AlbumContext';
import { useApiLoader } from '../../../../api/useApiLoader';
import { fetchingData } from '../../../../constants';

import { placeholderImage } from '../../../../constants';
import { IAlbumData, IImages } from '../../../../types/data';
import { isObjEmpty } from '../../../../helpers/isObjEmpty';

import styles from './CardAlbumComponent.module.css';

type PropsType = {
  cardData: IAlbumData;
};

export const CardAlbumComponent: FC<PropsType> = ({
  cardData,
}): ReactElement => {
  if (!cardData) {
    console.error('No array data album in CardAlbumComponent');
  }

  let images: IImages = {};
  if (!!cardData && !!cardData.musicHub && !!cardData.musicHub.images) {
    images = cardData.musicHub.images;
  }

  // const { setAlbum } = useAlbumContext();

  const [albumId, setAlbumId] = useState<string>('');

  const { data: albumData } = useApiLoader({
    fetchName: fetchingData.albums.fetchName,
    fetchingType: fetchingData.albums.fetchingType.getById,
    parameter: albumId,
  });
  if (!albumData || isObjEmpty(albumData)) {
    console.log(
      'ERROR: No array data album in CardAlbumComponent: fetchingData.albums'
    );
  }

  const onCurrentAlbum = () => {
    // setAlbum(cardData ?? albumData);
    setAlbumId(cardData.id);
  };

  return (
    <>
      {(cardData || albumData) && (
        <Link href={`/album/${cardData.id}`}>
          <a className={styles.cardLink} onClick={onCurrentAlbum}>
            <div className={styles.cardSquare}>
              <div className={styles.cardImage}>
                <img
                  src={images?.thumb ?? placeholderImage}
                  alt={images?.thumb ? cardData?.name : ''}
                />
                {/* {cardData?.musicHub.images.faceImg && ( */}
                  <figure className={styles.avatar}>
                    <img
                      src={cardData?.musicHub.images.faceImg}
                      alt={
                        cardData?.musicHub.images.faceImg ? cardData?.name : ''
                      }
                    />
                  </figure>
                {/* )} */}
              </div>
              <div className='card-content p-4'>
                <div className='media'>
                  <div className='media-content'>
                    <p className='title is-6'>{cardData?.name}</p>
                    {cardData && (
                      <p className='subtitle'>{cardData.short_description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};
