import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type PropsType = {
  activeMenuItem: string;
  handleNavActive: (navId: string) => void;
};

export const useActiveMenu = (): PropsType => {
  const { pathname } = useRouter();

  const [activeMenuItem, setActiveMenuItem] = useState<string>('/');

  // TODO проверить неоходимость хелпера
  // const currentLocation = getCurrentLocation(location);

  // useEffect(() => {
  //   setActiveMenuItem(`nav-${currentLocation}`);
  // }, [currentLocation]);
  useEffect(() => {
    setActiveMenuItem(`nav-${pathname}`);
  }, [pathname]);

  const handleNavActive = (navId: string): void => {
    setActiveMenuItem(navId);
  };

  return { activeMenuItem, handleNavActive };
};
