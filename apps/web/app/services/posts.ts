import { gql } from 'graphql-request';
import { PaginatedRequestOptions, Pagination } from '../types/api-commons';
import { api } from './api';


export const postStatuses = ['draft', 'published'] as const;

export interface Post {
  slug: string;
  title: string;
  author: {
    name: string;
  };
  status: string;
  published_at: Date;
}

export interface PostDetails extends Post {
  content: {
    document: string;
  };
  updated_at: string;
}

export interface GetPostsResponse extends Pagination {
  posts: Post[];
}

export interface GetPostResponse {
  post: PostDetails;
}

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts:  builder.query<GetPostsResponse, PaginatedRequestOptions>({
      query: ({ skip, take }) => ({
        document: gql`
          query getPosts($take: Int = 10, $skip: Int = 0) {
            posts(take: $take, skip: $skip, orderBy: { published_at: asc }) {
              slug
              title
              author {
                name
              }
              published_at
            }
          }
        `,
        variables: {
          skip,
          take
        }
      })
    }),
    getPost: builder.query<Post, string>({
      query: (slug) => ({
        document: gql`
          query getPost {
            post(where: { slug: "${slug}" }) {
              slug
              title
              content {
                document
              }
              author {
                name
              }
              published_at
              updated_at
            }
          }
        `
      }),
      transformResponse: (response: GetPostResponse) => response.post,
    })
  })
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;