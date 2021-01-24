import React, { FunctionComponent } from 'react';
import { createMemoryHistory, History } from 'history';
import { Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { MockedProvider, MockedProviderProps } from '@apollo/client/testing';

// import { InMemoryCache } from '@apollo/client';

export function renderWithWrappers(
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    mocks = [],
    path = '*',
  }: {
    route?: string;
    history?: History;
    mocks?: MockedProviderProps['mocks'];
    path?: string;
  } = {}
) {
  // const cache = new InMemoryCache({});

  const Wrapper: FunctionComponent<{}> = ({ children }) => (
    <MockedProvider mocks={mocks}>
      <Router history={history}>
        <Route path={path}>{children}</Route>
      </Router>
    </MockedProvider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

// re-export everything
export * from '@testing-library/react';
