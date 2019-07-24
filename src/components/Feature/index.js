import React from "react";

//components
import SvgIcon from "../SvgIcon";
import Heading_4 from "../Heading-4";

//sprite
import SvgIcons from "../../assets/img/sprite.svg";

const Feature = props => {
    return (
        <div className="feature">
            <SvgIcon
                svgClass="feature__icon"
                svgSelection={props.svgSelection}
            />
            <Heading_4 text={props.headingText} />
            <p className="feature_text">{props.featureText}</p>
        </div>
    )
}

export default Feature;