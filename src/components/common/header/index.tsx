// Core
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import cls from 'classnames';
// Elements
import { LogoElement } from '../../../elements/logo';
import { BurgerMenuElement } from '../../../elements/burgerMenu';
// Other
import { configMenu } from '../../../constants';
import { useActiveMenu } from '../../../hooks/useActiveMenu';
import { SearchFormComponent } from '../../searchForm';

type PropsType = {
  children?: never;
};

export const HeaderComponent: FC<PropsType> = (): ReactElement => {
  // const { pathname } = useRouter();
  // const [activeMenuItem, setActiveMenuItem] = useState('/');

  // TODO проверить неоходимость хелпера
  // const currentLocation = getCurrentLocation(location);

  // // useEffect(() => {
  // //   setActiveMenuItem(`nav-${currentLocation}`);
  // // }, [currentLocation]);
  // useEffect(() => {
  //   setActiveMenuItem(`nav-${pathname}`);
  // }, [pathname]);

  // const handleNavActive = (navId: any): void => {
  //   setActiveMenuItem(navId);
  // };

  const {activeMenuItem, handleNavActive } = useActiveMenu();



  return (
    <>
      <header className='header'>
        <nav
          className='navbar is-transparent bottom-line'
          role='navigation'
          aria-label='main navigation'
        >
          <div className='container'>
            <div className='navbar-brand'>
              <LogoElement />

              <BurgerMenuElement />

              <div className=''></div>
            </div>
            <div className='navbar-menu'>
              <div className='navbar-start'>
                {/* Menu */}
                <div id='navbar-tabs' className='tabs is-medium'>
                  <ul style={{ top: '-1px' }} className='is-relative'>
                    {configMenu.HeaderMenu.slice(1)?.map(tab => {
                      return (
                        <li
                          key={tab.id}
                          className={cls(
                            'navbar-tab',
                            tab.id === activeMenuItem ? 'is-active' : ''
                          )}
                          onClick={() => handleNavActive(tab.id)}
                        >
                          {tab.toHash ? (
                            <Link href={`/#${tab.toHash}`} as='/'>
                              <a id={tab?.id}>{tab.text}</a>
                            </Link>
                          ) : (
                            <Link href={`/${tab.to}`}>
                              <a id={tab.id}>{tab.text}</a>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* Search */}
                <div className='block is-flex is-align-items-center ml-3'>
                  <SearchFormComponent />
                </div>
              </div>
              {/* Login */}
              {/* <Login /> */}
            </div>

            {/* {isShowMobileMenu && (
              <MobileMenu
                isShowMobileMenu={isShowMobileMenu}
                setIsShowMobileMenu={setIsShowMobileMenu}
                setIsActiveBurger={setIsActiveBurger}
              />
            )} */}
          </div>
        </nav>
      </header>
    </>
  );
};
