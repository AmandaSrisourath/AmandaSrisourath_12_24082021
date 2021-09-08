import React from "react";
import {USER_ACTIVITY} from "../../Assets/data";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {format, parseISO, isValid} from "date-fns";
import CustomTooltip from "./CustomTooltip";

const ID = 12;

class UserActivity extends React.Component {
    componentDidMount() {
        const usersActivity = USER_ACTIVITY;
        const foundUserActivity = usersActivity.find(userActivity => userActivity.userId === ID);

        this.setState( {
            foundUserActivity:foundUserActivity,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            foundUserActivity: {
                sessions: [],
            }
        };
    }

    render() {
        const {foundUserActivity} = this.state;

        const legendFormatter = (value) => {
            return (
                <p className="legend-color">
                    {value === 'kilogram' ? "Poids (kg)" : "Calories brûlées (kCal)"}
                </p>
            )
        }

        return (
            <BarChart width={835} height={320} data={foundUserActivity.sessions} margin={{top: 112, right: 29, left: 43, bottom: 23,}}>
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

export default UserActivity;