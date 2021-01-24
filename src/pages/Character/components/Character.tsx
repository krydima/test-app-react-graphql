import React, { FC } from 'react';

import {
  Character as CharacterType,
  Location,
  Episode,
  Maybe,
} from 'apollo/gen_types';

export const CHARACTER_TEST_ID = 'character';

type CharacterProps = {
  character?: Maybe<
    Pick<
      CharacterType,
      | 'name'
      | 'status'
      | 'species'
      | 'type'
      | 'gender'
      | 'image'
      | 'location'
      | 'episode'
    > & {
      origin?: Maybe<Pick<Location, 'name' | 'dimension' | 'type'>>;
      location?: Maybe<Pick<Location, 'name' | 'dimension' | 'type'>>;
      episode?: Maybe<Maybe<Pick<Episode, 'name' | 'id'>>[]>;
    }
  >;
};

const Character: FC<CharacterProps> = ({ character }) => {
  if (!character) {
    return null;
  }

  const origin = character.origin;
  const location = character.location;

  return (
    <div data-testid={CHARACTER_TEST_ID}>
      <div>Character:</div>
      <div>Name: {character.name}</div>
      <div>Status: {character.status}</div>
      <div>Species: {character.species}</div>
      <div>Type: {character.type}</div>
      <div>Gender: {character.gender}</div>
      <div>
        {character.image && (
          <img src={character.image} alt={`${character.name} avatar`} />
        )}
      </div>
      <div>Origin:</div>
      <div>{origin?.name}</div>
      <div>{origin?.dimension}</div>
      <div>{origin?.type}</div>
      <div>Location:</div>
      <div>{location?.name}</div>
      <div>{location?.type}</div>
      <div>{location?.dimension}</div>
      <div>episode:</div>
      <ul>
        {character.episode?.map((episode) => (
          <li key={episode?.id}>{episode?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Character;
