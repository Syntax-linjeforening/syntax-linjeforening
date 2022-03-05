import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['User', 'Posts'],
  baseQuery: graphqlRequestBaseQuery({ client: new GraphQLClient(
    'http://localhost:3002/api/graphql',
    {
      credentials: 'include',
      mode: 'cors'
    }
  )}),
  endpoints: () => ({}), 
});