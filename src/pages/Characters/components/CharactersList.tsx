import { FC } from 'react';

import CharactersListItem, {
  CharactersListItemProps,
} from './CharactersListItem';
import { Maybe } from 'apollo/gen_types';

export const CHARACTERS_LIST_TEST_ID = 'characters-list';

type CharactersListProps = {
  characters?: Maybe<Maybe<CharactersListItemProps['character']>[]>;
};

const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  return (
    <table data-testid={CHARACTERS_LIST_TEST_ID}>
      <tbody>
        {characters?.map((character) => {
          if (!character) return null;

          return (
            <CharactersListItem key={character.id} character={character} />
          );
        })}
      </tbody>
    </table>
  );
};

export default CharactersList;
