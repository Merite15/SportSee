import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User as UserModel } from "../models/user";
import { UserServicesMock } from "../services/api";
import { User as UserType } from "../types/User";

export const useGetUserData = (userId: number | string) => {
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const [data, setData] = useState<UserType>({
        id: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const userServices =  new UserServicesMock(userId) ;

                const store = {
                    id: userId,
                    userId: userId,
                    user: await userServices.getUser(userId),
                    activity: await userServices.getUserActivity(userId),
                };

                setData(new UserModel(store));

            } catch (error: any) {
                setError(error)
                error && navigate("/notFound");
            } finally {
                setLoading(false);
            }
        })();
    }, [userId, navigate]);

    return [data, loading, error];
}