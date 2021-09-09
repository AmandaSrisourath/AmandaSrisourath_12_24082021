import React from "react";
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "../Assets/data";
import calories from "../Assets/Icons/calories.png";
import protein from "../Assets/Icons/protein.png";
import carbs from "../Assets/Icons/carbs.png";
import fat from "../Assets/Icons/fat.png";
import UserActivity from "./UserActivity/UserActivity";
import UserPerformance from "./UserPerformance/UserPerformance";
import UserScore from "./UserScore/UserScore";
import UserAverageSessions from "./UserAverageSessions/UserAverageSessions";

const ID = 12;

class Profile extends React.Component {
    componentDidMount() {
        // const {id} = this.props.match.params;
        const usersData = USER_MAIN_DATA;
        const foundUserData = usersData.find(userData => userData.id === ID);

        const usersActivity = USER_ACTIVITY;
        const foundUserActivity = usersActivity.find(userActivity => userActivity.userId === ID);

        const usersAverageSessions = USER_AVERAGE_SESSIONS;
        const foundUserAverageSessions = usersAverageSessions.find(userAverageSessions => userAverageSessions.userId === ID);

        const usersPerformance = USER_PERFORMANCE;
        const foundUserPerformance = usersPerformance.find(userPerformance => userPerformance.userId === ID);

        this.setState( {
            foundUserData: foundUserData,
            foundUserActivity: foundUserActivity,
            foundUserAverageSessions: foundUserAverageSessions,
            foundUserPerformance:foundUserPerformance,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            foundUserData: {
                userInfos: {}, keyData: {}, todayScore: 0,
            },
            foundUserActivity: {
                sessions: [],
            },
            foundUserAverageSessions: {
                sessions: [],
            },
            foundUserPerformance: {
                kind: {},
                data: []
            },
        };
    }

    render() {
        const {foundUserData, foundUserActivity, foundUserAverageSessions, foundUserPerformance} = this.state;

        return (
            <div className="main">
                <h1>Bonjour <span className="name">{foundUserData.userInfos.firstName}</span></h1>
                <p className="congratulations">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="container">
                    <div>
                        <div className="activity background">
                            <h2 className="activity-title">Activité quotidienne</h2>
                            <UserActivity sessions={foundUserActivity.sessions} />
                        </div>

                        <div className="container-results">
                            <div className="average-sessions background">
                                <h2 className="average-sessions-title">Durée moyenne des sessions</h2>
                                <UserAverageSessions averageSessions={foundUserAverageSessions.sessions} />
                            </div>

                            <div className="performance background">
                                <UserPerformance performance={foundUserPerformance.data} kind={foundUserPerformance.kind} />
                            </div>

                            <div className="score background">
                                <h2 className="activity-title">Score</h2>
                                <UserScore todayScore={foundUserData.todayScore} />
                            </div>
                        </div>
                    </div>

                    <div className="container-results-detail">
                        <div className="results-details background">
                            <img className="results-details-icon" src={calories} alt="calories-icon" />
                            <div className="lost">
                                <h3>{foundUserData.keyData.calorieCount}Cal</h3>
                                <p>Calories</p>
                            </div>
                        </div>

                        <div className="results-details background">
                            <img className="results-details-icon" src={protein} alt="protein-icon"/>
                            <div className="lost">
                                <h3>{foundUserData.keyData.proteinCount}g</h3>
                                <p>Protéines</p>
                            </div>
                        </div>

                        <div className="results-details background">
                            <img className="results-details-icon" src={carbs} alt="carbs-icon"/>
                            <div className="lost">
                                <h3>{foundUserData.keyData.carbohydrateCount}g</h3>
                                <p>Glucides</p>
                            </div>
                        </div>

                        <div className="results-details background">
                            <img className="results-details-icon" src={fat} alt="fat-icon"/>
                            <div className="lost">
                                <h3>{foundUserData.keyData.lipidCount}g</h3>
                                <p>Lipides</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;