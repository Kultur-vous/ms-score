const express = require("express");
import { ScoreService } from "./service/score";
import mongoConnection from "./db/clientMongo";
import Score, {DataScore} from "./interface/score";
import jwt from "jsonwebtoken";
import auth from "./middleware/auth";

const app = express();
const _mongoConnection = mongoConnection;
const scoreService = new ScoreService();
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(express.json());

const score = {
  value: 6,
  nbQuestion: 20,
  createdAt: new Date(),
  difficulty: "Facile",
  theme: "Divers",
};

app.get("/", auth, async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  const createScore = await scoreService.addScore(score, req.headers.id);
  res.status(200).send(createScore)
  //console.log(createScore);
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Server app listening on port 3002");
});
