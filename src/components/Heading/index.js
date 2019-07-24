import React from "react";

const Heading = props => {
    let type = "";
    let color = "";

    //types
    if (props.type === "1") {
        type = "heading-1";
    }
    if (props.type === "2") {
        type = "heading-2";
    }
    if (props.type === "3") {
        type = "heading-3";
    }
    if (props.type === "4") {
        type = "heading-4";
    }

    //color
    if (props.color === "light") {
        type += ` ${type}--light`
    }

    if (props.color === "dark") {
        type += ` ${type}--dark`
    }




    return (
        <h4 className={type}>{props.text}</h4>
    )
}

export default Heading;