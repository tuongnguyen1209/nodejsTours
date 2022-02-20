// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "tidb.42667d3c.2894d66b.ap-southeast-1.prod.aws.tidbcloud.com",
//   user: "root",
//   password: "tuong1209",
//   database: "asmnodejs",
//   port: "4000",
//   multipleStatements: true,
// });

// db.connect((err) => {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id" + db.threadId);
// });

// module.exports = db;

const mongoose = require("mongoose");
exports.connect = () => {
  const uri = process.env.DATABASE_STRING.replace(
    "<password>",
    process.env.PASSWORD
  );
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
    })
    .then(() => {
      console.log("Connect database sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
