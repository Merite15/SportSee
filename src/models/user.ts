import { User as UserModel } from './../types/User';

export class User {
    id: number | string;
    user?: {}
    userInfos?: {};
    score?: string | number;
    todayScore?: string | number;
    performance?: {};
    average?: {};
    activity?: {};
    
    constructor(data: UserModel) {
        this.id = data.id
        this.user = data.user
        this.userInfos = data.userInfos
        this.performance = data.performance
        this.score = data.score,
        this.todayScore = data.todayScore,
        this.average = data.average
        this.activity = data.activity
    }
}