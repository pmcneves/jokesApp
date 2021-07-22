import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { startRemoveFromFavourites, startUpdateStarRating } from "../../actions/jokesActions"


import StarRatings from "../../components/StarRating"

const Favourite = ({favourite, index}) => {
    const [starRating, setStarRating] = useState(1)
    const [hover, setHover] = useState(null)
    const dispatch = useDispatch()

    
    const updateStarRating = newRating => {
        const dataForUpdate = {
            newRating,
            id: favourite.joke.id
        }
        dispatch(startUpdateStarRating(dataForUpdate))
    }
    
    //get favourite rating on mount and on update
    useEffect(() => {
        setStarRating(favourite.starRating)
    }, [updateStarRating])

    //remove favourite handler
    const removeFavourite = id => {
        dispatch(startRemoveFromFavourites(id))
    }

    return (
        <div className="flex align-items-center favourite-container">
            <h3 className="favourite-joke-counter">#{index + 1}</h3>
            <div className="favourite-joke">
                {favourite.joke.type === 'twopart' ? (
                    <div className="text-center">
                        <p className="joke-setup"> {favourite.joke.setup}</p>
                        <p className="joke-delivery"> {favourite.joke.delivery}</p>
                    </div>    
                    ) : (
                    <p className="text-center joke-setup">{favourite.joke.joke}</p>
                    )
                }
                <StarRatings 
                    setStarRating={updateStarRating}
                    starRating={starRating}
                    setHover={setHover}
                    hover={hover}
                />
            </div>
            <div className="favourite-removeBtn-container">
                <FaTimes className="favourite-removeBtn" onClick={()=>removeFavourite(favourite.joke.id)}/>
            </div>
        </div>
    )
}

export default Favourite
