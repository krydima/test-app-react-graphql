export const characterResponseFixture = {
  data: {
    character: {
      id: '1',
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: 'type character',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        type: 'Planet',
        dimension: 'Dimension C-137',
        __typename: 'Location',
      },
      location: {
        id: '20',
        name: 'Earth (Replacement Dimension)',
        type: 'Planet',
        dimension: 'Replacement Dimension',
        __typename: 'Location',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        { id: '1', name: 'Pilot', __typename: 'Episode' },
        { id: '2', name: 'Lawnmower Dog', __typename: 'Episode' },
      ],
      __typename: 'Character',
    },
  },
};
