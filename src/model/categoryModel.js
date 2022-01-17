const db = require("../config/database");

exports.getAll = (fun) => {
  const sql = "select id, name from category";

  db.query(sql, (err, data) => {
    if (err) throw err;
    fun(data);
  });
};
