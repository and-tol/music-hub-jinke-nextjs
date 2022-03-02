// Core
import Link from 'next/link';
import { ReactElement } from 'react';
// Other
import { useActiveMenu } from '../../hooks/useActiveMenu';

export const LogoElement = (): ReactElement => {
  const { handleNavActive } = useActiveMenu();

  return (
    <>
      <Link href='/'>
        <a className='navbar-item' onClick={() => handleNavActive('/')}>
          <h1 className='title is-4 logo'>MediaHub</h1>
        </a>
      </Link>
    </>
  );
};
