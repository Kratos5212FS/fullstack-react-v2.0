import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService, { deleteCard } from "../services/cardService";
import Card from "./card";

class MyCards extends Component {
  constructor() {
    super();
    this.delCard = this.delCard.bind(this);
  }

  delCard(id) {
    deleteCard(id)
      .then((data) => {
        var filteredCards = this.state.cards.filter((x) => x._id !== id);

        this.setState({ cards: filteredCards });
      })
      .catch(() => {});
  }

  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeader titleText="My Cards Page" />
        <div className="row">
          <div className="col-12">
            <p>Your cards in the list below...</p>
          </div>
        </div>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary btn-md btn-outline"
            onClick={(event) => (window.location.href = "/create-card")}
          >
            Create new card
          </button>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => (
              <Card key={card._id} card={card} deleteCard={this.delCard} />
            ))}
        </div>
      </div>
    );
  }
}

export default MyCards;
