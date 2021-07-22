import { useDispatch } from "react-redux"
import { startAddToFavourites } from "../../actions/jokesActions"

const AddToFavouritesButton = ({ starRating, joke, closeModal }) => {
    const dispatch=useDispatch()

    const addToFavouritesHandler = () => {
        const dataForFavourites = {
            starRating,
            joke
        }
        dispatch(startAddToFavourites(dataForFavourites))
        closeModal()
    }

    return (
        <div className="btn-container">
            <button onClick={addToFavouritesHandler}>Add to favourites</button>
        </div>
    )
}

export default AddToFavouritesButton
