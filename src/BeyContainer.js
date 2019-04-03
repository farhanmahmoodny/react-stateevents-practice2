import React from "react";
import BeyCard from './BeyCard.js';

class BeyContainer extends React.Component {

  render() {
    let beys = this.props.beys.map(bey => (
      <BeyCard key={bey.id} bey={bey} click={this.props.click}/>
    ))
    return (
      <div className="index">
        <h1>Index</h1>
        {beys}
      </div>
    );
  }
}

export default BeyContainer;
