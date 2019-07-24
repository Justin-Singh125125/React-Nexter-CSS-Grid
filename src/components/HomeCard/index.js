import React from "react";

//components
import SvgIcon from "../../components/SvgIcon";

const HomeCard = props => {
    return (
        <div className="home">
            <img src={props.image} alt={props.alt} className="home__img" />
            <SvgIcon />
        </div>
    )
}

export default HomeCard