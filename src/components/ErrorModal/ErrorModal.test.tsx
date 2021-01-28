import React from 'react';
import { renderWithWrappers, screen, fireEvent } from 'reactTestUtils';

import ErrorModal, {
  ERROR_MODAL_TEST_ID,
  ERROR_MODAL_RELOAD_BUTTON_TEST_ID,
} from './ErrorModal';

describe('ErrorModal component', () => {
  it('should show error message', async () => {
    const errorMessage = 'error message !!';

    renderWithWrappers(<ErrorModal message={errorMessage} />);

    expect(await screen.findByTestId(ERROR_MODAL_TEST_ID)).toHaveTextContent(
      errorMessage
    );
  });

  it('should show reload button', async () => {
    const errorMessage = 'error message !!';

    renderWithWrappers(<ErrorModal message={errorMessage} />);

    const reloadButton = await screen.findByTestId(
      ERROR_MODAL_RELOAD_BUTTON_TEST_ID
    );

    expect(reloadButton).toHaveTextContent('Reload');
  });

  it('should show "Go to home page" button', async () => {
    const errorMessage = '404: Not Found';

    renderWithWrappers(<ErrorModal message={errorMessage} />);

    const reloadButton = await screen.findByTestId(
      ERROR_MODAL_RELOAD_BUTTON_TEST_ID
    );

    expect(reloadButton).toHaveTextContent('Go to home page');
  });

  it('should show execute reload function', async () => {
    const errorMessage = 'Message';

    const reload = jest.fn();

    renderWithWrappers(<ErrorModal message={errorMessage} reload={reload} />);

    fireEvent.click(
      await screen.findByTestId(ERROR_MODAL_RELOAD_BUTTON_TEST_ID)
    );

    expect(reload).toBeCalledTimes(1);
  });

  it('should reload page', async () => {
    const errorMessage = 'Message';

    const { history } = renderWithWrappers(
      <ErrorModal message={errorMessage} />,
      { route: '/test' }
    );

    fireEvent.click(
      await screen.findByTestId(ERROR_MODAL_RELOAD_BUTTON_TEST_ID)
    );

    expect(history.location.pathname).toBe('/test');
    expect(history.length).toBe(1);
    expect(history.action).toBe('POP');
  });

  it('should got to home page', async () => {
    const errorMessage = '404: Not Found';

    const { history } = renderWithWrappers(
      <ErrorModal message={errorMessage} />,
      { route: '/test' }
    );

    fireEvent.click(
      await screen.findByTestId(ERROR_MODAL_RELOAD_BUTTON_TEST_ID)
    );

    expect(history.location.pathname).toBe('/');
    expect(history.length).toBe(1);
    expect(history.action).toBe('REPLACE');
  });
});
