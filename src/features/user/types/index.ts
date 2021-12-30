export interface Followers {
  totalCount: number;
  __typename: string;
}

export interface Following {
  totalCount: number;
  __typename: string;
}

export interface StarredRepositories {
  totalCount: number;
  __typename: string;
}

export interface User {
  avatarUrl?: string;
  followers?: Followers;
  following?: Following;
  starredRepositories?: StarredRepositories;
  name?: string;
  login: string;
  __typename: string;
}
