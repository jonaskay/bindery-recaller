const { success } = require("./pubsub");

module.exports = (data, bucket) => {
  const message = JSON.parse(Buffer.from(data, "base64").toString());
  const { project } = message;

  bucket
    .deleteFiles({
      delimiter: `${project.name}/index.html`,
      prefix: `${project.name}/`,
    })
    .then(() => success(project));
};
