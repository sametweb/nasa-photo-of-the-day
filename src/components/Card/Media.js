import React from "react";

const Media = ({ type, url, title }) => {
  return type === "image" ? (
    <div className="image">
      <img src={url} alt={title} />
    </div>
  ) : type === "video" ? (
    <div className="video">
      <iframe
        title={title}
        width="400"
        height="225"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : null;
};

export default Media;
