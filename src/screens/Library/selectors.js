//sorting selector

export const getSortedFavourites = (favourites, sortBy) =>  {
    const sortedFavourites = favourites.sort( (a,b) => {
        if(sortBy === 'ratingAsc') {
            return a.starRating < b.starRating ? 1 : -1
        } else if (sortBy === 'ratingDesc') {
            return b.starRating < a.starRating ? 1 : -1
        }
    })
    return sortedFavourites
}
