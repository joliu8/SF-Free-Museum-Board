import React from "react";

const Card = (props) => {
    return (
        <div className = "card">
            <h3>{props.museum}</h3>
            <img src={props.image} alt={props.museum} />
            <h4>{props.address}</h4>
            <h6>{props.weekdays}</h6>
            <h6 className = "description">{props.description}</h6>

            <button
                onClick={() => window.open(props.website, '_blank')}
                type="button"
            >
                Website
            </button>
        </div>
    )
}

export default Card;
