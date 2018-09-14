const app = require("../server/app.js");
const mongoose = require("../database/database.js");
const request = require("supertest");
// jest.setTimeout(30000);
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

describe("/reviews response body", () => {
  test("It should respond with an object", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual({});
    expect(response.statusCode).toBe(200);
  });
});

// describe("GET /api", () => {
//   test("should get all companies", async done => {
//     await request(app)
//       .get("/reviews")
//       .expect(200)
//       .expect(res => {
//         expect(res.body.length).toBe(500);
//       })
//       .end(done);
//   });
// });
