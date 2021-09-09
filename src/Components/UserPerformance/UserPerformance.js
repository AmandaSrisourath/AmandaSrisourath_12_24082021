import React from "react";
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from "recharts";

class UserPerformance extends React.Component {
    render() {
        const {foundUserPerformance} = this.props;
        const kindValue = foundUserPerformance.kind;

        return (
            <RadarChart outerRadius={70} width={258} height={263} data={foundUserPerformance.data}>
                <PolarGrid radialLines={false} />

                <PolarAngleAxis
                    dataKey="kind"
                    tick={({ payload, ...params }) => (
                        <g className="recharts-layer recharts-polar-angle-axis-tick">
                            <text {...params} fill='white'>
                                <tspan>{kindValue[payload.value]}</tspan>
                            </text>
                        </g>
                    )}
                />

                <PolarRadiusAxis
                    axisLine={false}
                    tick={false}
                    tickCount={6}
                />

                <Radar
                    dataKey="value"
                    fill="#FF0101"
                    fillOpacity={0.7}
                />
            </RadarChart>
        )
    }
}

export default UserPerformance;