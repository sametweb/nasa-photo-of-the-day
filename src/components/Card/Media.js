import React from "react";

const Media = props => {
  return props.type === "image" ? (
    <div className="image">
      <img src={props.url} alt={props.title} />
    </div>
  ) : props.type === "video" ? (
    <div className="video">
      <iframe
        title={props.title}
        width="560"
        height="315"
        src={props.url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : null;
};

export default Media;
