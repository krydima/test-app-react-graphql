import { InMemoryCache } from '@apollo/client';

import { TypedTypePolicies } from './apollo-helpers';

const typePolicies: TypedTypePolicies = {};

export const cache = new InMemoryCache({ typePolicies });
