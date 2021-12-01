"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ScoreSchema = new Schema({
    id: String,
    score: [
        {
            value: Number,
            nbQuestion: Number,
            createdAt: Date,
            difficulty: String,
            theme: String,
        }
    ],
});
// Compile model from schema
var ScoreModel = mongoose.model("Score", ScoreSchema);
module.exports = ScoreModel;
