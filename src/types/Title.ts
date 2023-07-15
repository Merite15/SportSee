export interface Title {
    data: {
        id: number;
        keyData?: {
            calorieCount: number
            carbohydrateCount: number
            lipidCount: number
            proteinCount: number
        };
        todayScore?: string;
        userInfos?: {
            firstName: string,
            lastName: string,
            age: number
        };
    }
}