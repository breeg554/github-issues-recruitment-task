export const fakeRepoLanguage = {
  name: "test",
  color: "#fff",
  __typename: "language",
};

export const fakeUserData = {
  avatarUrl:
    "https://avatars.githubusercontent.com/u/499550?u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
  bio: "",
  email: "",
  id: "MDQ6VXNlcjQ5OTU1MA==",
  location: "Singapore",
  login: "yyx990803",
  name: "Evan You",
  __typename: "User",
};
export const fakeRepoData = {
  description: "Monkey testing library for web apps and Node.js",
  id: "MDEwOlJlcG9zaXRvcnkxMzczNzE0OQ==",
  issues: { totalCount: 6, __typename: "IssueConnection" },
  languages: {
    nodes: [
      {
        color: "#f1e05a",
        name: "JavaScript",
        __typename: "Language",
      },
    ],
    __typename: "LanguageConnection",
  },
  licenseInfo: {
    name: "MIT License",
    __typename: "License",
  },
  name: "gremlins.js",
  stargazerCount: 8798,
  updatedAt: "2022-01-01T04:37:32Z",
  url: "https://github.com/marmelab/gremlins.js",
  __typename: "Repository",
};
