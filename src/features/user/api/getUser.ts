import { gql, useQuery } from "@apollo/client";
import { User } from "../types";

const USER_QUERY = gql`
  query getUser($user: String!) {
    user(login: $user) {
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      name
      login
    }
  }
`;

export const useUser = (user: string | undefined) => {
  const { data, loading, error } = useQuery(USER_QUERY, {
    variables: { user },
  });

  return { data: data?.user as User | undefined, loading, error };
};
