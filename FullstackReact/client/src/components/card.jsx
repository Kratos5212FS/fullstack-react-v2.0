import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card,deleteCard }) => {

  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card border border-dark">
        <img
          className="p-2 rounded mx-auto d-block"
          src={card.bizImage}
          width="250"
          height="200"
          alt={card.bizName}
        />
        <div className="card-body">
          <h5 className="card-title">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top border-dark pt-2">
            <b>Tel: </b>
            <a href="tel:{card.bizPhone}">{card.bizPhone}</a>
            <br />
            {card.bizAddress}
          </p>
          <Link className="btn btn-primary" to={`/my-cards/edit/${card._id}`}>Edit</Link>
          <button className="ml-2 btn btn-danger"    onClick={()=>{deleteCard(card._id)}}  >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;