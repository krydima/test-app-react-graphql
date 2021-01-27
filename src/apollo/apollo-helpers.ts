// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run npm run graphql:codegen to update

import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type QueryKeySpecifier = (
  | 'character'
  | 'characters'
  | 'charactersByIds'
  | 'location'
  | 'locations'
  | 'locationsByIds'
  | 'episode'
  | 'episodes'
  | 'episodesByIds'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  character?: FieldPolicy<any> | FieldReadFunction<any>;
  characters?: FieldPolicy<any> | FieldReadFunction<any>;
  charactersByIds?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
  locationsByIds?: FieldPolicy<any> | FieldReadFunction<any>;
  episode?: FieldPolicy<any> | FieldReadFunction<any>;
  episodes?: FieldPolicy<any> | FieldReadFunction<any>;
  episodesByIds?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CharacterKeySpecifier = (
  | 'id'
  | 'name'
  | 'status'
  | 'species'
  | 'type'
  | 'gender'
  | 'origin'
  | 'location'
  | 'image'
  | 'episode'
  | 'created'
  | CharacterKeySpecifier
)[];
export type CharacterFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  species?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  gender?: FieldPolicy<any> | FieldReadFunction<any>;
  origin?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  episode?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationKeySpecifier = (
  | 'id'
  | 'name'
  | 'type'
  | 'dimension'
  | 'residents'
  | 'created'
  | LocationKeySpecifier
)[];
export type LocationFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension?: FieldPolicy<any> | FieldReadFunction<any>;
  residents?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EpisodeKeySpecifier = (
  | 'id'
  | 'name'
  | 'air_date'
  | 'episode'
  | 'characters'
  | 'created'
  | EpisodeKeySpecifier
)[];
export type EpisodeFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  air_date?: FieldPolicy<any> | FieldReadFunction<any>;
  episode?: FieldPolicy<any> | FieldReadFunction<any>;
  characters?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CharactersKeySpecifier = (
  | 'info'
  | 'results'
  | CharactersKeySpecifier
)[];
export type CharactersFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  results?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type InfoKeySpecifier = (
  | 'count'
  | 'pages'
  | 'next'
  | 'prev'
  | InfoKeySpecifier
)[];
export type InfoFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  prev?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationsKeySpecifier = (
  | 'info'
  | 'results'
  | LocationsKeySpecifier
)[];
export type LocationsFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  results?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EpisodesKeySpecifier = (
  | 'info'
  | 'results'
  | EpisodesKeySpecifier
)[];
export type EpisodesFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  results?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypedTypePolicies = TypePolicies & {
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Character?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CharacterKeySpecifier
      | (() => undefined | CharacterKeySpecifier);
    fields?: CharacterFieldPolicy;
  };
  Location?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LocationKeySpecifier
      | (() => undefined | LocationKeySpecifier);
    fields?: LocationFieldPolicy;
  };
  Episode?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EpisodeKeySpecifier
      | (() => undefined | EpisodeKeySpecifier);
    fields?: EpisodeFieldPolicy;
  };
  Characters?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CharactersKeySpecifier
      | (() => undefined | CharactersKeySpecifier);
    fields?: CharactersFieldPolicy;
  };
  Info?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | InfoKeySpecifier | (() => undefined | InfoKeySpecifier);
    fields?: InfoFieldPolicy;
  };
  Locations?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LocationsKeySpecifier
      | (() => undefined | LocationsKeySpecifier);
    fields?: LocationsFieldPolicy;
  };
  Episodes?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EpisodesKeySpecifier
      | (() => undefined | EpisodesKeySpecifier);
    fields?: EpisodesFieldPolicy;
  };
};