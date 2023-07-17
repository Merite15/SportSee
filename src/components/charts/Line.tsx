import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';

export const ChartLine = ({ data }: { data: Array<object> }) => {        
    return (
        <div className='chartLine'>
            <h2>
                Durée moyenne des sessions
            </h2>

            <ResponsiveContainer width="100%" height="100%">

                <LineChart data={data} margin={{ bottom: 10 }} >

                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"
                        strokeWidth={2.5} dot={false}
                    />

                    <XAxis dataKey="sessionLength" />

                    <Tooltip cursor={false}
                        wrapperStyle={{ outline: "none", fontWeight: 600 }}
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
    )
}