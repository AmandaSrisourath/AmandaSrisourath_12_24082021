import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {format, parseISO, isValid} from "date-fns";
import CustomTooltip from "./CustomTooltip";
import PropTypes from "prop-types";

class UserActivity extends React.Component {
    render() {
        const {sessions} = this.props;
        const legendFormatter = (value) => {
            return (
                <p className="legend-color">
                    {value === 'kilogram' ? "Poids (kg)" : "Calories brûlées (kCal)"}
                </p>
            )
        }

        return (
            <BarChart width={835} height={320} data={sessions} margin={{ top: 112, right: 29, left: 43, bottom: 23 }}>
                <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                />

                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={16}
                    tickFormatter={(str) => {
                        const date = parseISO(str);
                        return isValid(date) ? format(date, "d") : null;
                    }}
                />

                <YAxis
                    dataKey="kilogram"
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                    orientation="right"
                    yAxisId="kilogram"
                    domain={["auto"]}
                    tickMargin={40}
                />

                <YAxis
                    dataKey="calories"
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                    orientation="left"
                    yAxisId="calories"
                    hide
                />

                <Tooltip
                    content={<CustomTooltip />}
                    offset={20}
                />

                <Legend
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    formatter={legendFormatter}
                    wrapperStyle={{ top: 20 }}
                />

                <Bar
                    yAxisId="kilogram"
                    dataKey="kilogram"
                    fill="#282D30"
                    barSize={7}
                    radius={[3, 3, 0, 0]}
                />

                <Bar
                    yAxisId="calories"
                    dataKey="calories"
                    fill="#E60000"
                    barSize={7}
                    radius={[3, 3, 0, 0]}
                />

            </BarChart>
        )
    }
}

UserActivity.propTypes = {
    sessions: PropTypes.arrayOf(PropTypes.exact({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    })).isRequired
};

export default UserActivity;