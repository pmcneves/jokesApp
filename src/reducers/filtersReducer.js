import types from "../actions/filters"

const initialState = {
    sortBy: ''
}

const filtersReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.SORT_BY_RATING_ASC:
            return {
                sortBy: 'ratingAsc'
            }
        case types.SORT_BY_RATING_DESC:
            return {
                sortBy: 'ratingDesc'
            }
        default: 
            return state
    }
}


export default filtersReducer