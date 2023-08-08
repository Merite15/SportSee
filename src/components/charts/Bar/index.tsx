import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import "./style.scss";


export const ChartBar = ({ data }: { data: Array<object> }) => {
    return (
        <div className='chartBar'>
            <div className="chartBar_head">
                <div className="chartBar_text">Activité quotidienne</div>

                <div className="chartBar_text">
                    <div className="legend">Poids (kg)</div>
                    <div className="legend">Calories brûlées (kCal)</div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="2 2" horizontal={true}
                        vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis orientation="right" axisLine={false} tickLine={false} />

                    <Tooltip
                        offset={40}
                        wrapperStyle={{ outline: "none", fontWeight: 600 }}
                        content={<CustomTooltip />}
                    />
                    <Bar dataKey="kilogram" name="kg" fill="black" radius={[10, 10, 0, 0]}
                        barSize={10} />
                    <Bar dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]}
                        barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

const CustomTooltip = (data: any) => {
    try {
        let kg = data.payload[0]['value'];
        let kCal = data.payload[1]['value'];

        return (
            <div className="custom-tooltip">
                <p className="label">{`${kg}kg`}</p>
                <p className="label">{`${kCal}Kcal`}</p>
            </div>
        );
    }
    catch {
        return null;
    }
};



