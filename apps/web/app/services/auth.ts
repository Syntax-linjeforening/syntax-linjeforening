import { gql } from 'graphql-request';
import { api } from './api';

export type AuthenticationRequest = {
  email: string;
  password: string;
}

export interface AuthenticationResult {
  __typename: 'UserAuthenticationWithPasswordSuccess' | 'UserAuthenticationWithPasswordFailure';
}

export interface SuccessfulAuthentication extends AuthenticationResult {
  __typename: 'UserAuthenticationWithPasswordSuccess';
  item: AuthenticatedUser;
}

export interface FailedAuthentication extends AuthenticationResult {
  __typename: 'UserAuthenticationWithPasswordFailure';
  message: string;
}

export type LogoutResponse = {
  endSession: boolean;
}

export type SessionDataResponse = {
  authenticatedItem?: AuthenticatedUser;
}

export type AuthenticatedUser = {
  id: string;
  name: string;
  email: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthenticationResult, AuthenticationRequest>({
      query: ({ email, password }) => ({
        document: gql`
          mutation loginUser($email: String!, $password: String!) {
            authenticateUserWithPassword(email: $email, password: $password) {
              __typename
              ... on UserAuthenticationWithPasswordSuccess {
                item {
                  id
                  name
                  email
                }
              }
              ... on UserAuthenticationWithPasswordFailure {
                message
              }
            }
          }
        `,
        variables: {
          email,
          password
        },
      }),
      transformResponse: (response: { authenticateUserWithPassword: AuthenticationResult}) => {
        let result: AuthenticationResult;
        
        if (response.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordFailure') {
          result = response.authenticateUserWithPassword as FailedAuthentication;
        } else {
          result = response.authenticateUserWithPassword as SuccessfulAuthentication;
        }

        return result;
      }
    }),
    logout: builder.mutation<LogoutResponse, null>({
      query: () => ({
        document: gql`
          mutation logout {
            endSession
          }
        `
      })
    }),
    sessionData: builder.query<SessionDataResponse, null>({
      query: () => ({
        document: gql`
          query getSessionData {
            authenticatedItem {
              ... on User {
                id
                name
                email
              }
            }
          }
        `
      })
    })
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSessionDataQuery
} = authApi;