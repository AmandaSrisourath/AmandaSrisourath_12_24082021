import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import PropTypes from "prop-types";

/**
 * Create radar chart for user performance
 */
class UserPerformance extends React.Component {
    render() {
        const { performance, kind } = this.props;
        const kindValue = kind;

        return (
            <RadarChart outerRadius={70} width={258} height={263} data={performance}>
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

UserPerformance.propTypes = {
    performance: PropTypes.arrayOf(PropTypes.exact({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
    })).isRequired,
    kind: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default UserPerformance;