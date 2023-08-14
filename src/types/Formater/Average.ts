export interface AverageFormater {
    userId: number,
    sessions: [
        {
            day: number,
            sessionLength: number
        }
    ]
}