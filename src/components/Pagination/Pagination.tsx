import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import { useSearchParams } from 'hooks/useSearchParams';
import styles from './Pagination.module.css';

export const PAGINATION_TEST_ID = 'pagination';

type PaginationProps = {
  prev?: number | null;
  next?: number | null;
};

const Pagination: FC<PaginationProps> = ({ prev, next }) => {
  const searchParams = useSearchParams();

  let prevLink = null;
  let nextLink = null;

  if (prev) {
    searchParams.set('page', String(prev));
    const prevSearchStr = String(searchParams);
    prevLink = (
      <Link
        to={() => ({
          search: prevSearchStr,
        })}
      >
        Prev
      </Link>
    );
  }

  if (next) {
    searchParams.set('page', String(next));
    const nextSearchStr = String(searchParams);
    nextLink = (
      <Link
        to={() => ({
          search: nextSearchStr,
        })}
      >
        Next
      </Link>
    );
  }

  return (
    <div data-testid={PAGINATION_TEST_ID} className={styles.wrapper}>
      {prevLink}
      {nextLink}
    </div>
  );
};

export default Pagination;
