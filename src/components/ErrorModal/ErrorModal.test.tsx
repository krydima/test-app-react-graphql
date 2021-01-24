import React from 'react';
import { renderWithWrappers, screen } from 'reactTestUtils';

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
});
