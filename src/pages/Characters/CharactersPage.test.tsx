import React from 'react';
import {
  renderWithWrappers,
  screen,
  getByRole,
  getByText,
  fireEvent,
} from 'reactTestUtils';
import CharactersPage from './CharactersPage';
import { SPINNER_TEST_ID } from 'components/Spinner/Spinner';
import { ERROR_MODAL_TEST_ID } from 'components/ErrorModal/ErrorModal';
import { CHARACTERS_LIST_TEST_ID } from './components/CharactersList';
import { CHARACTERS_LIST_ITEM_TEST_ID } from './components/CharactersListItem';
import { GetCharactersDocument } from './queries/getCharacters.generated';
import { PAGINATION_TEST_ID } from 'components/Pagination/Pagination';

describe('CharactersPage component', () => {
  it('should show the spinner during loading', async () => {
    renderWithWrappers(<CharactersPage />, { route: '/characters' });

    expect(screen.getByTestId(SPINNER_TEST_ID)).toBeInTheDocument();
  });

  it('should show an error if something went wrong', async () => {
    const errorText = 'An error occurred';

    const charactersMock = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 1 },
      },
      error: new Error(errorText),
    };

    renderWithWrappers(<CharactersPage />, {
      route: 'characters',
      mocks: [charactersMock],
    });

    const errorModal = await screen.findByTestId(ERROR_MODAL_TEST_ID);

    expect(errorModal).toBeInTheDocument();
    expect(errorModal).toHaveTextContent(errorText);
  });

  it('should show characters list', async () => {
    const data = {
      characters: {
        info: {
          count: 671,
          pages: 34,
          next: 2,
          prev: null,
          __typename: 'Info',
        },
        results: [
          {
            id: '1',
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            __typename: 'Character',
          },
          {
            id: '2',
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            __typename: 'Character',
          },
        ],
        __typename: 'Characters',
      },
    };

    const charactersMock = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 1 },
      },
      result: {
        data,
      },
    };

    renderWithWrappers(<CharactersPage />, {
      route: 'characters',
      mocks: [charactersMock],
    });

    expect(
      await screen.findByTestId(CHARACTERS_LIST_TEST_ID)
    ).toBeInTheDocument();

    expect(
      await screen.findAllByTestId(CHARACTERS_LIST_ITEM_TEST_ID)
    ).toHaveLength(2);
  });

  it('should render list item correctly', async () => {
    const data = {
      characters: {
        info: {
          count: 671,
          pages: 34,
          next: 2,
          prev: null,
          __typename: 'Info',
        },
        results: [
          {
            id: '1',
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            __typename: 'Character',
          },
        ],
        __typename: 'Characters',
      },
    };

    const charactersMock = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 1 },
      },
      result: {
        data,
      },
    };

    renderWithWrappers(<CharactersPage />, {
      route: 'characters',
      mocks: [charactersMock],
    });

    const listItem = await screen.findByTestId(CHARACTERS_LIST_ITEM_TEST_ID);

    const itemData = data.characters.results[0];

    expect(listItem).toHaveTextContent(itemData.name);
    expect(listItem).toHaveTextContent(itemData.species);
    expect(listItem).toHaveTextContent(itemData.status);

    const image = getByRole(listItem, 'img');
    expect(image).toHaveAttribute('src', itemData.image);

    const link = getByRole(listItem, 'link');
    expect(link).toHaveAttribute('href', `/characters/1`);
  });

  it('should render list item page 2', async () => {
    const data = {
      characters: {
        info: {
          count: 671,
          pages: 34,
          next: 3,
          prev: 1,
          __typename: 'Info',
        },
        results: [
          {
            id: '1',
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            __typename: 'Character',
          },
        ],
        __typename: 'Characters',
      },
    };

    const charactersMock = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 2 },
      },
      result: {
        data,
      },
    };

    renderWithWrappers(<CharactersPage />, {
      route: 'characters?page=2',
      mocks: [charactersMock],
    });

    expect(
      await screen.findByTestId(CHARACTERS_LIST_ITEM_TEST_ID)
    ).toBeInTheDocument();
  });

  it('should open character page', async () => {
    const data = {
      characters: {
        info: {
          count: 671,
          pages: 34,
          next: 3,
          prev: 1,
          __typename: 'Info',
        },
        results: [
          {
            id: '1',
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            __typename: 'Character',
          },
        ],
        __typename: 'Characters',
      },
    };

    const charactersMock = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 2 },
      },
      result: {
        data,
      },
    };

    const { history } = renderWithWrappers(<CharactersPage />, {
      route: 'characters?page=2',
      mocks: [charactersMock],
    });

    const listItem = await screen.findByTestId(CHARACTERS_LIST_ITEM_TEST_ID);
    const viewItem = getByText(listItem, 'view');
    fireEvent.click(viewItem);

    expect(history.location.pathname).toBe('/characters/1');
  });

  it('should contain pagination', async () => {
    const data = {
      characters: {
        info: {
          count: 671,
          pages: 34,
          next: 3,
          prev: 1,
          __typename: 'Info',
        },
        results: [
          {
            id: '1',
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            __typename: 'Character',
          },
        ],
        __typename: 'Characters',
      },
    };

    const charactersMock = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 2 },
      },
      result: {
        data,
      },
    };

    renderWithWrappers(<CharactersPage />, {
      route: 'characters?page=2',
      mocks: [charactersMock],
    });

    const paginationElement = await screen.findByTestId(PAGINATION_TEST_ID);

    expect(paginationElement).toBeInTheDocument();
    getByText(paginationElement, /Next/);
    getByText(paginationElement, /Prev/);
  });

  it('should go to next page', async () => {
    const dataPage2 = {
      characters: {
        info: {
          count: 671,
          pages: 34,
          next: 3,
          prev: 1,
          __typename: 'Info',
        },
        results: [
          {
            id: '1',
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            __typename: 'Character',
          },
        ],
        __typename: 'Characters',
      },
    };

    const dataPage3 = {
      characters: {
        info: {
          count: 671,
          pages: 34,
          next: 4,
          prev: 2,
          __typename: 'Info',
        },
        results: [
          {
            id: '2',
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            __typename: 'Character',
          },
        ],
        __typename: 'Characters',
      },
    };

    const charactersMockPage2 = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 2 },
      },
      result: {
        data: dataPage2,
      },
    };

    const charactersMockPage3 = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 3 },
      },
      result: {
        data: dataPage3,
      },
    };

    const { history } = renderWithWrappers(<CharactersPage />, {
      route: 'characters?page=2',
      mocks: [charactersMockPage2, charactersMockPage3],
    });

    fireEvent.click(await screen.findByText(/Next/));

    await screen.findByTestId(CHARACTERS_LIST_ITEM_TEST_ID);

    const itemData = dataPage3.characters.results[0];

    expect(screen.getByText(itemData.name)).toBeInTheDocument();
    expect(history.location.search).toBe('?page=3');
  });
});
