import { useState } from 'react';

type ReturnedType = {
  isActiveBurger: boolean;
  handleBurgerActive: ()=>void;
};

export const useBurgerMenu = (): ReturnedType => {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);

  const handleBurgerActive = () => {
    setIsActiveBurger(!isActiveBurger);
    setIsShowMobileMenu(!isShowMobileMenu);
    // "is-flex-touch"
  };

  return { isActiveBurger, handleBurgerActive };
};
