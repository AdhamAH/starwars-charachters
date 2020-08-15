import {CHANGE_SEARCH_FIELD, REQUEST_CHARACTERS_FAILED, REQUEST_CHARACTERS_PENDING, REQUEST_CHARACTERS_SUCCESS} from './types'


const initialStateSearch = {
  searchField: "",
};

const initialStateCharacters ={
    isPending: true,
    characters:[],
    error: ''
}

export const searchCharacters = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestCharachters =(state=initialStateCharacters, action={})=>{
    switch(action.type){
        case REQUEST_CHARACTERS_PENDING:
            return{...state, isPending: true}
            case REQUEST_CHARACTERS_SUCCESS:
                return {...state, characters: action.payload, isPending:false }
                case REQUEST_CHARACTERS_FAILED:
                    return{...state, error: action.payload, isPending: false}
                    default:
                        return state

    }
}