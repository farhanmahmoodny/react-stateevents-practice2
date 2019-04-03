import React from "react";

class BeyCard extends React.Component {

  click = () => {
    this.props.click(this.props.bey)
  }

  render(){
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img src={this.props.bey.img}  onClick={this.click} />
      </div>
    );
  }
};

export default BeyCard;
