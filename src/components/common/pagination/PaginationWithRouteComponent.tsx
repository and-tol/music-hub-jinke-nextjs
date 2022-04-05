import cls from 'classnames';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { usePaginationWithRoute } from './hooks/usePaginationWithRoute';

type PropsType = {
  fetchName: string;
  page: number;
  totalItemsCount: string | number;
};

export const PaginationWithRouteComponent: FC<PropsType> = ({
  fetchName,
  page,
  totalItemsCount = 1,
}): ReactElement => {
  const {
    currentPage,
    setCurrentPage,
    arrOfCurrentButtons,
    numberOfPages,
    totalPages,
  } = usePaginationWithRoute({
    page,
    totalItemsCount,
  });

  return (
    <>
      {totalPages > 1 && (
        <div className='container'>
          <nav
            className='pagination is-centered'
            role='navigation'
            aria-label='pagination'
          >
            <Link
              href={`/${fetchName}/${
                currentPage === 1 ? currentPage : currentPage - 1
              }`}
            >
              <a
                className='pagination-previous button is-rounded'
                onClick={() =>
                  setCurrentPage((prev: number) =>
                    prev === 1 ? prev : prev - 1
                  )
                }
                disabled={currentPage === 1 ?? false}
              >
                Previous
              </a>
            </Link>
            <Link
              href={`/${fetchName}/${
                currentPage === numberOfPages.length
                  ? currentPage
                  : currentPage + 1
              }`}
            >
              <a
                onClick={() =>
                  setCurrentPage((prev: number) =>
                    prev === numberOfPages.length ? prev : prev + 1
                  )
                }
                className='pagination-next button is-rounded'
                disabled={currentPage === numberOfPages.length ?? false}
              >
                Next
              </a>
            </Link>

            <ul className='pagination-list'>
              {arrOfCurrentButtons?.map((page: number | string, i: number) => {
                return (
                  <li key={i}>
                    {!isNaN(Number(page)) ? (
                      <Link
                        href={
                          page === 1 ? `/${fetchName}` : `/${fetchName}/${page}`
                        }
                        // to={`/${fetchName}/${page}`}
                      >
                        <a
                          onClick={() => setCurrentPage(Number(page))}
                          className={cls(
                            'pagination-link button is-rounded',
                            page === currentPage && 'is-current'
                          )}
                          aria-label={`Goto page ${page}`}
                        >
                          {page}
                        </a>
                      </Link>
                    ) : (
                      <span
                        className='pagination-ellipsis'
                        onClick={() => setCurrentPage(Number(page))}
                      >
                        {page}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
