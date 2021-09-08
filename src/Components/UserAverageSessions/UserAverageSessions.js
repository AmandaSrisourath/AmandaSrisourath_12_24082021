import React from "react";
import {USER_AVERAGE_SESSIONS} from "../../Assets/data";
import {LineChart, XAxis, YAxis, Tooltip, Line} from "recharts";
import CustomTooltipAverage from "./CustomTooltipAverage";
import CustomCursor from "./CustomCurstor";

const ID = 12;
const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

class UserAverageSessions extends React.Component {
    componentDidMount() {
        const usersAverageSessions = USER_AVERAGE_SESSIONS;
        const foundUserAverageSessions = usersAverageSessions.find(userAverageSessions => userAverageSessions.userId === ID);

        this.setState( {
            foundUserAverageSessions:foundUserAverageSessions,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            foundUserAverageSessions: {
                sessions: [],
            },
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
        const {foundUserAverageSessions, tooltipX} = this.state;

        return (
            <LineChart
                width={258}
                height={263}
                data={foundUserAverageSessions.sessions}
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
                    domain={["auto"]}
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

export default UserAverageSessions;