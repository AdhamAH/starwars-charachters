import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./components/search-box/search-box.styles.css";
import { CardList } from "./components/card-list/cards-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
      .then(response => response.json())
      .then(names => this.setState({ characters: names }));
  }
  handleChange = search => {
    this.setState({ searchField: search.target.value });
  };

  render() {
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <h1 className="">StarWars Characters</h1>
        <SearchBox
          className="search"
          placeholder="search character"
          handleChange={this.handleChange}
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
