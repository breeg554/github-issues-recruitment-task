import { truncateString } from "../transform";

describe("truncate String function", () => {
  it("truncate text that is too long", () => {
    expect(truncateString(3)("DDDD")).toBe("DDD...");
    expect(truncateString(5)("Hello world")).toBe("Hello...");
    expect(truncateString(0)("a")).toBe("...");
  });
  it("return original text if is not too long", () => {
    expect(truncateString(5)("DDDD")).toBe("DDDD");
    expect(truncateString(15)("Hello world")).toBe("Hello world");
    expect(truncateString(15)("")).toBe("");
  });
  it("truncate text with negative N", () => {
    expect(truncateString(-5)("DDDD")).toBe("...");
  });
});
