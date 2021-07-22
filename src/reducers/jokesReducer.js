import types from "../actions/jokesActions";

const initialState = {
    loading: false,
    joke: {
        jokeData:{},
        isFavourite: false,
    },
    favourites: [],
    error: null
}

const jokesReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.INITIATE_FETCHING:
            return {
                ...state,
                loading: true
            }
        case types.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                joke: {
                    ...state.joke,
                    isFavourite: state.favourites.includes(action.joke.data.id) ? true : false,
                    jokeData: action.joke,
                }
            }
        case types.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case types.INITIATE_ADD_TO_FAVOURITES:
            return {
                ...state,
                loading: true
            }
        case types.ADD_TO_FAVOURITES_SUCCESS:
            return {
                ...state,
                loading: false,
                joke: {
                    ...state.joke,
                    isFavourite: true
                },
                favourites: [
                    ...state.favourites,
                    action.jokeToFavourites
                ]
            }
        case types.INITIATE_REMOVE_FAVOURITE:
            return {
                ...state,
                loading: true
            }
        case types.REMOVE_FAVOURITE_SUCCESS:
            return {
                ...state,
                loading: false,
                favourites: state.favourites.filter( favourite  => favourite.joke.id !== action.id)
            }
        case types.REMOVE_FAVOURITE_ERROR:
            return {
                ...state,
                error: action.err
            }
        case types.INITIATE_UPDATE_STAR_RATING:
            return {
                ...state,
                loading: true,
            }
        case types.UPDATE_STAR_RATING_SUCCESS:
            const newFavourite = state.favourites.find(favourite => favourite.joke.id === action.dataForUpdate.id)
            newFavourite.starRating = action.dataForUpdate.newRating
            const objIndex = state.favourites.findIndex(favourite => favourite.joke.id === action.dataForUpdate.id)
            return {
                ...state,
                loading: false,
                favourites: [
                    ...state.favourites.slice(0, objIndex),
                    newFavourite,
                    ...state.favourites.slice(objIndex+1)

                ]
            }
        case types.UPDATE_STAR_RATING_ERROR:
            return {
                ...state,
                error: action.err
            }
        default:
            return state
    }
}

export default jokesReducer