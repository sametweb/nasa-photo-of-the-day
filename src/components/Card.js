import React from "react";
import Media from "./Card/Media";
import Date from "./Card/Date";

const Card = props => {
  console.log(props);
  return (
    <div className="card">
      <h2>{props.nasa.title}</h2>
      <Date date={props.nasa.date} />
      <div className="media">
        <p>{props.nasa.explanation}</p>
        <Media
          url={props.nasa.url}
          title={props.nasa.title}
          type={props.nasa.media_type}
        />
      </div>
    </div>
  );
};

export default Card;
