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
  },
};

describe("merge search results", () => {
  it("merge search results into one object", () => {
    expect(mergeSearchResults(init)).toStrictEqual({
      dataCount: 10,
      data: [{}, {}, {}, {}],
    });
  });
});
