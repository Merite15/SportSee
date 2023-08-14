import { Average } from '../types/Chart/Average';
import { ChartBar } from '../types/Chart/Bar';
import { Performance } from '../types/Chart/Performance';
import { NutrientInfos } from '../types/Models/NutrientInfos';
import { PersonalUserInfos } from '../types/Models/PersonalUserInfo';
import { User as UserModel } from './../types/User';

export class User {
    id: string | number;
    userId?: string | number
    user?: PersonalUserInfos;
    userInfos?: NutrientInfos;
    activity?: ChartBar[];
    average?: Average[];
    performance?: Performance[];
    score: number;
    todayScore?: number;

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