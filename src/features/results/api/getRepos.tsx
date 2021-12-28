import { gql, useQuery } from "@apollo/client";

const REPO_QUERY = gql`
  query searchRepos($search: String!) {
    search(query: $search, first: 7, type: REPOSITORY) {
      nodes {
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
      dataCount: repositoryCount
    }
  }
`;

export const useGetRepos = (search: string) => {
  return useQuery(REPO_QUERY, {
    variables: { search },
  });
};
