import { gql, useQuery } from "@apollo/client";

const USERS_QUERY = gql`
  query searchUsers($search: String!) {
    search(query: $search, first: 7, type: USER) {
      nodes {
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
      repositoryCount
    }
  }
`;

export const useGetUsers = (search: string) => {
  return useQuery(USERS_QUERY, {
    variables: { search },
  });
};
