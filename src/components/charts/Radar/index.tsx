import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import { Performance } from "../../../types/Chart/Performance";

import "./style.scss";

export const ChartRadar = ({ data }: { data: Performance }) => {
    const polarGrid: boolean = false;

    return (
        <div className='chartRadar'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="66%" data={data}>
                    <PolarGrid radialLines={polarGrid} />
                    <PolarAngleAxis dataKey="kind" dy={4} tickSize={15} />

                    <Radar name="performance" dataKey="value" fill="red" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}