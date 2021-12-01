import { DataScore } from "../interface/score";

const ScoreModel = require("../models/score");

export class ScoreDAO {
  async addScore(score: DataScore, id: String) {
    const dataScore = await ScoreModel.find(
      { id },
      { _id: 0 }
    );
    if (dataScore.length === 1) {
      score.createdAt = new Date()
      let newScore = dataScore[0].score;
      newScore.push(score);
      await ScoreModel.updateOne(
        { id },
        { score: newScore }
      );
      return {message: "Le score a bien était créer"};
    } else {
      score.createdAt = new Date()
      const addScore = ScoreModel.create({
        id,
        score,
      });
      return {message: "Le score a bien était créer"};
    }
  }

  async getScore(id: String) {
    const getScore = await ScoreModel.find({id},{ _id: 0 })
    if(getScore.length === 0) return ({error: "Vous n'avez pas encore de score"})
    return getScore
  }
}
