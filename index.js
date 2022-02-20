const app = require("./src/config/server");
const dotenv = require("dotenv");
const mongodbConnect = require("./src/config/database");
const port = process.env.PORT || 7500;
dotenv.config({
  path: `${__dirname}/src/config/config.env`,
});

mongodbConnect.connect();

app.listen(port, () => {
  console.log(`App run on port ${port}`);
});
