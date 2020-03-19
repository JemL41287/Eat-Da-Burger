// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(colName, valOfCol, cb) {
    orm.insertOne("burgers", colName, valOfCol, function(res) {
      cb(res);
    });
  },
  updateOne: function(valOfCol, condition, cb) {
    orm.updateOne("burgers", valOfCol, condition, function(res) {
      cb(res);
    });
  },
};


module.exports = burger;