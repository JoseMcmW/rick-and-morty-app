import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: [] //Hacemos una copia, para filtrar en los favoritos y modificar la copia, y luego pisar al original conla copia.
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, action.payload],
                allCharactersFav: [...state.allCharactersFav, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== action.payload)
            }

        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites:
                action.payload === "allCharacters"
                ? [...state.allCharactersFav]
                : allCharactersFiltered
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav];
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}

export default reducer;