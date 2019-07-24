import React from "react";

//sprite file
import SvgIcons from "../../assets/img/sprite.svg";

const SvgIcon = (props) => {
    return (
        <svg className={props.svgClass}>
            {/* a little trick to load in svg items */}
            <use xlinkHref={`${SvgIcons}#${props.svgSelection}`} />
        </svg>
    )
}

export default SvgIcon;