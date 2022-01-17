const app = require("./src/config/server");
const variable = require("./src/config/var");

app.listen(variable.port, () => {
  console.log(`App run on port ${variable.port}`);
});
