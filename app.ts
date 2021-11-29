const express = require("express")
import { ScoreService } from "./service/score";
import mongoConnection from "./db/clientMongo";
import Score from "./interface/score"
import jwt from "jsonwebtoken";

const app = express();
const _mongoConnection = mongoConnection;
const scoreService = new ScoreService();
require("dotenv").config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


//TODO

/* Port en production */
app.get('/', (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({mesage:"Page d'accueil"})
})

app.listen(process.env.PORT || 3002, () => {
  console.log("Server app listening on port 3002");
});
