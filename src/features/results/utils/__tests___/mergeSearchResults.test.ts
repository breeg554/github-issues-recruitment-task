import { mergeSearchResults } from "..";
import { fakeResponseData } from "./testUtils";

describe("merge search results", () => {
  it("merge search results into one object", () => {
    expect(mergeSearchResults(fakeResponseData)).toStrictEqual({
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
