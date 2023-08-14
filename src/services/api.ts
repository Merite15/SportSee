import { User as UserType } from "../types/User";
import { ChartFormater } from "../utils/formater";

export class UserServicesMock {
    id?: number | string;

    constructor(id: number | string) {
        this.id = id;
    }

    getUser = async (id: number | string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/user.json`);

            const data = await response.json();

            return data.find((user: UserType) => user.id == id);

        } catch (error) {
            return [];
        }
    };

    getUserActivity = async (id: number | string) => {
        try {

            const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/activities.json`);
            const data = await response.json();
            return ChartFormater.Bar(data.find((user: UserType) => user.userId == id));

        } catch (error) {
            return [];
        }
    };

    getUserAverage = async (id: number | string) => {
        try {

            const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/average_sessions.json`);
            const data = await response.json();
            return ChartFormater.Average(data.find((user: UserType) => user.userId == id));

        } catch (error) {
            return [];
        }
    };

    getUserPerformance = async (id: number | string) => {
        try {

            const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/user_performance.json`);

            const data = await response.json();

            return ChartFormater.Performance(data.find((user: UserType) => user.userId == id));
        } catch (error) {
            return [];
        }
    }

    getUserScore = async (id: number | string) => {
        try {

            const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/user.json`);

            const data = await response.json();

            return data.find((user: UserType) => user.id == id).todayScore

        } catch (error) {
            return [];
        }
    }

    getUserInfos = async (id: number | string) => {
        try {

            const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/user.json`);

            const data = await response.json();

            return ChartFormater.Info(data.find((user: UserType) => user.id == id).keyData)

        } catch (error) {
            return [];
        }
    }
}

export class UserServicesApi {
    id?: number | string;

    constructor(id: number | string) {
        this.id = id;
    }

    getUser = async (id: number | string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

            const data = await response.json();

            return data.data

        } catch (error) {
            return [];
        }
    };

    getUserActivity = async (id: number | string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}/activity`);

            const data = await response.json();

            return ChartFormater.Bar(data.data);

        } catch (error) {
            return [];
        }
    };

    getUserAverage = async (id: number | string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}/average-sessions`);

            const data = await response.json();

            return ChartFormater.Average(data.data);

        } catch (error) {
            return [];
        }
    };

    getUserPerformance = async (id: number | string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}/performance`);

            const data = await response.json();

            return ChartFormater.Performance(data.data);
        } catch (error) {
            return [];
        }
    }

    getUserScore = async (id: number | string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

            const data = await response.json();

            return data.data.todayScore ? data.data.todayScore : data.data.score

        } catch (error) {
            return [];
        }
    }

    getUserInfos = async (id: number | string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

            const data = await response.json();

            return ChartFormater.Info(data.data.keyData)
        } catch (error) {
            return [];
        }
    }
}