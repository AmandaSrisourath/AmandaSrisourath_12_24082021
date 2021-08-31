import React from "react";
import {USER_MAIN_DATA} from "../Assets/data";
import calories from "../Assets/Icons/calories.png";
import protein from "../Assets/Icons/protein.png";
import carbs from "../Assets/Icons/carbs.png";
import fat from "../Assets/Icons/fat.png";
import UserActivity from "./UserActivity";

const ID = 12;

class Profile extends React.Component {
    componentDidMount() {
        // const {id} = this.props.match.params;
        const usersData = USER_MAIN_DATA;
        const foundUserData = usersData.find(userData => userData.id === ID);

        if (usersData) {
            this.setState( {
                foundUserData: foundUserData,
            })
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            foundUserData: {
                userInfos: {}, keyData: {},
            },
        };
    }

    render() {
        const {foundUserData} = this.state;

        return (
            <div className="main">
                <h1>Bonjour <span className="name">{foundUserData.userInfos.firstName}</span></h1>
                <p className="congratulations">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="container">
                    <div>
                        <div className="activity background">
                            <h2 className="activity-title">Activité quotidienne</h2>

                            <UserActivity />
                        </div>

                        <div className="container-results">
                            <div className="average-sessions background">
                            </div>

                            <div className="performance background">
                            </div>

                            <div className="score background">
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