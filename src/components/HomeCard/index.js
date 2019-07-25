import React from "react";

//components
import SvgIcon from "../../components/SvgIcon";

const HomeCard = props => {
    return (
        <div className="home">
            <img src={props.image} alt={props.alt} className="home__img" />
            <SvgIcon
                svgClass="home__like"
                svgSelection="icon-heart-full"
            />

            <h5 className="home__name">{props.headingText}</h5>

            <div className="home__location">
                <SvgIcon
                    svgSelection="icon-map-pin"
                />

                <p>{props.locationText}</p>
            </div>


            <div className="home__rooms">
                <SvgIcon
                    svgSelection="icon-profile-male"
                />

                <p>{props.roomsText}</p>
            </div>


            <div className="home__area">
                <SvgIcon
                    svgSelection="icon-profile-male"
                />
                <p>{props.areaText_1}<sup>{props.areaText_2}</sup></p>
            </div>

            <div className="home__price">
                <SvgIcon
                    svgSelection="icon-key"
                />
                <p>{props.priceText}</p>
            </div>

            <button className="btn home__button">Contact Realtor</button>

        </div>
    )
}

export default HomeCard