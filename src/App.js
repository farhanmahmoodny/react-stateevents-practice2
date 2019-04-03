import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites.js'

class App extends React.Component {

  state = {
    beys: [],
    filtered: []
  }

  click = (bey) => {
    // this.setState({favorite: !this.state.favorite})
    bey.favorite = !bey.favorite
    console.log(bey)
    console.log(bey.favorite)
    this.filterBey()
  }

  componentDidMount() {
    fetch('http://localhost:4000/beys')
    .then(res => res.json())
    .then(beyData => this.setState({beys: beyData}))
  }

  filterBey = () => {
    console.log("We are here");
    this.setState({ filtered: this.state.beys.filter(bey => bey.favorite === true) })
  }

  render() {
    return (
      <div className="container">
      <BeyContainer beys={this.state.beys} click={this.click}/>
      <Favorites beys={this.state.filtered}/>
      </div>
    );
  }
};

export default App;
