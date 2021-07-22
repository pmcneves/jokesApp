import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke } from "../../actions/jokesActions";
import Joke from "../../components/Joke";
import Modal from "../../containers/Modal";
import { FaRegLaughBeam } from "react-icons/fa";
import Button from "../../components/Buttons/Button";

const Jokes = () => {
  const dispatch = useDispatch();

  //selectors
  const isFavourite = useSelector(state=>state.jokes.joke.isFavourite)
  const getLoadingStatus = useSelector(state => state.jokes.loading)
  const joke = useSelector(state=>state.jokes.joke.jokeData.data)

  //btn to fetch joke
  const fetchJoke = () => {
    dispatch(getRandomJoke())
  }

  //modal handling
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }


  return (
      <section className="section">
        {!joke && 
          <div className="no-joke">
            <p className="no-joke-p">Click the button bellow and have fun!</p>
            <FaRegLaughBeam />
          </div>
        }
        {joke && (
          <Joke joke={joke}/>
        )}
        <div className="flex justify-center">
          <Button 
            isDisabled={getLoadingStatus} 
            classes={'btn'} 
            fn={fetchJoke}
          >
            {getLoadingStatus ? 'Fetching new joke...' : ' Give me jokes!' }
          </Button>
          {joke && (
            <Button 
              fn={openModal}
              classes={'btn fav-btn'}
              isDisabled={isFavourite}
            >
                {isFavourite ? 'Already a favourite :D' : 'I laughed :)'}
            </Button>
          )}
        </div>
        <Modal 
          isModalOpen={isModalOpen} 
          closeModal={closeModal} 
          joke={joke}
          />
      </section>
  );
}

export default Jokes;
