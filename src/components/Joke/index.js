const Joke = ({joke}) => {
    return (
        <div className="joke-container">
            {joke.type === 'twopart' ? (
                <div>
                    <p className="joke-setup"> {joke.setup}</p>
                    <p className="joke-delivery"> {joke.delivery}</p>
                </div>
            ) : (
                <p className="joke-setup">{joke.joke}</p>
             )}
        </div>

    )
}

export default Joke
