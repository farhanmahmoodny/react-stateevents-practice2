import React, { Component } from "react";
import BeyCard from './BeyCard.js';

export default class Favorites extends Component {

  render() {
    let beys = this.props.beys.map(bey => (
      <BeyCard key={bey.id} bey={bey} />
    ))
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beys}
      </div>
    );
  }
}
