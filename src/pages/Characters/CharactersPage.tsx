import { FC } from 'react';

import CharactersList from './components/CharactersList';
import Spinner, { SpinnerType } from 'components/Spinner/Spinner';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import { useGetCharactersQuery } from './queries/getCharacters.generated';
import { useSearchParams } from 'hooks/useSearchParams';
import Pagination from 'components/Pagination/Pagination';
import Page from 'components/Page/Page';

export const CHARACTERS_PAGE_TEST_ID = 'characters-page';

const CharactersPage: FC = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') ?? 1);

  const getCharactersQuery = useGetCharactersQuery({
    variables: { page },
  });

  if (getCharactersQuery.loading) {
    return <Spinner type={SpinnerType.FullPage} />;
  }
  if (getCharactersQuery.error) {
    return <ErrorModal message={getCharactersQuery.error.message} />;
  }

  const characters = getCharactersQuery.data?.characters?.results;

  return (
    <Page data-testid={CHARACTERS_PAGE_TEST_ID}>
      <CharactersList characters={characters} />
      <Pagination
        prev={getCharactersQuery.data?.characters?.info?.prev}
        next={getCharactersQuery.data?.characters?.info?.next}
      />
    </Page>
  );
};

export default CharactersPage;
