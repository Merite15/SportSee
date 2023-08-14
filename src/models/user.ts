import { User as UserModel } from './../types/User';

export class User {
    id: string | number;
    userId: string | number
    user: {
        id: number,
        userInfos: {
            firstName: string,
            lastName: string,
            age: number
        }
        todayScore: number,
        keyData: {
            calorieCount: number,
            proteinCount: number,
            carbohydrateCount: number,
            lipidCount: number
        }
    };
    userInfos: {
        calorie: number,
        protein: number,
        glucide: number,
        lipid: number
    };
    activity: [
        {
            day: number,
            kilogram: number,
            calories: number
        }
    ];
    average: [{
        day: number,
        sessionLength: number,
    }];
    performance: [{
        kind: string,
        value: number
    }];
    score: number;
    todayScore: number;

    constructor(data: UserModel) {
        this.id = data.id
        this.userId = data.userId
        this.user = data.user
        this.userInfos = data.userInfos
        this.performance = data.performance
        this.score = data.score,
        this.todayScore = data.todayScore,
        this.average = data.average
        this.activity = data.activity
    }
}