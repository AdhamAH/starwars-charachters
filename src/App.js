import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/cards-list.components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
      .then(response => response.json())
      .then(characters => this.setState({ characters: characters }));
  }

  render() {
    return (
      <div className="App">
        <CardList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
