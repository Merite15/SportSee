import { User as UserType } from "../types/User";
import { ChartFormater } from "../utils/Formater";

const URL_DEV = "http://localhost:5173/mock"

export class UserServicesMock {
    id?: number | string;

    constructor(id: number | string) {
        this.id = id;
    }

    getUser = async (id: number | string) => {
        try {
            const response = await fetch(`${URL_DEV}/user.json`);

            const data = await response.json();

            return data.find((user: UserType) => user.id == id);

        } catch (error) {
            return [];
        }
    };

    getUserActivity = async (id: number | string) => {
        try {

            const response = await fetch(`${URL_DEV}/activities.json`);
            const data = await response.json();
            return ChartFormater.Bar(data.find((user: UserType) => user.userId == id));

        } catch (error) {
            return [];
        }
    };

    getUserAverage = async (id: number | string) => {
        try {

            const response = await fetch(`${URL_DEV}/average_sessions.json`);
            const data = await response.json();
            return ChartFormater.Average(data.find((user: UserType) => user.userId == id));

        } catch (error) {
            return [];
        }
    };

    getUserPerformance = async (id: number | string) => {
        try {

            const response = await fetch(`${URL_DEV}/user_performance.json`);

            const data = await response.json();

            return ChartFormater.Performance(data.find((user: UserType) => user.userId == id));
        } catch (error) {
            return [];
        }
    }

    getUserScore = async (id: number | string) => {
        try {

            const response = await fetch(`${URL_DEV}/user.json`);

            const data = await response.json();

            return data.find((user: UserType) => user.id == id).todayScore

        } catch (error) {
            return [];
        }
    }
}