import React, { FC } from 'react';

import styles from './Page.module.css';

export const PAGE_TEST_ID = 'page';

export type PageProps = {
  'data-testid'?: string;
};

const Page: FC<PageProps> = ({
  'data-testid': dataTestId = PAGE_TEST_ID,
  children,
}) => {
  return (
    <div data-testid={dataTestId} className={styles.page}>
      {children}
    </div>
  );
};

export default Page;
