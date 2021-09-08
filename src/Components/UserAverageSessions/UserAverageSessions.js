import React from "react";
import {USER_AVERAGE_SESSIONS} from "../../Assets/data";
import {LineChart, XAxis, YAxis, Tooltip, Line} from "recharts";
import CustomTooltipAverage from "./CustomTooltipAverage";
import {format, isValid, parseISO} from "date-fns";
import CustomCursor from "./CustomCurstor";

const ID = 12;

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
                // days: {Lundi: 1, Mardi: 2, Mercredi: 3, Jeudi: 4, Vendredi: 5, Samedi: 6, Dimanche: 7},
                // days: {1: "Lundi", 2: "Mardi", 3: "Mercredi", 4: "Jeudi", 5: "Vendredi", 6: "Samedi", 7: "Dimanche"}
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

        // const days = {Lundi: 1, Mardi: 2, Mercredi: 3, Jeudi: 4, Vendredi: 5, Samedi: 6, Dimanche: 7}
        // console.log(days["Mardi"]);

        // const days = foundUserAverageSessions.sessions.day;
        // console.log(days)

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
                    // tickMargin={19}

                    // tickFormatter={(str) => {
                    //     const day = parseISO(str);
                    //     return isValid(day) ? format(day, "IEEE") : null;
                    // }}

                    // tickFormatter={(str) => {
                    //     // const days = {Lundi: 1, Mardi: 2, Mercredi: 3, Jeudi: 4, Vendredi: 5, Samedi: 6, Dimanche: 7};
                    //     // return days[""];
                    //     console.log(foundUserAverageSessions.days);
                    // }}
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

export default UserAverageSessions;