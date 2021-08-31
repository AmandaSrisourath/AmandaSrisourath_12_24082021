import React from "react";

function CustomTooltip (props) {
    const {active, payload} = props;

    if (active) {
        return (
            <div className="tooltip-container">
                <p className="tooltip-text"> {payload[0].value}kg</p>
                <p className="tooltip-text"> {payload[1].value}Kcal</p>
            </div>
        )
    }
    return null;
}

export default CustomTooltip;