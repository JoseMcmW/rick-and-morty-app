import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

export const addFavorite = (character) => {
    return { type: ADD_FAV, payload: character }
}

export const deleteFavorite = (id) => {
    return { type: REMOVE_FAV, payload: id }
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
}