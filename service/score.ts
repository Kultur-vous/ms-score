import {ScoreDAO} from "../dao/score"
import Score, {DataScore} from "../interface/score";

export class ScoreService {
    
    private scoreDAO = new ScoreDAO()

    async addScore(score: DataScore, id: String) {
        return this.scoreDAO.addScore(score, id)
    }

    async getScore(id: String) {
        return this.scoreDAO.getScore(id)
    }
}