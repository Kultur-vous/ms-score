const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ScoreSchema = new Schema({
  //TODO 
  // Definir les variables
});

// Compile model from schema
var ScoreModel = mongoose.model("Score", ScoreSchema);

module.exports = ScoreModel;
