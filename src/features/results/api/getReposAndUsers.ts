import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";
import { ReposAndUsers } from "../types";
import {
  mergeSearchResults,
  removeItemsWithoutId,
  sortSearchQueriesById,
} from "../utils";

const USERS_REPOS_QUERY = gql`
  query searchReposAndUsers(
    $search: String!
    $first: Int
    $last: Int
    $repoEndCursor: String
    $repoStartCursor: String
    $userEndCursor: String
    $userStartCursor: String
  ) {
    users: search(
      query: $search
      type: USER
      first: $first
      last: $last
      after: $userEndCursor
      before: $userStartCursor
    ) {
      dataCount: userCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          ... on User {
            id
            email
            name
            login
            location
            bio
            avatarUrl
          }
        }
      }
    }
    repositories: search(
      query: $search
      type: REPOSITORY
      first: $first
      last: $last
      after: $repoEndCursor
      before: $repoStartCursor
    ) {
      dataCount: repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            updatedAt
            stargazerCount
            licenseInfo {
              name
            }
            issues(filterBy: { states: OPEN }) {
              totalCount
            }
            description
            languages(first: 1) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const useReposAndUsers = (
  search: string,
  pageSize: number,
  repoEndCursor?: string,
  repoStartCursor?: string,
  userEndCursor?: string,
  userStartCursor?: string
) => {
  const query = useQuery(USERS_REPOS_QUERY, {
    variables: {
      search,
      first: pageSize,
      repoEndCursor,
      repoStartCursor,
      userEndCursor,
      userStartCursor,
    },
  });

  const mergedData = useMemo(() => {
    const merged: ReposAndUsers | undefined = mergeSearchResults(query.data);
    if (!merged) return undefined;

    const modified = { ...merged, data: removeItemsWithoutId([...merged.data]) };
    modified.data = sortSearchQueriesById([...modified.data]);

    return modified;
  }, [query]);

  return { query, mergedData };
};
