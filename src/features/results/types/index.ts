export interface User {
  id?: string;
  email?: string;
  name?: string;
  login: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
  __typename: string;
}
export interface ModifyUser extends User {
  id: string;
}
export interface LicenseInfo {
  name: string;
  __typename: string;
}

export interface Issues {
  totalCount: number;
  __typename: string;
}

export interface Language {
  name: string;
  color: string;
  __typename: string;
}

export interface Languages {
  nodes: Language[];
  __typename: string;
}
export interface Repository {
  id?: string;
  name?: string;
  url?: string;
  updatedAt: string;
  stargazerCount?: number;
  licenseInfo?: LicenseInfo;
  issues?: Issues;
  description?: string;
  languages?: Languages;
  __typename: string;
}
export interface ModifyRepository extends Repository {
  id: string;
}
export interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}
export interface MergedPageInfo {
  users: PageInfo;
  repositories: PageInfo;
}
export type ReposAndUsers = {
  data: (User | Repository)[];
  dataCount: number;
  pageInfo: MergedPageInfo;
};
export interface FetchMoreCursors {
  userEndCursor?: string;
  userStartCursor?: string;
  repoEndCursor?: string;
  repoStartCursor?: string;
  first?: number;
  last?: number;
}
export const isUser = (obj: Repository | User): obj is User => {
  return (obj as User).__typename === "User";
};
export const hasId = (obj: Repository | User): obj is ModifyUser | ModifyRepository => {
  return obj.id !== undefined;
};
