export interface User {
  id: string;
  email: string;
  name: string;
  login: string;
  location: string;
  bio: string;
  avatarUrl: string;
  __typename: string;
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
  id: string;
  name: string;
  url: string;
  updatedAt: Date;
  stargazerCount: number;
  licenseInfo: LicenseInfo;
  issues: Issues;
  description: string;
  languages: Languages;
  __typename: string;
}

export type RepoAndUserArray = Array<Repository | User>;

export const isUser = (obj: Repository | User): obj is User => {
  return (obj as User).login !== undefined;
};
