import {FaStar} from 'react-icons/fa'

const StarRatings = ({setStarRating, starRating, setHover, hover}) => {


    return (
        <section className="ratings">
            {[...Array(5)].map( (star, i) => {
                const rating = i + 1//to not start at zero
                return (
                    <label key={rating}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={rating} 
                            onClick={()=>setStarRating(rating)}
                        />
                        <FaStar 
                            className="star"
                            color={rating <= (hover || starRating ) ? '#ffc107' : '#e4e5e9'} 
                            size={20} 
                            onMouseEnter={()=>setHover(rating)}
                            onMouseLeave={()=>setHover(null)}
                        />
                    </label>
                )
                })}
        </section>
    )
}

export default StarRatings
