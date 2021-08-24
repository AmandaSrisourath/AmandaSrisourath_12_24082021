import React from "react";
import yoga from "../Assets/Icons/yoga.png";
import swimming from "../Assets/Icons/swimming.png";
import biking from "../Assets/Icons/biking.png";
import gym from "../Assets/Icons/gym.png";
import copyright from "../Assets/copiryght.png";

class SideBart extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="nav-icons">
                    <img className="icon" src={yoga} alt="yoga-icon"/>
                    <img className="icon" src={swimming} alt="swimming-icon"/>
                    <img className="icon" src={biking} alt="biking-icon"/>
                    <img className="icon" src={gym} alt="gym-icon"/>
                </div>

                <div className="footer">
                    <img className="copyright" src={copyright} alt="copyright" />
                </div>
            </div>
        )
    }
}

export default SideBart;