import { useSelector } from "react-redux"

const AddToFavouritesButton = ({openModal}) => {
    const isFavourite = useSelector(state=>state.jokes.joke.isFavourite)

    return (
        <div>
            <div className="btn-container">
                <button 
                className="btn fav-btn"
                onClick={openModal}
                disabled={isFavourite}> 
                    {isFavourite ? 'Already a favourite :D' : 'I laughed :)'}
                </button>
            </div>
        </div>
    )
}

export default AddToFavouritesButton
