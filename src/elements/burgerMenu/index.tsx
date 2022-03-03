// Core
import { FC, ReactElement } from 'react';
import cls from 'classnames';
// Other
import { useBurgerMenu } from './hooks/useBurgerMenu';

type PropsType = {
  children?: never;
};

export const BurgerMenuElement: FC<PropsType> = (): ReactElement => {
  const { isActiveBurger, handleBurgerActive } = useBurgerMenu();

  return (
    <>
      <button
        id='menu-open'
        className={cls('navbar-burger', isActiveBurger && 'is-active')}
        aria-label='menu'
        aria-expanded='false'
        data-target='navbarBasicExample'
        onClick={handleBurgerActive}
      >
        {/* <div> */}
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        {/* </div> */}
      </button>
    </>
  );
};
