import { describe, test, expect } from "vitest";

import { getAPIKey } from "src/api/auth.js";

describe("getAPIKey", () => {
  test("should return the API key from the authorization header", () => {
    const headers = { authorization: "ApiKey test_api_key" };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("test_api_key");
  });

  test("should return null if the authorization header is not set", () => {
    const headers = {};
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  test("should return null if the authorization header is malformed", () => {
    const headers = {
      authorization: "ApiKey",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return null if the authorization header does not start with 'ApiKey'", () => {
    const headers = {
      authorization: "Bearer my-token",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
