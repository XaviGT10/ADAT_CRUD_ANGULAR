const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Formula1 = new Schema({
  id: String,
  team: String,
  championships: String,
  drivers: String,
  foundation_date: Date
});

module.exports = mongoose.model("Formula1", Formula1);
