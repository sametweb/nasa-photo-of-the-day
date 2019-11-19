import React from "react";

const Media = props => {
  return props.type === "image" ? (
    <img src={props.url} alt={props.title} />
  ) : props.type === "video" ? (
    <iframe
      title={props.title}
      width="560"
      height="315"
      src={props.url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  ) : null;
};

export default Media;
