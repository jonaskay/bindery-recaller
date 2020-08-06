const { Storage } = require("@google-cloud/storage");

const cleanup = require("./src/cleanup");

module.exports = {
  main: (event, context) => {
    const storage = new Storage();
    const bucket = storage.bucket(process.env.CLOUD_STORAGE_BUCKET);

    cleanup(event.data, bucket);
  },
};
