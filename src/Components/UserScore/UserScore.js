import React from "react";
import {RadialBarChart, RadialBar} from "recharts";

class UserScore extends React.Component {
    renderCustomizedLabel = ({ cx, cy }) => {
        const {todayScore} = this.props.foundUserScore;

        return (
            <>
                <text fill="#282D30" fontSize={26} fontWeight={700} x={cx} y={cy - 20} dominantBaseline="central" textAnchor="middle" >
                    {todayScore * 100}%
                </text>
                <text fill="#74798C" fontSize={16} fontWeight={500} x={cx} y={cy + 16} textAnchor="middle">
                    de votre
                </text>
                <text fill="#74798C" fontSize={16} fontWeight={500} x={cx} y={cy + 40} textAnchor="middle">
                    objectif
                </text>
            </>
        )
    }

    render() {
        const {foundUserScore} = this.props;

        return (
            <RadialBarChart
                width={258}
                height={263}
                data={[foundUserScore]}
                outerRadius={80}
                innerRadius={70}
                startAngle={90}
                endAngle={140}
            >
                <svg viewBox="0 0 100 100" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="26"/>
                </svg>

                <RadialBar
                    dataKey='todayScore'
                    label={this.renderCustomizedLabel}
                    cornerRadius={50}
                    fill={'#FF0000'}
                />
            </RadialBarChart>
        )
    }
}

export default UserScore;