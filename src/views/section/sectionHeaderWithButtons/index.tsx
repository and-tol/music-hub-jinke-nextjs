import { FC, ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import cls from 'classnames';

import { ButtonElement } from '../../../elements';
import { configMenu } from '../../../constants';

type PropsType = {
  id: string;
  isCentered: boolean;
  dataButtons: object;
  hasRightButton: boolean;
  rightButtonText: string;
  goTo: string;
  getCurrentButton: (slug: string) => void;
};

export const SectionHeaderWithButtons: FC<PropsType> = (
  props
): ReactElement => {
  const router = useRouter();
  const {
    id,
    isCentered = false,
    dataButtons,
    hasRightButton = false,
    rightButtonText,
    goTo,
    getCurrentButton,
  } = props;

  const buttonsArr = Object.entries(dataButtons);

  const [activeItem, setActiveItem] = useState<string>(
    configMenu.homePage.topArtistsMenu.tops
  );

  const handleButton = (slug: string, itemText: string) => {
    setActiveItem(itemText);
    getCurrentButton(slug);
  };

  const goToLocation = (location: string) => {
    router.push(`/${location}`);
  };

  return (
    <div id={id} className={cls('buttons', isCentered && 'is-centered')}>
      {buttonsArr?.map(([slug, itemText], i) => {
        return (
          <ButtonElement
            key={slug}
            text={itemText}
            onClick={() => handleButton(slug, itemText)}
            activeItem={activeItem}
          />
        );
      })}
      {hasRightButton && (
        <ButtonElement
          text={rightButtonText}
          onClick={() => goToLocation(goTo)}
          icon
          textColored
          className={isCentered ? '' : 'mr-auto'}
        />
      )}
    </div>
  );
};
