import { it, describe, expect } from "vitest";

describe("MSW Mocks", () => {
  describe("https://example.com/user GET", () => {
    it("should get example user info", async () => {
      const response = await fetch("https://example.com/user");

      expect(response.status).toBe(200);
      expect(response.statusText).toBe("OK");
      expect(await response.json()).toMatchObject({
        id: "1",
        firstName: "Alfred",
        lastName: "Lucero",
      });
    });
  });
});
