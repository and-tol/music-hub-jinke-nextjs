// Core
import { FC, ReactElement, useState } from 'react';
import cls from 'classnames';
import  Link  from 'next/link';
// Other
import { FaChevronRight } from 'react-icons/fa';
import { IPageTopMenuType } from '../../types';

type PropsType = {
  menu: IPageTopMenuType[];
  isRightTab?: boolean;
  active: string;
  setFilter: (id: string) => void;
};

export const SectionHeaderWithTabs: FC<PropsType> = ({
  menu = [],
  isRightTab = false,
  active,
  setFilter,
}): ReactElement=> {
  const [activeMenuItem, setActiveMenuItem] = useState(active);

  const handleNavActive = (id: string):void => {
    setActiveMenuItem(id);
    setFilter(id);
  };

  return (
    <div className='block is-fluid bottom-line'>
      <div className='container'>
        <div className='columns'>
          <div id='tops-top' className='level column'>
            <div className='level-left is-relative' style={{ bottom: '-2px' }}>
              <div className='tabs is-medium level-item'>
                <ul className='tops__menu--offset is-relative is-flex-wrap-wrap'>
                  {menu?.map(item => {
                    return (
                      <li
                        key={item.text}
                        className={cls(
                          'navbar-tab',
                          item.id === activeMenuItem ? 'is-active' : ''
                        )}
                        onClick={() => handleNavActive(item.id)}
                      >
                        <button
                          className='navbar-tab tabButton is-medium'
                          id={item.id}
                        >
                          {item.text}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {isRightTab && (
              <div className='level-right'>
                <div className='tabs is-medium level-item'>
                  <ul className='tops__menu--offset is-relative'>
                    <li>
                      <Link href='/'>
                        <span>
                          View all
                          <span className='icon'>
                            <FaChevronRight />
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
