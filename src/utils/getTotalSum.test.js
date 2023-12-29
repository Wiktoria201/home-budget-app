import { getTotalSum } from "./getTotalSum";

describe("getTotalSum util", () => {
  test("should return total sum correctly", () => {
    const data = [{ value: "100" }, { value: "200" }];
    const result = getTotalSum(data);

    expect(result).toEqual(300);
  });

  test("should return total sum correctly for negative numbers", () => {
    const data = [{ value: "-50" }, { value: "-75" }];
    const result = getTotalSum(data);

    expect(result).toEqual(-125);
  });

  test("should return total sum correctly for mixed positive and negative numbers", () => {
    const data = [{ value: "100" }, { value: "-50" }, { value: "25" }];
    const result = getTotalSum(data);

    expect(result).toEqual(75);
  });

  test("should handle decimal numbers correctly", () => {
    const data = [{ value: "15.50" }, { value: "20.75" }];
    const result = getTotalSum(data);

    expect(result).toEqual(36.25);
  });

  test("should handle non-string numbers correctly", () => {
    const data = [{ value: 100 }, { value: 200 }];
    const result = getTotalSum(data);

    expect(result).toEqual(300);
  });
});
