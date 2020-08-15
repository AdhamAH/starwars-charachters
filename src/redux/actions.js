import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CHARACTERS_FAILED,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_SUCCESS,
} from "./types";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestCharacters = () => (dispatch) => {
  dispatch({ type: REQUEST_CHARACTERS_PENDING });
  fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: REQUEST_CHARACTERS_SUCCESS, payload: data })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_CHARACTERS_FAILED, payload: error })
    );
};
