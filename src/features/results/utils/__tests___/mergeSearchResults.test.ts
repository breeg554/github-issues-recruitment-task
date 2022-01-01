import { mergeSearchResults } from "..";

const init = {
  users: {
    dataCount: 10,
    edges: [
      {
        node: {},
      },
      {
        node: {},
      },
    ],
    pageInfo: {
      endCursor: null,
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null,
    },
  },
  repositories: {
    dataCount: 0,
    edges: [
      {
        node: {},
      },
      {
        node: {},
      },
    ],
    pageInfo: {
      endCursor: null,
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null,
    },
  },
};

describe("merge search results", () => {
  it("merge search results into one object", () => {
    expect(mergeSearchResults(init)).toStrictEqual({
      dataCount: 10,
      data: [{}, {}, {}, {}],
      pageInfo: {
        users: {
          endCursor: null,
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: null,
        },
        repositories: {
          endCursor: null,
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: null,
        },
      },
    });
  });
});
