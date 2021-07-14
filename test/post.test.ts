import request from "supertest";
import { app } from "../src/app";

describe("GET /post/get-posts", () => {
  it("should return 200", (done) => {
    request(app).get("/post/get-posts").expect(200, done);
  });
});
