const mongoose = require("mongoose")
require('dotenv').config();
//const mongoUri =
  //`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@scores.pnxzv.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
  const mongoUri =
  `mongodb+srv://admin:7szPPLTsFXd3Yxs@scores.tnzut.mongodb.net/scores?retryWrites=true&w=majority`;
  
const uri = encodeURI(String(mongoUri));
const mongoConnection = mongoose.connect(uri);

export default mongoConnection