import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Character } from 'apollo/gen_types';

export const CHARACTERS_LIST_ITEM_TEST_ID = 'characters-list-item';

export type CharactersListItemProps = {
  character: Pick<Character, 'id' | 'name' | 'status' | 'species' | 'image'>;
};

const CharactersListItem: FC<CharactersListItemProps> = ({ character }) => {
  const link = `/characters/${character.id}`;
  return (
    <tr data-testid={CHARACTERS_LIST_ITEM_TEST_ID}>
      <td>
        {character.image && (
          <img
            width="50"
            height="50"
            src={character.image}
            alt={`${character.name} avatar`}
          />
        )}
      </td>
      <td>{character.name}</td>
      <td>{character.species}</td>
      <td>{character.status}</td>
      <td>
        <Link to={link}>view</Link>
      </td>
    </tr>
  );
};

export default CharactersListItem;
