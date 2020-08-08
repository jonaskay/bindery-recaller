const { PubSub } = require("@google-cloud/pubsub");

const SUCCESS = "success";

module.exports = {
  success: (
    project,
    topic = process.env.PUBSUB_TOPIC,
    pubsub = new PubSub(),
    now = new Date()
  ) => {
    const timestamp = now.toISOString();
    const data = JSON.stringify({
      project: project,
      status: SUCCESS,
      timestamp,
    });
    const dataBuffer = Buffer.from(data);

    return pubsub.topic(topic).publish(dataBuffer);
  },
};
