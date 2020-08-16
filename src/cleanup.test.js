const cleanup = require("./cleanup");

const { success } = require("./pubsub");
jest.mock("./pubsub");

const deleteFiles = jest.fn(() => new Promise((resolve) => resolve()));

const bucket = { deleteFiles };
const message = {
  project: {
    id: "42",
    name: "foo",
  },
};
const data = Buffer.from(JSON.stringify(message));

beforeEach(() => {
  cleanup(data, bucket);
});

test("deletes objects inside a folder", () => {
  expect(deleteFiles).toHaveBeenCalledWith({
    delimiter: "foo/index.html",
    prefix: "foo/",
  });
});

test("sends a success message", () => {
  expect(success).toHaveBeenCalledWith({ id: "42", name: "foo" });
});
