import { useDispatch, useSelector } from "react-redux"
import { sortByRatingHandler } from "../../actions/filters"
import Favourite from "../../containers/Favourite"
import { getSortedFavourites } from "./selectors"


const Library = () => {

    const dispatch = useDispatch()

    const favourites = useSelector(state=>state.jokes.favourites)
    const state = useSelector(state=>state)

    const sortByHandler = e => {
        dispatch(sortByRatingHandler(e.target.value))
    }
    
    getSortedFavourites(state)

    return (
        <section className="section">
            {favourites.length === 0 ? (
                <div className="text-center">
                    <h3>No favourites... yet!</h3>
                </div>
            ) : (
                <div>
                    <div className="justify-center flex">
                        <h4>Sort by: </h4>
                        <select onChange={sortByHandler}>
                            <option value="ratingsAsc">Funnier first</option>
                            <option value="ratingsDesc">Not so funny first!</option>
                        </select>
                    </div>
                    <div>
                        {favourites.map( (favourite,i) => 
                            <Favourite 
                                key={favourite.joke.id} 
                                favourite={favourite}
                                index={i}
                            />
                        )}
                   </div>
               </div>
                )
            }
        </section>
    )
}

export default Library
