import { createAction } from "redux-actions";
import api from "../../../services/api";

export const REQUEST_COCKTAIL_CATEGORY = 'REQUEST_COCKTAIL_CATEGORY';
const requestCocktailCategory = createAction(REQUEST_COCKTAIL_CATEGORY);

export const RECEIVE_COCKTAIL_CATEGORY = 'RECEIVE_COCKTAIL_CATEGORY';
const receiveCocktailCategory = createAction(RECEIVE_COCKTAIL_CATEGORY);

export const REQUEST_COCKTAIL_DETAIL = 'REQUEST_COCKTAIL_DETAIL';
const requestCocktailDetail = createAction(REQUEST_COCKTAIL_DETAIL);

export const RECEIVE_COCKTAIL_DETAIL = 'RECEIVE_COCKTAIL_DETAIL';
const receiveCocktailDetail = createAction(RECEIVE_COCKTAIL_DETAIL);

export const REQUEST_COCKTAIL_FILTER = 'REQUEST_COCKTAIL_FILTER';
const requestCocktailFilter = createAction(REQUEST_COCKTAIL_FILTER);

export const RECEIVE_COCKTAIL_FILTER = 'RECEIVE_COCKTAIL_FILTER';
const receiveCocktailFilter = createAction(RECEIVE_COCKTAIL_FILTER);

export const REQUEST_COCKTAIL_SEARCH = 'REQUEST_COCKTAIL_SEARCH';
const requestCocktailSearch = createAction(REQUEST_COCKTAIL_SEARCH);

export const RECEIVE_COCKTAIL_SEARCH = 'RECEIVE_COCKTAIL_SEARCH';
const receiveCocktailSearch = createAction(RECEIVE_COCKTAIL_SEARCH);


export function loadCocktailCategory(category) {
    return (dispatch) => {
        api
            .drinkCategory(category)
            .then(payload => {
                return dispatch(receiveCocktailCategory(payload));
            });
            dispatch(requestCocktailCategory(category));
    }
}

export function loadCocktailDetail(id) {
    return (dispatch) => {
        api
            .cocktailDetail(id)
            .then(payload => {
                return dispatch(receiveCocktailDetail(payload));
            });
            dispatch(requestCocktailDetail(id));
    }
}

export function loadCocktailFilter(filter) {
    return (dispatch) => {
        api
            .cocktailFilter(filter)
            .then(payload => {
                return dispatch(receiveCocktailFilter(payload));
            });
            dispatch(requestCocktailFilter(filter));
    }
}

export function loadCocktailSearch(search) {
    return (dispatch) => {
        api
            .searchCocktail(search)
            .then(payload => {
                return dispatch(receiveCocktailSearch(payload));
            });
            dispatch(requestCocktailSearch(search));
    }
}