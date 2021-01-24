import { ApolloClient, createHttpLink, ApolloLink } from '@apollo/client';

import { cache } from './cache';
// import clientSchema from './graphql/client-schema.graphql';

const customFetch = (uri: string, options: Request) => {
  if (typeof options.body == 'string') {
    const { operationName } = JSON.parse(options.body);
    uri = `${uri}?opName=${operationName}`;
  }

  return fetch(uri, options);
};

export const getClient = () => {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    fetch: customFetch,
  });

  return new ApolloClient({
    cache,
    // typeDefs: clientSchema,
    link: ApolloLink.from([httpLink]),
  });
};

export const client = getClient();
