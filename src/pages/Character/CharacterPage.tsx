import React from 'react';

import { useParams } from 'react-router';
import { useGetCharacterQuery } from './queries/getCharacter.generated';
import Spinner, { SpinnerType } from 'components/Spinner/Spinner';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import Character from './components/Character';
import Page from 'components/Page/Page';

export const CHARACTER_PAGE_TEST_ID = 'character-page';

type CharacterParams = { characterId: string };

const CharacterPage = () => {
  const params = useParams<CharacterParams>();

  const getJobQuery = useGetCharacterQuery({
    variables: { characterId: params.characterId },
  });

  if (getJobQuery.loading) {
    return <Spinner type={SpinnerType.FullPage} />;
  }

  if (getJobQuery.error) {
    return <ErrorModal message={getJobQuery.error.message} />;
  }

  const character = getJobQuery.data?.character;

  return (
    <Page data-testid={CHARACTER_PAGE_TEST_ID}>
      <Character character={character} />
    </Page>
  );
};

export default CharacterPage;
