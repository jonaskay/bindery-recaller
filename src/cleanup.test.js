const cleanup = require("./cleanup");

test("deletes objects inside a folder", () => {
  const deleteFiles = jest.fn();
  const bucket = { deleteFiles };

  const message = {
    project: {
      id: "42",
      name: "foo",
    },
  };
  const data = Buffer.from(JSON.stringify(message));

  cleanup(data, bucket);

  expect(deleteFiles).toHaveBeenCalledWith({ prefix: "foo/" });
});
