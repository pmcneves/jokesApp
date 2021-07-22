import { useDispatch, useSelector } from "react-redux"
import { sortByRatingHandler } from "../../actions/filters"
import Favourite from "../../containers/Favourite"
import { getSortedFavourites } from "./selectors"
import {useMemo} from 'react'


const Library = () => {

    const dispatch = useDispatch()

    const {favourites} = useSelector(state=>state.jokes)
    const {sortBy} = useSelector(state=>state.filters)

    const sortByHandler = e => {
        dispatch(sortByRatingHandler(e.target.value))
    }
    
    const sorted = useMemo(()=>{
        return getSortedFavourites(favourites, sortBy)
    },[favourites, sortBy])
    
    console.log(sorted, sortBy)

    return (
        <section className="section">
            {sorted.length === 0 ? (
                <div className="text-center">
                    <h3>No favourites... yet!</h3>
                </div>
            ) : (
                <div>
                    <div className="justify-center flex align-items-center filters-bar">
                        <h4 className="filters-bar-title">Sort by: </h4>
                        <select onChange={sortByHandler} defaultValue="">
                            <option value="" disabled hidden>Choose option</option>
                            <option value="ratingsAsc">Funnier first</option>
                            <option value="ratingsDesc">Not so funny first!</option>
                        </select>
                    </div>
                    <div>
                        {sorted.map( (favourite,i) => 
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
