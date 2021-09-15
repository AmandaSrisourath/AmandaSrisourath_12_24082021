import React, { useEffect } from "react";

/**
 * Customize user average sessions tooltip
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */

function CustomTooltipAverage (props) {
    const { active, payload, coordinate, updateTooltipX } = props;

    useEffect(() => {
        if (coordinate.x) {
            updateTooltipX(coordinate.x);
        }
    }, [coordinate.x]);

    if (active) {
        return (
            <>
                <div className="tooltip-average-container">
                    <p className="tooltip-average-text"> {payload[0].value} min</p>
                </div>
            </>
        )
    }
    return null;
}

export default CustomTooltipAverage;