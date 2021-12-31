import { gql, useLazyQuery } from "@apollo/client";
import { useMemo } from "react";
import { ReposAndUsers } from "../types";
import {
  mergeSearchResults,
  removeItemsWithoutId,
  sortSearchQueriesById,
} from "../utils";

const USERS_REPOS_QUERY = gql`
  query searchReposAndUsers($search: String!) {
    users: search(query: $search, type: USER, first: 7) {
      dataCount: userCount
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
    repositories: search(query: $search, type: REPOSITORY, first: 7) {
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
    }
  }
`;

export const useLazyReposAndUsers = (search: string) => {
  const [getData, query] = useLazyQuery(USERS_REPOS_QUERY, {
    variables: { search },
  });

  const mergedData = useMemo(() => {
    const merged: ReposAndUsers | undefined = mergeSearchResults(query.data);
    if (!merged) return undefined;

    const modified = { ...merged, data: removeItemsWithoutId([...merged.data]) };
    modified.data = sortSearchQueriesById([...modified.data]);

    return modified;
  }, [query]);

  return { getData, query, mergedData };
};
