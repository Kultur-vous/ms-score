import Score, { DataScore } from "../interface/score";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ScoreModel = require("../models/score");

export class ScoreDAO {
  async addScore(score: DataScore, id: String) {
    const dataScore = await ScoreModel.find(
      { id },
      { _id: 0 }
    );
    if (dataScore.length === 1) {
      let newScore = dataScore[0].score;
      newScore.push(score);
      await ScoreModel.updateOne(
        { id },
        { score: newScore }
      );
      return dataScore;
    } else {
      const addScore = ScoreModel.create({
        id,
        score,
      });
      return addScore;
    }
  }
}
