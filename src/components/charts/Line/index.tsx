import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import { useRef } from "react"
import { Average } from "../../../types/Chart/Average";

import "./style.scss";

export const ChartLine = ({ data }: { data?: Average[] }) => {
    /* `const averageDivRef = useRef<HTMLDivElement | null>(null);` is creating a ref object called
    `averageDivRef` using the `useRef` hook. The ref object is initialized with a value of `null`
    and has a type annotation of `HTMLDivElement | null`. */
    const averageDivRef = useRef<HTMLDivElement | null>(null);

    /**
     * The function `handleMouseMove` updates the background gradient of an element based on the mouse
     * position.
     * @param {any} e - The parameter `e` is an event object that contains information about the mouse
     * move event.
     */
    const handleMouseMove = (e : any) => {
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
        <div className='chartLine'  ref={averageDivRef}>
            <h2>
                Durée moyenne des sessions
            </h2>

            <ResponsiveContainer width="100%" height="100%">

                <LineChart data={data} margin={{ bottom: 10 }} onMouseMove={handleMouseMove} >

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
    )
}