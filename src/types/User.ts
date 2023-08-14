import { Average } from './Chart/Average';
import { ChartBar } from './Chart/Bar';
import { Performance } from './Chart/Performance';
import { NutrientInfos } from './Models/NutrientInfos';
import { PersonalUserInfos } from './Models/PersonalUserInfo';

export interface User {
    id: string | number,
    userId?: string | number
    user?: PersonalUserInfos
    userInfos?: NutrientInfos,
    activity?: ChartBar[],
    average?: Average[],
    performance?: Performance[],
    score: number,
    todayScore?: number
}