import { User as UserType } from "../types/User";

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
}