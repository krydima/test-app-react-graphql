import React from 'react';
import { renderWithWrappers, screen, getByRole } from 'reactTestUtils';

import CharacterPage, { CHARACTER_PAGE_TEST_ID } from './CharacterPage';
import { SPINNER_TEST_ID } from 'components/Spinner/Spinner';
import { ERROR_MODAL_TEST_ID } from 'components/ErrorModal/ErrorModal';
import { GetCharacterDocument } from './queries/getCharacter.generated';
import { characterResponseFixture } from './fixtures/character';

describe('CharactersPage component', () => {
  it('should show the spinner during loading', async () => {
    renderWithWrappers(<CharacterPage />, { route: '/characters/1' });

    expect(screen.getByTestId(SPINNER_TEST_ID)).toBeInTheDocument();
  });

  it('should show an error if something went wrong', async () => {
    const errorText = 'An error occurred';

    const characterMock = {
      request: {
        query: GetCharacterDocument,
        variables: { characterId: '1' },
      },
      error: new Error(errorText),
    };

    renderWithWrappers(<CharacterPage />, {
      route: '/characters/1',
      path: '/characters/:characterId',
      mocks: [characterMock],
    });

    const errorModal = await screen.findByTestId(ERROR_MODAL_TEST_ID);

    expect(errorModal).toBeInTheDocument();
    expect(errorModal).toHaveTextContent(errorText);
  });

  it('should render general info', async () => {
    const characterMock = {
      request: {
        query: GetCharacterDocument,
        variables: { characterId: '1' },
      },
      result: characterResponseFixture,
    };

    renderWithWrappers(<CharacterPage />, {
      route: '/characters/1',
      path: '/characters/:characterId',
      mocks: [characterMock],
    });

    const character = characterResponseFixture.data.character;

    const characterItem = await screen.findByTestId(CHARACTER_PAGE_TEST_ID);

    expect(characterItem).toHaveTextContent(character.name);
    expect(characterItem).toHaveTextContent(character.status);
    expect(characterItem).toHaveTextContent(character.species);
    expect(characterItem).toHaveTextContent(character.type);
    expect(characterItem).toHaveTextContent(character.gender);

    const image = getByRole(characterItem, 'img');
    expect(image).toHaveAttribute('src', character.image);
    expect(image).toHaveAttribute('alt', `${character.name} avatar`);
  });

  it('should render origin', async () => {
    const characterMock = {
      request: {
        query: GetCharacterDocument,
        variables: { characterId: '1' },
      },
      result: characterResponseFixture,
    };

    renderWithWrappers(<CharacterPage />, {
      route: '/characters/1',
      path: '/characters/:characterId',
      mocks: [characterMock],
    });

    const origin = characterResponseFixture.data.character.origin;

    const characterItem = await screen.findByTestId(CHARACTER_PAGE_TEST_ID);

    expect(characterItem).toHaveTextContent(origin.name);
    expect(characterItem).toHaveTextContent(origin.dimension);
    expect(characterItem).toHaveTextContent(origin.type);
  });

  it('should render location', async () => {
    const characterMock = {
      request: {
        query: GetCharacterDocument,
        variables: { characterId: '1' },
      },
      result: characterResponseFixture,
    };

    renderWithWrappers(<CharacterPage />, {
      route: '/characters/1',
      path: '/characters/:characterId',
      mocks: [characterMock],
    });

    const location = characterResponseFixture.data.character.location;

    const characterItem = await screen.findByTestId(CHARACTER_PAGE_TEST_ID);

    expect(characterItem).toHaveTextContent(location.name);
    expect(characterItem).toHaveTextContent(location.type);
    expect(characterItem).toHaveTextContent(location.dimension);
  });

  it('should render episodes', async () => {
    const characterMock = {
      request: {
        query: GetCharacterDocument,
        variables: { characterId: '1' },
      },
      result: characterResponseFixture,
    };

    renderWithWrappers(<CharacterPage />, {
      route: '/characters/1',
      path: '/characters/:characterId',
      mocks: [characterMock],
    });

    const episodes = characterResponseFixture.data.character.episode;

    const characterItem = await screen.findByTestId(CHARACTER_PAGE_TEST_ID);

    episodes.forEach((episode) => {
      expect(characterItem).toHaveTextContent(episode.name);
    });
  });
});
