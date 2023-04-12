import { ADD_FAV, REMOVE_FAV } from "./action-types";

export const addFavorite = (character) => {
    return { type: ADD_FAV, payload: character }
}

export const deleteFavorite = (id) => {
    return { type: REMOVE_FAV, payload: id }
}