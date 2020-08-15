import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./components/search-box/search-box.styles.css";
import { CardList } from "./components/card-list/cards-list.components";
import { SearchBox } from "./components/search-box/search-box.component";
import Scroll from "./components/scroll/scroll.component";
import { setSearchField, requestCharacters } from "./redux/actions";
import { connect } from "react-redux";

class App extends React.Component {
  

  componentDidMount() {
    this.props.onRequestCharacters()
  }
  render() {
    const {searchField, handleChange, characters} = this.props
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <h1 className="">StarWars Characters</h1>
        <SearchBox
          className="search"
          placeholder="search character"
          handleChange={handleChange}
        />
        <Scroll>
          <CardList characters={filteredCharacters} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCharacters.searchField,
    characters: state.requestCharachters.characters,
    isPending : state.requestCharachters.isPending,
    error: state.requestCharachters.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCharacters: ()=> dispatch(requestCharacters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
