import Link from 'next/link';
import { FC, ReactElement, useEffect, useState } from 'react';
import cls from 'classnames';
import { useRouter } from 'next/router';

type PropsType = {
  children?: never;
};

export const HeaderComponent: FC<PropsType> = (): ReactElement => {
  const { pathname } = useRouter();
  console.log(pathname);
  const [activeMenuItem, setActiveMenuItem] = useState('/');

  // TODO проверить неоходимость хелпера
  // const currentLocation = getCurrentLocation(location);

  // useEffect(() => {
  //   setActiveMenuItem(`nav-${currentLocation}`);
  // }, [currentLocation]);
  useEffect(() => {
    setActiveMenuItem(`nav-${pathname}`);
  }, [pathname]);

  const handleNavActive = (navId: any): void => {
    setActiveMenuItem(navId);
  };

  // -------------------
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const handleBurgerActive = () => {
    setIsActiveBurger(!isActiveBurger);
    setIsShowMobileMenu(!isShowMobileMenu);
    // "is-flex-touch"
  };

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
              <Link href='/'>
                <a className='navbar-item' onClick={() => handleNavActive('/')}>
                  <h1 className='title is-4 logo'>MediaHub</h1>
                </a>
              </Link>

              {/* Burger menu */}
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
                            <HashLink smooth to={`/#${tab.toHash}`} id={tab.id}>
                              {tab.text}
                            </HashLink>
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
                  {/* <SearchForm /> */}
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
