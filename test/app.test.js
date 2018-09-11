const app = require("../server/app.js");
const mongoose = require("../database/database.js");
const request = require("supertest");

if (process.env.NODE_ENV === "test") {
  mongoose.connection.close(function() {
    console.log("Mongoose connection disconnected");
  });
}
afterAll(() => {
  mongoose.disconnect();
});

describe("Test the root path", () => {
  test(
    "It should response the GET method",
    async done => {
      await request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    },
    10000
  );
});
