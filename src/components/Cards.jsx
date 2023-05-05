import React, { Fragment } from "react";
import "./cardData";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = ({ imageUrl, title, description }) => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <div className="card-container">
          <img src={imageUrl} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
          <button>Quiero saber más</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
