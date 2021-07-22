import axios from 'axios'

const types = {
    INITIATE_FETCHING: 'INITIATE_FETCHING',
    FETCHING_SUCCESS: 'FETCHING_SUCCESS',
    FETCHING_ERROR: 'FETCHING_ERROR',
    INITIATE_ADD_TO_FAVOURITES: 'INITIATE_ADD_TO_FAVOURITES',
    ADD_TO_FAVOURITES_SUCCESS: 'ADD_TO_FAVOURITES_SUCCESS',
    ADD_TO_FAVOURITES_ERROR: 'ADD_TO_FAVOURITES_ERROR',
    INITIATE_REMOVE_FAVOURITE: 'INITIATE_REMOVE_FAVOURITE',
    REMOVE_FAVOURITE_SUCCESS: 'REMOVE_FAVOURITE_SUCCESS',
    REMOVE_FAVOURITE_ERROR: 'REMOVE_FAVOURITE_ERROR',
    INITIATE_UPDATE_STAR_RATING: 'INITIATE_UPDATE_STAR_RATING',
    UPDATE_STAR_RATING_SUCCESS: 'UPDATE_STAR_RATING_SUCCESS',
    UPDATE_STAR_RATING_ERROR: 'UPDATE_STAR_RATING_ERROR',
}

export default types

/////////// Handling jokes

const initiateFetchingJoke = () => ({
    type: types.INITIATE_FETCHING
})

const fetchingSuccess = joke => ({
    type: types.FETCHING_SUCCESS,
    joke
})

const fetchingFailure = err => ({
    type: types.FETCHING_ERROR,
    err
})

export const getRandomJoke = () => {
    return (dispatch) => {
        dispatch(initiateFetchingJoke())
        axios.get('https://v2.jokeapi.dev/joke/Any')
            .then(res => {
                dispatch(fetchingSuccess(res))
            })
            .catch(err => {
                dispatch(fetchingFailure(err))
            })
    }
}

/////////// Favourites

//add to favourites

const initiateAddToFavourites = () => ({
    type: types.INITIATE_ADD_TO_FAVOURITES
})

const addToFavouritesSuccess = jokeToFavourites => ({
    type: types.ADD_TO_FAVOURITES_SUCCESS,
    jokeToFavourites
})

const addToFavouritesFailure = error => ({
    type: types.ADD_TO_FAVOURITES_ERROR,
    error
})

export const startAddToFavourites = jokeToFavourites => {
    return dispatch => {
        try {
            dispatch(initiateAddToFavourites())
            dispatch(addToFavouritesSuccess(jokeToFavourites))
            dispatch(getRandomJoke())
        } catch(err) {
            dispatch(addToFavouritesFailure(err))
        }
    }
}


//remove from favourites


const initiateRemoveFavourite = () => ({
    type: types.INITIATE_REMOVE_FAVOURITE
})

const removeFavouriteSuccess = id => ({
    type: types.REMOVE_FAVOURITE_SUCCESS,
    id
})

const removeFavouriteFailure = error => ({
    type: types.REMOVE_FAVOURITE_ERROR,
    error
})

export const startRemoveFromFavourites = id => {
    return dispatch => {
        try {
            dispatch(initiateRemoveFavourite())
            dispatch(removeFavouriteSuccess(id))
        } catch(err) {
            dispatch(removeFavouriteFailure(err))
        }
    }
}

/////////// Star Rating

const initiateUpdateStarRating = () => ({
    type: types.INITIATE_UPDATE_STAR_RATING,
})

const updateStarRatingSuccess = dataForUpdate => ({
    type: types.UPDATE_STAR_RATING_SUCCESS,
    dataForUpdate
})

const updateStarRatingFailure = error => ({
    type: types.UPDATE_STAR_RATING_ERROR,
    error
})

export const startUpdateStarRating = (newRating) => {
    return dispatch => {
        try {
            dispatch(initiateUpdateStarRating())
            dispatch(updateStarRatingSuccess(newRating))
        } catch(err) {
            dispatch(updateStarRatingFailure(err))
        }
    }
}