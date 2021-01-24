import React from 'react';
import { renderWithWrappers, screen } from 'reactTestUtils';

import Pagination, { PAGINATION_TEST_ID } from './Pagination';

describe('Pagination component', () => {
  it('should show pagination', async () => {
    renderWithWrappers(<Pagination prev={1} next={2} />);

    expect(await screen.findByTestId(PAGINATION_TEST_ID)).toBeInTheDocument();
  });

  it('should render "next" and "prev correctly"', async () => {
    renderWithWrappers(<Pagination prev={1} next={2} />);

    const links = await screen.findAllByRole('link');

    expect(links[0]).toHaveTextContent('Prev');
    expect(links[0]).toHaveAttribute('href', '/?page=1');

    expect(links[1]).toHaveTextContent('Next');
    expect(links[1]).toHaveAttribute('href', '/?page=2');
  });
});
