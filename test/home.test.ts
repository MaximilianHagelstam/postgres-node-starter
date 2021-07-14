import request from "supertest";
import { app } from "../src/app";

describe("GET /", () => {
  it("should return 200", (done) => {
    request(app).get("/api/v1/post/get-posts").expect(200, done);
  });
});
