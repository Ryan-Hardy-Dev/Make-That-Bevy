import * as actions from "../../actions/Cocktails/Cocktails";

const initialState = {
    isPending: null,
    isPendingDetail: null,
    isPendingFilter: null
};

export function cocktails(state = initialState, action) {
    switch (action.type) {
        case actions.REQUEST_COCKTAIL_CATEGORY: {
            const newState = {
                isPending: true
            };
            return newState;
        };
        case actions.RECEIVE_COCKTAIL_CATEGORY: {
            const cocktail = action.payload;
            const newState = {
                cocktail, 
                isPending: false
            };
            return newState
        };
        default:
            return state;
    }
};

export function cocktailDetail(state = initialState, action) {
    switch (action.type) {
        case actions.REQUEST_COCKTAIL_DETAIL: {
            const newState = {
                isPendingDetail: true
            };
            return newState;
        };
        case actions.RECEIVE_COCKTAIL_DETAIL: {
            const cocktailDetail = action.payload;
            const newState = {
                cocktailDetail,
                isPendingDetail: false
            };
            return newState
        };
        default:
            return state;
    }
};

export function cocktailFilter(state = initialState, action) {
    switch (action.type) {
        case actions.REQUEST_COCKTAIL_FILTER: {
            const newState = {
                isPendingFilter: true
            };
            return newState;
        };
        case actions.RECEIVE_COCKTAIL_FILTER: {
            const cocktailFilter = action.payload;
            const newState = {
                cocktailFilter,
                isPendingFilter: false
            };
            return newState
        };
        default:
            return state;
    }
};