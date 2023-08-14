export interface BarFormater {
    userId: number,
    sessions: [
        {
            calories: number,
            day: Date,
            kilogram: number
        }
    ]
}