export default interface Score {
    id: String
    score: DataScore[]
}

export interface DataScore {
    value: Number
    nbQuestion: Number
    createdAt: Date
    difficulty: String
    theme: String
}