import React from "react";
import {LineChart, XAxis, YAxis, Tooltip, Line} from "recharts";
import CustomTooltipAverage from "./CustomTooltipAverage";
import CustomCursor from "./CustomCurstor";
import PropTypes from "prop-types";

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/**
 * Create line chart for user average sessions
 */

class UserAverageSessions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipX: null,
        };
    }

    updateTooltipX = (x) => {
        if (x) {
            this.setState({
                tooltipX: x,
            })
        }
    }

    render() {
        const {tooltipX} = this.state;
        const {averageSessions} = this.props;

        return (
            <LineChart
                width={258}
                height={263}
                data={averageSessions}
                margin={{ top: 77, right: 8, left: 8, bottom: 16 }}
            >
                <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(str) => weekDays[str - 1]}
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)'}}
                />

                <YAxis
                    dataKey="sessionLength"
                    domain={[0, "auto"]}
                    hide
                />

                <Tooltip
                    content={<CustomTooltipAverage updateTooltipX={this.updateTooltipX} />}
                    cursor={<CustomCursor x={tooltipX} />}
                />

                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        )
    }
}

UserAverageSessions.propTypes = {
    averageSessions: PropTypes.arrayOf(PropTypes.exact({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
    })).isRequired
};

export default UserAverageSessions;