const types = {
    SORT_BY_RATING_ASC: 'SORT_BY_RATING_ASC',
    SORT_BY_RATING_DESC: 'SORT_BY_RATING_DESC'
}

export default types

const sortByRatingAsc = () => ({
    type: types.SORT_BY_RATING_ASC
})

const sortByRatingDesc = () => ({
    type: types.SORT_BY_RATING_DESC
})

export const sortByRatingHandler = (sortByPreference) => {
    return dispatch => {
        if(sortByPreference === 'ratingsAsc') {
            dispatch(sortByRatingAsc())
        } else if ( sortByPreference === 'ratingsDesc') {
            dispatch(sortByRatingDesc())
        }
    }
}