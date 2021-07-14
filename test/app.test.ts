import request from "supertest";
import { app } from "../src/api/v1/app";

describe("GET /random-url", () => {
  it("should return 404", (done) => {
    request(app).get("/random-url").expect(404, done);
  });
});
