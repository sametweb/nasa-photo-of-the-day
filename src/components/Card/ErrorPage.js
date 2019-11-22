import React from "react";
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ErrorPage = ({ nasa, setNasa }) => {
  return (
    <Alert color="danger">
      <h4 className="alert-heading">{nasa.errorMessage}!</h4>
      <p>We had trouble retrieving the information from NASA servers.</p>
      <hr />
      <p className="mb-0">
        Please try again with a different date selection. Remember, the earliest
        NASA Picture of the Day entry is on{" "}
        <a
          href="#"
          className="alert-link"
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
        </a>
      </p>
    </Alert>
  );
};

export default ErrorPage;
