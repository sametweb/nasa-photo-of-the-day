import React from "react";

const Date = ({ date }) => {
  //prettier-ignore
  let months = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December'};
  const monthReplacer = monthNumber => {
    return months[`${monthNumber}`];
  };

  let finalDateFormat = "";

  if (date) {
    let dateArray = date.split("-");
    let dateObj = { y: dateArray[0], m: dateArray[1], d: dateArray[2] };
    dateObj.m = monthReplacer(dateObj.m);
    finalDateFormat = `${dateObj.m} ${dateObj.d}, ${dateObj.y}`;
  }

  return <p className="date">{finalDateFormat}</p>;
};

export default Date;
