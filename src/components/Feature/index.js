import React from "react";

//components
import SvgIcon from "../SvgIcon";
import Heading from "../Heading";

const Feature = props => {
    return (
        <div className="feature">
            <SvgIcon
                svgClass="feature__icon"
                svgSelection={props.svgSelection}
            />
            <Heading type="4" color="dark" text={props.headingText} />
            <p className="feature__text">{props.featureText}</p>
        </div>
    )
}

export default Feature;