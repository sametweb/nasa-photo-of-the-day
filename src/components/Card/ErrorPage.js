import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ErrorPage = ({ nasa, setNasa }) => {
  return (
    <Card body inverse color="danger">
      <CardTitle>{nasa.errorMessage}</CardTitle>
      <CardText>
        We had trouble retrieving the information from NASA servers. Please try
        again with a different date selection. Remember, the earliest NASA
        Picture of the Day entry is on
        <div
          onClick={() =>
            setNasa({
              ...nasa,
              date: new Date("1995-06-17"),
              loading: true,
              error: false
            })
          }
        >
          June 16, 1995!
        </div>
      </CardText>
    </Card>
  );
};

export default ErrorPage;
