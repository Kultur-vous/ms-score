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

app.get("/", (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({ mesage: "Page d'accueil" });
});

app.post("/addScore", auth, async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  if(!req.headers.id) {res.status(400).send({error: "Il manque un paramètre dans le headers"})}
  const createScore = await scoreService.addScore(req.body, req.headers.id);
  res.status(200).send(createScore)
});

app.get('/scores', auth, async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  if(!req.headers.id) {
    res.status(400).send({error: "Il manque un paramètre dans le headers"})
  }
  const getScore = await scoreService.getScore(req.headers.id)

  if(getScore.error) {
    res.status(400).send(getScore)
  }
  res.status(200).send(getScore)
})

app.listen(process.env.PORT || 3002, () => {
  console.log("Server app listening on port 3002");
});
