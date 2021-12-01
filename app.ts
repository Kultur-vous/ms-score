const express = require("express");
import mongoConnection from "./db/clientMongo";
import auth from "./middleware/auth";
import { ScoreService } from "./service/score";
const cors = require("cors");

const app = express();
const _mongoConnection = mongoConnection;
const scoreService = new ScoreService();
require("dotenv").config();
app.use(cors());

//const bodyParser = require("body-parser");
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization, email, id"
  );

  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({ mesage: "Page d'accueil" });
});

app.post("/addScore", auth, async (req: any, res: any) => {
  console.log(req.body, req.headers);
  res.setHeader("Content-Type", "application/json");
  if (!req.headers.id) {
    res.status(400).send({ error: "Il manque un paramètre dans le headers" });
  }
  const createScore = await scoreService.addScore(req.body, req.headers.id);
  res.status(200).send(createScore);
});

app.get("/scores", async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");

  if (!req.headers.id) {
    res.status(400).send({ error: "Il manque un paramètre dans le headers" });
  }
  const getScore = await scoreService.getScore(req.headers.id);

  if (getScore.error) {
    res.status(400).send(getScore);
  }
  res.status(200).send(getScore);
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Server app listening on port 3002");
});
