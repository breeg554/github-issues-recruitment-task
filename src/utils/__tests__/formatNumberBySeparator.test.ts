import { formatNumberBySeparator } from "../transform";

describe("format number by separator", () => {
  it("format by comma", () => {
    expect(formatNumberBySeparator(",")(10000)).toBe("10,000");
    expect(formatNumberBySeparator(",")(1000)).toBe("1,000");
    expect(formatNumberBySeparator(",")(10)).toBe("10");
    expect(formatNumberBySeparator(",")(1)).toBe("1");
    expect(formatNumberBySeparator(",")(-1)).toBe("-1");
    expect(formatNumberBySeparator(",")(-10000)).toBe("-10,000");
  });
  it("format by dot", () => {
    expect(formatNumberBySeparator(".")(10000)).toBe("10.000");
    expect(formatNumberBySeparator(".")(1000)).toBe("1.000");
    expect(formatNumberBySeparator(".")(10)).toBe("10");
    expect(formatNumberBySeparator(".")(1)).toBe("1");
    expect(formatNumberBySeparator(".")(-1)).toBe("-1");
    expect(formatNumberBySeparator(".")(-10000)).toBe("-10.000");
  });
  it("format by 'W'", () => {
    expect(formatNumberBySeparator("W")(10000)).toBe("10W000");
    expect(formatNumberBySeparator("W")(1000)).toBe("1W000");
    expect(formatNumberBySeparator("W")(10)).toBe("10");
  });
});
