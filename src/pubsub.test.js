const { success } = require("./pubsub");

test("publishes a message to Pub/Sub", () => {
  const publish = jest.fn();
  const pubsub = { topic: jest.fn(() => ({ publish })) };

  const message = {
    project: {
      id: "42",
      name: "foo",
    },
    status: "success",
    timestamp: "1970-01-01T00:00:00.000Z",
  };
  const data = Buffer.from(JSON.stringify(message));

  success({ id: "42", name: "foo" }, "foo", pubsub, new Date("1970-01-01"));

  expect(publish).toHaveBeenCalledWith(data);
});
