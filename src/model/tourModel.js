const db = require("../config/database");

exports.getAll = (fun) => {
  const sql =
    "select tours.id idtour, tours.name tourname, price,sortdescription,image,time,departure,destination,ct.name category,vehicle from tours,category ct where tours.id_cate=ct.id";

  db.query(sql, (err, data) => {
    if (err) throw err;
    fun(data);
  });
};

exports.getOne = async (id, fun) => {
  const sql = `select tours.id idtour, tours.name tourname, price,sortdescription,description,image,time,departure,destination,ct.name category,vehicle from tours,category ct where tours.id_cate=ct.id and tours.id=${id}`;

  db.query(sql, (err, data) => {
    if (err) throw err;
    fun(data);
  });
};

exports.getByCate = (id, fun) => {
  const sql = `select tours.id idtour, tours.name tourname, price,sortdescription,image,time,departure,destination,ct.name category,vehicle from tours,category ct where tours.id_cate=ct.id and tours.id_cate=${id} `;

  db.query(sql, (err, data) => {
    if (err) throw err;
    fun(data);
  });
};
