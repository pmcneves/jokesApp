const GetJokeButton = ({fetchJoke, getLoadingStatus}) => (
    <div className="btn-container">
        <button 
            className="btn"
            onClick={fetchJoke}
            disabled={getLoadingStatus}> 
            {getLoadingStatus ? 'Fetching new joke...' : ' Give me jokes!' }
        </button>
    </div>
)


export default GetJokeButton
