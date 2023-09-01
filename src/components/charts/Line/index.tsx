import { useFetchData } from '@/hook/useGetData';

import { useRef, useEffect, useState } from 'react';

import { UserSessionsFactory } from '@/factories/UserSessionsFactory';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, } from 'recharts';

import { ErrorFormat } from '@/utils/models/ErrorFormat';

import { Error } from '../../utils/Error'
import { Skeleton } from '../../utils/Skeleton';

import { ChartsProps } from '@/utils/models/ChartsProps';

import "./style.scss";

export const ChartLine = ({ userId }: ChartsProps) => {
    const app_mode = import.meta.env.VITE_APP_ENV;

    const url = app_mode === "local" ? `${import.meta.env.VITE_PUBLIC_URL}/average_sessions.json` : `${import.meta.env.VITE_API_URL}/${userId}/average-sessions`

    const averageDivRef = useRef<HTMLDivElement | null>(null);

    const [sessions, setSessions] = useState([]);

    const [data, isLoading, isError, error] = useFetchData(
        url,
        1500,
        UserSessionsFactory,
        'api'
    ) as [any, boolean, boolean, ErrorFormat]

    useEffect(() => {
        if (!isNaN(userId) && data) {
            setSessions(data.sessions);
        }
    }, [userId, data]);

    if (isLoading)
        return (
            <Skeleton />
        );

    if (isError)
        return (
            <Error name={error.name} message={error.message} />
        );

    const handleMouseMove = (e: any) => {
        if (e.isTooltipActive === true && averageDivRef.current) {
            let averageDiv = averageDivRef.current;
            let averageDivWidth = averageDiv.clientWidth;
            let coordinateXPercent = Math.round(
                (e.activeCoordinate.x / averageDivWidth) * 100
            );
            averageDiv.style.backgroundImage = `linear-gradient(
                  to right, 
                  #ff0000 ${coordinateXPercent}%, 
                  #d60000 ${coordinateXPercent}%
              )`;
        }
    };

    return (
        <div className='chartLine' ref={averageDivRef}>
            <h2>
                Durée moyenne des sessions
            </h2>

            <ResponsiveContainer width="100%" height="100%">

                <LineChart data={sessions} margin={{ bottom: 10 }} onMouseMove={handleMouseMove} >

                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"
                        strokeWidth={2.5} dot={false}
                        activeDot={{
                            stroke: "rgba(255, 255, 255, 0.3)",
                            strokeWidth: 12,
                            r: 5,
                        }}
                    />

                    <XAxis dataKey="sessionLength" />

                    <Tooltip cursor={false}
                        contentStyle={{ backgroundColor: "white" }}
                        wrapperStyle={{ outline: "none", fontWeight: 600, color: "black" }}
                        labelFormatter={value => `${value} min`}
                    />

                </LineChart>

            </ResponsiveContainer>

            <div className="legend">
                <p>L</p>
                <p>M</p>
                <p>M</p>
                <p>J</p>
                <p>V</p>
                <p>S</p>
                <p>D</p>
            </div>
        </div>
    );
};