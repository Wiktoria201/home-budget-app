import { getRandomId } from "./getRandomId";

describe("getRandomId function", () => {
  test("should generate IDs of the expected length", () => {
    const id = getRandomId();
    expect(id.length).toBe(7);
  });

  test("should generate unique IDs", () => {
    const id1 = getRandomId();
    const id2 = getRandomId();
    expect(id1).not.toBe(id2);
  });
});
