import { describe, it, expect } from "vitest";

import { getAPIKey } from "src/api/auth.js";

describe("getAPIKey", () => {
  it("should return the API key from the authorization header", () => {
    const headers = { authorization: "ApiKey test_api_key" };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("test_api_key");
  });

  it("should return null if the authorization header is not set", () => {
    const headers = {};
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });
});
